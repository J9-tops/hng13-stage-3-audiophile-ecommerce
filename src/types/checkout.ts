import { z } from "zod";

export const checkoutSchema = z
  .object({
    // Billing Details
    name: z.string().min(1, "Name is required"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    phoneNumber: z.string().min(1, "Phone number is required"),

    // Shipping Info
    address: z.string().min(1, "Address is required"),
    zipCode: z.string().min(1, "ZIP Code is required"),
    city: z.string().min(1, "City is required"),
    country: z.string().min(1, "Country is required"),

    // Payment Details
    paymentMethod: z.enum(["e-money", "cash-on-delivery"] as const, {
      message: "Please select a payment method",
    }),
    eMoneyNumber: z.string().optional(),
    eMoneyPIN: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.paymentMethod === "e-money") {
      if (!data.eMoneyNumber) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "e-Money Number is required",
          path: ["eMoneyNumber"],
        });
      }
      if (!data.eMoneyPIN) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "e-Money PIN is required",
          path: ["eMoneyPIN"],
        });
      }
    }
  });

export type CheckoutFormValues = z.infer<typeof checkoutSchema>;
