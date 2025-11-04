import { z } from "zod";
import { cartItemSchema } from "./cart-item";

export const checkoutSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.email("Invalid email address").min(1, "Email is required"),
    phoneNumber: z.string().min(1, "Phone number is required"),

    address: z.string().min(1, "Address is required"),
    zipCode: z.string().min(1, "ZIP Code is required"),
    city: z.string().min(1, "City is required"),
    country: z.string().min(1, "Country is required"),

    paymentMethod: z.enum(["e-money", "cash-on-delivery"], {
      error: "Please select a payment method",
    }),
    eMoneyNumber: z.string().optional(),
    eMoneyPIN: z.string().optional(),
    items: z.array(cartItemSchema).min(1, "Cart cannot be empty"),
  })
  .superRefine((data, ctx) => {
    if (data.paymentMethod === "e-money") {
      if (!data.eMoneyNumber) {
        ctx.addIssue({
          code: "custom",
          message: "e-Money Number is required",
          path: ["eMoneyNumber"],
        });
      }
      if (!data.eMoneyPIN) {
        ctx.addIssue({
          code: "custom",
          message: "e-Money PIN is required",
          path: ["eMoneyPIN"],
        });
      }
    }
  });

export type CheckoutFormValues = z.infer<typeof checkoutSchema>;
