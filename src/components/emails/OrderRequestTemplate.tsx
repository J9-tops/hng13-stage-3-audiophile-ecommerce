import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
interface OrderItem {
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface OrderRequestEmailProps {
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
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

export default function OrderRequestEmail({
  customerName = "Customer",
  customerEmail = "",
  customerPhone = "",
  orderNumber = "#ORD-12345",
  orderDate = new Date().toLocaleDateString(),
  items = [],
  subtotal = 0,
  shipping = 50,
  vat = 0,
  total = 0,
  shippingAddress,
  paymentMethod = "e-Money",
}: OrderRequestEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>
          New Order {orderNumber} from {customerName}
        </Preview>
        <Container style={container}>
          <Section style={coverSection}>
            <Section style={headerSection}>
              <Img
                src="https://ik.imagekit.io/yxdygwqql/logo.png?updatedAt=1750196889321"
                width="60"
                height="60"
                alt="Notification"
                style={iconStyle}
              />
              <Heading style={nameHeading}>🛒 New Order Received!</Heading>
              <Text style={subtitleText}>A customer just placed an order</Text>
            </Section>

            <Section style={contentSection}>
              <Section style={alertSection}>
                <Text style={alertText}>
                  💰 New order worth ${total.toLocaleString()} received!
                </Text>
              </Section>

              <Section style={detailsSection}>
                <Heading style={h2}>Order Information</Heading>
                <Section style={detailItem}>
                  <Text style={detailLabel}>Order Number:</Text>
                  <Text style={detailValue}>{orderNumber}</Text>
                </Section>
                <Section style={detailItem}>
                  <Text style={detailLabel}>Order Date:</Text>
                  <Text style={detailValue}>{orderDate}</Text>
                </Section>
                <Section style={detailItem}>
                  <Text style={detailLabel}>Payment Method:</Text>
                  <Text style={detailValue}>{paymentMethod}</Text>
                </Section>
              </Section>

              <Section style={detailsSection}>
                <Heading style={h2}>Customer Details</Heading>
                <Section style={detailItem}>
                  <Text style={detailLabel}>Name:</Text>
                  <Text style={detailValue}>{customerName}</Text>
                </Section>
                <Section style={detailItem}>
                  <Text style={detailLabel}>Email:</Text>
                  <Text style={detailValue}>{customerEmail}</Text>
                </Section>
                {customerPhone && (
                  <Section style={detailItem}>
                    <Text style={detailLabel}>Phone:</Text>
                    <Text style={detailValue}>{customerPhone}</Text>
                  </Section>
                )}
              </Section>

              {shippingAddress && (
                <Section style={addressSectionNotif}>
                  <Heading style={h2}>Shipping Address</Heading>
                  <Text style={addressTextNotif}>
                    {shippingAddress.address}
                    <br />
                    {shippingAddress.city}, {shippingAddress.zipCode}
                    <br />
                    {shippingAddress.country}
                  </Text>
                </Section>
              )}

              <Section style={itemsSectionNotif}>
                <Heading style={h2}>Order Items</Heading>
                {items.map((item, index) => (
                  <Section key={index} style={itemRowNotif}>
                    <Text style={itemNameNotif}>
                      {item.name} x {item.quantity}
                    </Text>
                    <Text style={itemTotalNotif}>
                      ${(item.price * item.quantity).toLocaleString()}
                    </Text>
                  </Section>
                ))}

                <Hr style={dividerNotif} />

                <Section style={totalRowNotif}>
                  <Text style={totalLabelNotif}>SUBTOTAL:</Text>
                  <Text style={totalValueNotif}>
                    ${subtotal.toLocaleString()}
                  </Text>
                </Section>
                <Section style={totalRowNotif}>
                  <Text style={totalLabelNotif}>SHIPPING:</Text>
                  <Text style={totalValueNotif}>
                    ${shipping.toLocaleString()}
                  </Text>
                </Section>
                <Section style={totalRowNotif}>
                  <Text style={totalLabelNotif}>VAT:</Text>
                  <Text style={totalValueNotif}>${vat.toLocaleString()}</Text>
                </Section>
                <Hr style={dividerNotif} />
                <Section style={totalRowNotif}>
                  <Text style={grandTotalLabelNotif}>GRAND TOTAL:</Text>
                  <Text style={grandTotalValueNotif}>
                    ${total.toLocaleString()}
                  </Text>
                </Section>
              </Section>

              <Section style={ctaSectionNotif}>
                <Button
                  href={`mailto:${customerEmail}?subject=Re: Order ${orderNumber}`}
                  style={primaryButtonNotif}
                >
                  Contact Customer
                </Button>
              </Section>

              <Section style={quickActionsNotif}>
                <Text style={quickActionsTitleNotif}>Quick Actions:</Text>
                <Section style={actionLinksNotif}>
                  <Row align="center">
                    <Column align="center">
                      <Link
                        href={`mailto:${customerEmail}`}
                        style={actionLinkNotif}
                      >
                        Send Email
                      </Link>
                    </Column>
                    {customerPhone && (
                      <>
                        <Column align="center">
                          <Text style={separatorNotif}>•</Text>
                        </Column>
                        <Column align="center">
                          <Link
                            href={`tel:${customerPhone}`}
                            style={actionLinkNotif}
                          >
                            Call Customer
                          </Link>
                        </Column>
                      </>
                    )}
                  </Row>
                </Section>
              </Section>
            </Section>
          </Section>

          <Text style={footerTextNotif}>
            This notification was sent from your store checkout system. Process
            this order promptly to maintain customer satisfaction!
            <br />
            <br />
            Store Order Management System
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

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

const h2 = {
  color: "#333",
  fontSize: "18px",
  fontWeight: "600",
  margin: "24px 0 12px 0",
};

const iconStyle = {
  margin: "0 auto",
  borderRadius: "50%",
};

const alertSection = {
  backgroundColor: "#dcfce7",
  padding: "15px 20px",
  borderRadius: "8px",
  margin: "0 0 30px 0",
  border: "1px solid #16a34a",
};

const alertText = {
  color: "#166534",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0",
  textAlign: "center" as const,
};

const detailsSection = {
  backgroundColor: "#f8fafc",
  padding: "25px",
  borderRadius: "8px",
  margin: "0 0 25px 0",
};

const detailItem = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0 0 12px 0",
  paddingBottom: "8px",
  borderBottom: "1px solid #e2e8f0",
};

const detailLabel = {
  color: "#64748b",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0",
};

const detailValue = {
  color: "#334155",
  fontSize: "14px",
  margin: "0",
  textAlign: "right" as const,
};

const addressSectionNotif = {
  backgroundColor: "#f1f5f9",
  padding: "20px",
  borderRadius: "8px",
  margin: "0 0 25px 0",
};

const addressTextNotif = {
  color: "#475569",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0",
};

const itemsSectionNotif = {
  backgroundColor: "#f8fafc",
  padding: "25px",
  borderRadius: "8px",
  margin: "0 0 25px 0",
  borderLeft: "4px solid #051A38",
};

const itemRowNotif = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 0",
};

const itemNameNotif = {
  color: "#334155",
  fontSize: "14px",
  fontWeight: "500",
  margin: "0",
};

const itemTotalNotif = {
  color: "#334155",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0",
};

const dividerNotif = {
  borderColor: "#e2e8f0",
  margin: "12px 0",
};

const totalRowNotif = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "8px 0",
};

