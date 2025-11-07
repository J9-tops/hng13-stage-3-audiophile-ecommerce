"use client";

import { useQuery } from "convex/react";
import {
  CheckCircle,
  CreditCard,
  Hash,
  Mail,
  MapPin,
  Package,
  Phone,
} from "lucide-react";
import Image from "next/image";
import { api } from "../../../../convex/_generated/api";
import GoBack from "../single-product/GoBack";

type Props = {
  id: string;
};

export default function ViewOrders({ id }: Props) {
  const fullId = id;
  const orderNumber = fullId.toUpperCase();
  const orders = useQuery(api.orders.getByOrderNumber, { orderNumber });

  if (orders === undefined) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="h-12 w-12 animate-spin rounded-full border-t-4 border-b-4 border-orange-600"></div>
      </div>
    );
  }

  if (!orders) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-lg rounded-xl bg-white p-8 text-center shadow-2xl">
          <div className="mb-6 text-6xl text-orange-500">📦</div>
          <h2 className="mb-3 text-3xl font-extrabold text-gray-900">
            No Orders Found
          </h2>
          <p className="text-gray-600">
            It looks like this user hasn&apos;t placed any orders yet.
          </p>
        </div>
      </div>
    );
  }

  const getStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "bg-green-100 text-green-800";
      case "shipped":
        return "bg-blue-100 text-blue-800";
      case "processing":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // const formattedDate = new Date(orders.orderDate).toLocaleDateString("en-US", {
  //   year: "numeric",
  //   month: "short",
  //   day: "numeric",
  // });

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-12">
      <div className="mx-auto max-w-277.5">
        <GoBack />
        <div className="mt-3 mb-8 rounded-xl bg-white p-6 shadow-xl sm:p-10">
          <div className="mb-4 flex items-start justify-between border-b border-gray-200 pb-4">
            <div className="flex items-center">
              <CheckCircle className="mr-4 h-10 w-10 text-green-500" />
              <div>
                <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Order Confirmed!
                </h1>
                <p className="mt-1 text-lg text-gray-600">
                  Thank you for your purchase, {orders.customerName}.
                </p>
              </div>
            </div>

            <div className="text-right">
              <div className="inline-flex items-center rounded-full border border-gray-300 bg-gray-50 px-4 py-1 text-sm font-semibold tracking-wider uppercase">
                <Hash className="mr-1 h-4 w-4 text-orange-600" />
                {orders.orderNumber}
              </div>
              {/* <p className="mt-2 flex items-center justify-end text-sm text-gray-500">
                <Calendar className="mr-1 h-4 w-4" />
                {formattedDate}
              </p> */}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4">
            <h2 className="flex items-center text-xl font-bold text-gray-900">
              <Package className="mr-2 h-6 w-6 text-orange-600" />
              Order Status
            </h2>
            <span
              className={`rounded-full px-4 py-1.5 text-sm font-bold shadow-md ${getStatusStyle(orders.status)}`}
            >
              {orders.status.charAt(0).toUpperCase() + orders.status.slice(1)}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div className="rounded-xl bg-white p-6 shadow-xl">
              <h2 className="mb-6 border-b pb-3 text-2xl font-bold text-gray-900">
                Items in Your Order
              </h2>
              <div className="space-y-6">
                {orders.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="flex flex-1 items-center">
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="mr-4 h-16 w-16 rounded-lg border border-gray-100 object-cover"
                        />
                      )}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Qty: **{item.quantity}** | $
                          {item.price.toLocaleString("en-US")} each
                        </p>
                      </div>
                    </div>
                    <p className="text-lg font-bold text-gray-900">
                      ${(item.price * item.quantity).toLocaleString("en-US")}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-xl">
              <h2 className="mb-6 border-b pb-3 text-2xl font-bold text-gray-900">
                Order Summary
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-medium">
                    ${orders.subtotal.toLocaleString("en-US")}
                  </span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className="font-medium">
                    ${orders.shipping.toLocaleString("en-US")}
                  </span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>VAT (Included)</span>
                  <span className="font-medium">
                    ${orders.vat.toLocaleString("en-US")}
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-xl font-extrabold text-gray-900">
                    <span>Grand Total</span>
                    <span className="text-orange-600">
                      ${orders.total.toLocaleString("en-US")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-blue-300 bg-blue-50 p-6 text-center shadow-lg">
              <p className="text-lg text-blue-900">
                A detailed invoice and confirmation email has been sent to{" "}
                <strong className="font-extrabold">
                  {orders.customerEmail}
                </strong>
                .
              </p>
            </div>
          </div>

          <div className="space-y-8 lg:col-span-1">
            <div className="rounded-xl bg-white p-6 shadow-xl">
              <h2 className="mb-4 flex items-center text-xl font-bold text-gray-900">
                <Mail className="mr-2 h-5 w-5 text-gray-500" />
                Contact Info
              </h2>
              <InfoRow
                icon={<Mail />}
                label="Email"
                value={orders.customerEmail}
              />
              <InfoRow
                icon={<Phone />}
                label="Phone"
                value={orders.customerPhone}
              />
            </div>

            <div className="rounded-xl bg-white p-6 shadow-xl">
              <h2 className="mb-4 flex items-center text-xl font-bold text-gray-900">
                <MapPin className="mr-2 h-5 w-5 text-gray-500" />
                Shipping Address
              </h2>
              <p className="font-medium text-gray-900">{orders.customerName}</p>
              <p className="text-gray-700">{orders.shippingAddress.address}</p>
              <p className="text-gray-700">
                {orders.shippingAddress.city}, {orders.shippingAddress.zipCode}
              </p>
              <p className="text-gray-700">{orders.shippingAddress.country}</p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-xl">
              <h2 className="mb-4 flex items-center text-xl font-bold text-gray-900">
                <CreditCard className="mr-2 h-5 w-5 text-gray-500" />
                Payment Method
              </h2>
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-900">
                  {orders.paymentMethod === "e-money"
                    ? "E-Money"
                    : "Cash on Delivery (COD)"}
                </span>
                {orders.paymentMethod === "e-money" && orders.eMoneyNumber && (
                  <span className="text-sm text-gray-600 italic">
                    Card: •••• {orders.eMoneyNumber.slice(-4)}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const InfoRow = ({
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="mb-3 border-b border-gray-100 pb-3 last:mb-0 last:border-b-0 last:pb-0">
    <p className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
      {label}
    </p>
    <p className="font-medium text-gray-900">{value}</p>
  </div>
);
