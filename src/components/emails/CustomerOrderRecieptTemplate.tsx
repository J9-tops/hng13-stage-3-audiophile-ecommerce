import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CustomerOrderReceiptEmailProps {
  customerName?: string;
  orderNumber?: string;
  orderDate?: string;
  items?: OrderItem[];
  subtotal?: number;
  shipping?: number;
  vat?: number;
  total?: number;
  shippingAddress?: {
    address: string;
    city: string;
    zipCode: string;
    country: string;
  };
  paymentMethod?: string;
}

export default function CustomerOrderReceiptEmail({
  customerName = "Customer",
  orderNumber = "#ORD-12345",
  orderDate = new Date().toLocaleDateString(),
  items = [],
  subtotal = 0,
  shipping = 50,
  vat = 0,
  total = 0,
  shippingAddress,
  paymentMethod = "e-Money",
}: CustomerOrderReceiptEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>
          Thank you for your order {orderNumber}! Your order is confirmed.
        </Preview>
        <Container style={container}>
          <Section style={coverSection}>
            <Section style={headerSection}>
              <Img
                src="https://ik.imagekit.io/yxdygwqql/logo.png?updatedAt=1750196889321"
                width="80"
                height="80"
                alt="Store Logo"
                style={avatarStyle}
              />
              <Heading style={nameHeading}>Order Confirmed! 🎉</Heading>
              <Text style={subtitleText}>
                Thank you for your purchase, {customerName}
              </Text>
            </Section>

            <Section style={contentSection}>
              <Section style={orderInfoSection}>
                <Text style={orderInfoText}>
                  <strong>Order Number:</strong> {orderNumber}
                </Text>
                <Text style={orderInfoText}>
                  <strong>Order Date:</strong> {orderDate}
                </Text>
              </Section>

              <Section style={messageSection}>
                <Heading style={h2}>Hi {customerName}! 👋</Heading>
                <Text style={mainText}>
                  Thank you for your order! We&apos;ve received your purchase
                  and are processing it now. You&apos;ll receive another email
                  once your order ships.
                </Text>
              </Section>

              <Section style={itemsSection}>
                <Heading style={h2}>Order Summary</Heading>
                {items.map((item, index) => (
                  <Section key={index} style={itemRow}>
                    <Section style={itemDetails}>
                      <Text style={itemName}>{item.name}</Text>
                      <Text style={itemPrice}>
                        ${item.price.toLocaleString()} x {item.quantity}
                      </Text>
                    </Section>
                    <Text style={itemTotal}>
                      ${(item.price * item.quantity).toLocaleString()}
                    </Text>
                  </Section>
                ))}

                <Hr style={divider} />

                <Section style={totalsSection}>
                  <Section style={totalRow}>
                    <Text style={totalLabel}>SUBTOTAL</Text>
                    <Text style={totalValue}>${subtotal.toLocaleString()}</Text>
                  </Section>
                  <Section style={totalRow}>
                    <Text style={totalLabel}>SHIPPING</Text>
                    <Text style={totalValue}>${shipping.toLocaleString()}</Text>
                  </Section>
                  <Section style={totalRow}>
                    <Text style={totalLabel}>VAT (INCLUDED)</Text>
                    <Text style={totalValue}>${vat.toLocaleString()}</Text>
                  </Section>
                  <Hr style={divider} />
                  <Section style={totalRow}>
                    <Text style={grandTotalLabel}>GRAND TOTAL</Text>
                    <Text style={grandTotalValue}>
                      ${total.toLocaleString()}
                    </Text>
                  </Section>
                </Section>
              </Section>

              {shippingAddress && (
                <Section style={addressSection}>
                  <Heading style={h2}>Shipping Address</Heading>
                  <Text style={addressText}>
                    {shippingAddress.address}
                    <br />
                    {shippingAddress.city}, {shippingAddress.zipCode}
                    <br />
                    {shippingAddress.country}
                  </Text>
                </Section>
              )}

              <Section style={paymentSection}>
                <Heading style={h2}>Payment Method</Heading>
                <Text style={paymentText}>{paymentMethod}</Text>
              </Section>

              <Section style={nextStepsSection}>
                <Heading style={h2}>What&apos;s Next?</Heading>
                <Text style={mainText}>
                  • We&apos;ll send you a shipping confirmation email with
                  tracking information
                  <br />
                  • Estimated delivery: 3-5 business days
                  <br />• Need help? Contact our support team anytime
                </Text>
              </Section>

              <Section style={ctaSection}>
                <Button href="https://j9-pi.vercel.app" style={primaryButton}>
                  Track Your Order
                </Button>
              </Section>
            </Section>
          </Section>

          <Text style={footerText}>
            If you have any questions about your order, please don&apos;t
            hesitate to contact us.
            <br />
            <br />
            Thank you for shopping with us!
            <br />
            The Team
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "600px",
};