const totalLabelNotif = {
  color: "#64748b",
  fontSize: "13px",
  fontWeight: "500",
  margin: "0",
};

const totalValueNotif = {
  color: "#334155",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0",
};

const grandTotalLabelNotif = {
  color: "#333",
  fontSize: "14px",
  fontWeight: "700",
  margin: "0",
};

const grandTotalValueNotif = {
  color: "#d97706",
  fontSize: "18px",
  fontWeight: "700",
  margin: "0",
};

const ctaSectionNotif = {
  textAlign: "center" as const,
  margin: "32px 0",
};

const primaryButtonNotif = {
  backgroundColor: "#051A38",
  borderRadius: "8px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "14px 28px",
  border: "none",
  cursor: "pointer",
};

const quickActionsNotif = {
  backgroundColor: "#f8fafc",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center" as const,
};

const quickActionsTitleNotif = {
  color: "#334155",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0 0 10px 0",
};

const actionLinksNotif = {
  textAlign: "center" as const,
};

const actionLinkNotif = {
  color: "#051A38",
  fontSize: "14px",
  fontWeight: "500",
  textDecoration: "none",
  margin: "0 10px",
};

const separatorNotif = {
  color: "#ccc",
  fontSize: "14px",
  margin: "0 5px",
};

const footerTextNotif = {
  color: "#666",
  fontSize: "14px",
  lineHeight: "1.6",
  padding: "20px 35px 0",
  textAlign: "center" as const,
};
