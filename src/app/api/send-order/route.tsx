import CustomerOrderReceiptEmail from "@/components/emails/CustomerOrderRecieptTemplate";
import OrderRequestEmail from "@/components/emails/OrderRequestTemplate";
import { render } from "@react-email/render";
import { ConvexHttpClient } from "convex/browser";
import { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { api } from "../../../../convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface OrderData {
  name: string;
  email: string;
  phoneNumber: string;

  address: string;
  zipCode: string;
  city: string;
  country: string;

  paymentMethod: "e-money" | "cash-on-delivery";
  eMoneyNumber?: string;
  eMoneyPIN?: string;

  items: OrderItem[];
  subtotal: number;
  shipping: number;
  vat: number;
  total: number;
}

export async function POST(req: NextRequest) {
  try {
    const orderData: OrderData = await req.json();

    if (!orderData.name || !orderData.email || !orderData.phoneNumber) {
      return Response.json(
        {
          message: "Missing required customer information",
        },
        { status: 400 },
      );
    }

    if (
      !orderData.address ||
      !orderData.city ||
      !orderData.zipCode ||
      !orderData.country
    ) {
      return Response.json(
        {
          message: "Missing required shipping information",
        },
        { status: 400 },
      );
    }

    if (!orderData.paymentMethod) {
      return Response.json(
        {
          message: "Payment method is required",
        },
        { status: 400 },
      );
    }

    if (
      orderData.paymentMethod === "e-money" &&
      (!orderData.eMoneyNumber || !orderData.eMoneyPIN)
    ) {
      return Response.json(
        {
          message: "e-Money details are required for e-Money payment",
        },
        { status: 400 },
      );
    }

    if (!orderData.items || orderData.items.length === 0) {
      return Response.json(
        {
          message: "Order must contain at least one item",
        },
        { status: 400 },
      );
    }

    const orderNumber = `#ORD-${Date.now().toString().slice(-8)}`;
    const orderDate = new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const orderId = await convex.mutation(api.orders.create, {
      orderNumber,
      orderDate,
      customerName: orderData.name,
      customerEmail: orderData.email,
      customerPhone: orderData.phoneNumber,
      shippingAddress: {
        address: orderData.address,
        city: orderData.city,
        zipCode: orderData.zipCode,
        country: orderData.country,
      },
      paymentMethod: orderData.paymentMethod,
      eMoneyNumber: orderData.eMoneyNumber,
      eMoneyPIN: orderData.eMoneyPIN,
      items: orderData.items,
      subtotal: orderData.subtotal,
      shipping: orderData.shipping,
      vat: orderData.vat,
      total: orderData.total,
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const orderNotificationHtml = await render(
      OrderRequestEmail({
        customerName: orderData.name,
        customerEmail: orderData.email,
        customerPhone: orderData.phoneNumber,
        orderNumber: orderNumber,
        orderDate: orderDate,
        items: orderData.items,
        subtotal: orderData.subtotal,
        shipping: orderData.shipping,
        vat: orderData.vat,
        total: orderData.total,
        shippingAddress: {
          address: orderData.address,
          city: orderData.city,
          zipCode: orderData.zipCode,
          country: orderData.country,
        },
        paymentMethod:
          orderData.paymentMethod === "e-money"
            ? "e-Money"
            : "Cash on Delivery",
      }),
    );

    const mailToYou = {
      subject: `🛒 New Order ${orderNumber} from ${orderData.name}`,
      from: `"Store Orders" <${process.env.EMAIL_USER}>`,
      to: "j9.tops@gmail.com",
      replyTo: orderData.email,
      html: orderNotificationHtml,
    };

    const orderReceiptHtml = await render(
      CustomerOrderReceiptEmail({
        customerName: orderData.name,
        orderNumber: orderNumber,
        orderDate: orderDate,
        items: orderData.items,
        subtotal: orderData.subtotal,
        shipping: orderData.shipping,
        vat: orderData.vat,
        total: orderData.total,
        shippingAddress: {
          address: orderData.address,
          city: orderData.city,
          zipCode: orderData.zipCode,
          country: orderData.country,
        },
        paymentMethod:
          orderData.paymentMethod === "e-money"
            ? "e-Money"
            : "Cash on Delivery",
      }),
    );

    const mailToCustomer = {
      subject: `Order Confirmation ${orderNumber} - Thank you for your purchase! 🎉`,
      from: `"Your Store" <${process.env.EMAIL_USER}>`,
      to: orderData.email,
      html: orderReceiptHtml,
    };

    const [infoToYou, infoToCustomer] = await Promise.all([
      transporter.sendMail(mailToYou),
      transporter.sendMail(mailToCustomer),
    ]);

    return Response.json(
      {
        success: true,
        message: "Order placed successfully! Confirmation emails sent.",
        orderDetails: {
          orderId: orderId,
          orderNumber: orderNumber,
          orderDate: orderDate,
          total: orderData.total,
          notificationSent: !!infoToYou.messageId,
          confirmationSent: !!infoToCustomer.messageId,
          timestamp: new Date().toISOString(),
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error processing order:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to process order",
        error:
          process.env.NODE_ENV === "development"
            ? (error as Error).message
            : "Internal server error",
      },
      { status: 500 },
    );
  }
}