const coverSection = {
  backgroundColor: "#fff",
  borderRadius: "12px",
  border: "1px solid #e6e6e6",
  overflow: "hidden",
};

const headerSection = {
  backgroundColor: "#051A38",
  padding: "40px 35px",
  textAlign: "center" as const,
  color: "#fff",
};

const avatarStyle = {
  margin: "0 auto",
  borderRadius: "50%",
};

const nameHeading = {
  fontSize: "24px",
  fontWeight: "bold",
  margin: "20px 0 5px 0",
  color: "#fff",
};

const subtitleText = {
  fontSize: "16px",
  margin: "0",
  color: "rgba(255, 255, 255, 0.8)",
};

const contentSection = {
  padding: "35px",
};

const orderInfoSection = {
  backgroundColor: "#f8fafc",
  padding: "15px 20px",
  borderRadius: "8px",
  margin: "0 0 24px 0",
  textAlign: "center" as const,
};

const orderInfoText = {
  color: "#334155",
  fontSize: "14px",
  margin: "5px 0",
};

const h2 = {
  color: "#333",
  fontSize: "18px",
  fontWeight: "600",
  margin: "24px 0 12px 0",
};

const mainText = {
  color: "#555",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 16px 0",
};

const messageSection = {
  margin: "24px 0",
};

const itemsSection = {
  backgroundColor: "#f8fafc",
  padding: "25px",
  borderRadius: "8px",
  margin: "24px 0",
};

const itemRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 0",
};

const itemDetails = {
  flex: "1",
};

const itemName = {
  color: "#333",
  fontSize: "15px",
  fontWeight: "600",
  margin: "0 0 5px 0",
};

const itemPrice = {
  color: "#666",
  fontSize: "14px",
  margin: "0",
};

const itemTotal = {
  color: "#333",
  fontSize: "15px",
  fontWeight: "600",
  margin: "0",
};

const divider = {
  borderColor: "#e2e8f0",
  margin: "15px 0",
};

const totalsSection = {
  padding: "15px 0",
};

const totalRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "8px 0",
};

const totalLabel = {
  color: "#64748b",
  fontSize: "13px",
  fontWeight: "500",
  margin: "0",
  textTransform: "uppercase" as const,
};

const totalValue = {
  color: "#334155",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0",
};

const grandTotalLabel = {
  color: "#333",
  fontSize: "14px",
  fontWeight: "700",
  margin: "0",
  textTransform: "uppercase" as const,
};

const grandTotalValue = {
  color: "#d97706",
  fontSize: "20px",
  fontWeight: "700",
  margin: "0",
};

const addressSection = {
  backgroundColor: "#f1f5f9",
  padding: "20px",
  borderRadius: "8px",
  margin: "24px 0",
};

const addressText = {
  color: "#475569",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: "0",
};

const paymentSection = {
  margin: "24px 0",
};

const paymentText = {
  color: "#555",
  fontSize: "15px",
  margin: "0",
  fontWeight: "500",
};

const nextStepsSection = {
  margin: "32px 0",
};

const ctaSection = {
  textAlign: "center" as const,
  margin: "32px 0",
};

const primaryButton = {
  backgroundColor: "#051A38",
  borderRadius: "8px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "14px 32px",
  border: "none",
  cursor: "pointer",
};

const footerText = {
  color: "#666",
  fontSize: "14px",
  lineHeight: "1.6",
  padding: "20px 35px 0",
  textAlign: "center" as const,
};
