"use client";

import Summary from "@/components/pages/checkout/Summary";
import useCartStore from "@/stores/cart";
import { useModalStore } from "@/stores/modal";
import { CheckoutFormValues, checkoutSchema } from "@/types/checkout";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "sonner";

export default function Form() {
  const [paying, setPaying] = useState(false);
  const { cart, getTotalPrice } = useCartStore();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      zipCode: "",
      city: "",
      country: "",
      paymentMethod: undefined,
      eMoneyNumber: "",
      eMoneyPIN: "",
      items: cart,
    },
  });

  const router = useRouter();

  const { updateModal } = useModalStore();

  const paymentMethod = useWatch<CheckoutFormValues>({
    control,
    name: "paymentMethod",
  });

  const onSubmit = async (data: CheckoutFormValues) => {
    try {
      setPaying(true);

      const subtotal = getTotalPrice();
      const shipping = 500;
      const vat = 400;
      const total = subtotal + shipping + vat;

      const orderItems = cart.map((item) => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image.desktop,
      }));

      const fullData = {
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        address: data.address,
        zipCode: data.zipCode,
        city: data.city,
        country: data.country,
        paymentMethod: data.paymentMethod,
        eMoneyNumber: data.eMoneyNumber,
        eMoneyPIN: data.eMoneyPIN,
        items: orderItems,
        subtotal,
        shipping,
        vat,
        total,
      };

      console.log("Sending order data:", fullData);
      await axios.post(`/api/send-order`, fullData);

      toast.success("Order placed successfully!");
      updateModal({ status: "open", modalType: "orderConfirmation" });
      reset();

      setPaying(false);
    } catch (error: unknown) {
      setPaying(false);
      console.error("Order submission error:", error);
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred while processing your order.");
      }
    }
  };

  useEffect(() => {
    if (cart.length === 0) {
      router.replace("/");
    }
  }, [cart, router]);
  return (
    <>
      <div className="rounded-lg bg-white p-6 md:p-12 lg:col-span-2">
        <h1 className="mb-10 text-3xl font-bold">CHECKOUT</h1>

        <form
          onSubmit={handleSubmit(onSubmit, (err) => {
            console.log("❌ Validation errors:", err);
          })}
          id="orderForm"
        >
          <section className="mb-10">
            <h2 className="mb-6 text-sm font-bold tracking-wide text-[#D87D4A]">
              BILLING DETAILS
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className={`mb-2 block text-xs font-bold ${errors.name ? "text-[#CD2C2C]" : ""}`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className={`w-full rounded-lg border-2 p-4 text-sm font-bold ${errors.name ? "border-[#CD2C2C]" : "border-gray-300"} focus:border-[#D87D4A] focus:outline-none`}
                  placeholder="Alexei Ward"
                />
                {errors.name && (
                  <p className="absolute top-0 right-0 text-xs text-[#CD2C2C]">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="relative">
                <label
                  htmlFor="email"
                  className={`mb-2 block text-xs font-bold ${errors.email ? "text-[#CD2C2C]" : ""}`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className={`w-full rounded-lg border-2 p-4 text-sm font-bold ${errors.email ? "border-[#CD2C2C]" : "border-gray-300"} focus:border-[#D87D4A] focus:outline-none`}
                  placeholder="alexei@mail.com"
                />
                {errors.email && (
                  <p className="absolute top-0 right-0 text-xs text-[#CD2C2C]">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="relative">
                <label
                  htmlFor="phoneNumber"
                  className={`mb-2 block text-xs font-bold ${errors.phoneNumber ? "text-[#CD2C2C]" : ""}`}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  {...register("phoneNumber")}
                  className={`w-full rounded-lg border-2 p-4 text-sm font-bold ${errors.phoneNumber ? "border-[#CD2C2C]" : "border-gray-300"} focus:border-[#D87D4A] focus:outline-none`}
                  placeholder="+1 202-555-0136"
                />
                {errors.phoneNumber && (
                  <p className="absolute top-0 right-0 text-xs text-[#CD2C2C]">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-sm font-bold tracking-wide text-[#D87D4A]">
              SHIPPING INFO
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="relative md:col-span-2">
                <label
                  htmlFor="address"
                  className={`mb-2 block text-xs font-bold ${errors.address ? "text-[#CD2C2C]" : ""}`}
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  {...register("address")}
                  className={`w-full rounded-lg border-2 p-4 text-sm font-bold ${errors.address ? "border-[#CD2C2C]" : "border-gray-300"} focus:border-[#D87D4A] focus:outline-none`}
                  placeholder="1137 Williams Avenue"
                />
                {errors.address && (
                  <p className="absolute top-0 right-0 text-xs text-[#CD2C2C]">
                    {errors.address.message}
                  </p>
                )}
              </div>
              <div className="relative">
                <label
                  htmlFor="zipCode"
                  className={`mb-2 block text-xs font-bold ${errors.zipCode ? "text-[#CD2C2C]" : ""}`}
                >
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  {...register("zipCode")}
                  className={`w-full rounded-lg border-2 p-4 text-sm font-bold ${errors.zipCode ? "border-[#CD2C2C]" : "border-gray-300"} focus:border-[#D87D4A] focus:outline-none`}
                  placeholder="10001"
                />
                {errors.zipCode && (
                  <p className="absolute top-0 right-0 text-xs text-[#CD2C2C]">
                    {errors.zipCode.message}
                  </p>
                )}
              </div>
              <div className="relative">
                <label
                  htmlFor="city"
                  className={`mb-2 block text-xs font-bold ${errors.city ? "text-[#CD2C2C]" : ""}`}
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  {...register("city")}
                  className={`w-full rounded-lg border-2 p-4 text-sm font-bold ${errors.city ? "border-[#CD2C2C]" : "border-gray-300"} focus:border-[#D87D4A] focus:outline-none`}
                  placeholder="New York"
                />
                {errors.city && (
                  <p className="absolute top-0 right-0 text-xs text-[#CD2C2C]">
                    {errors.city.message}
                  </p>
                )}
              </div>
              <div className="relative">
                <label
                  htmlFor="country"
                  className={`mb-2 block text-xs font-bold ${errors.country ? "text-[#CD2C2C]" : ""}`}
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  {...register("country")}
                  className={`w-full rounded-lg border-2 p-4 text-sm font-bold ${errors.country ? "border-[#CD2C2C]" : "border-gray-300"} focus:border-[#D87D4A] focus:outline-none`}
                  placeholder="United States"
                />
                {errors.country && (
                  <p className="absolute top-0 right-0 text-xs text-[#CD2C2C]">
                    {errors.country.message}
                  </p>
                )}
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-sm font-bold tracking-wide text-[#D87D4A]">
              PAYMENT DETAILS
            </h2>
            <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  className={`mb-2 block text-xs font-bold ${errors.paymentMethod ? "text-[#CD2C2C]" : ""}`}
                >
                  Payment Method
                </label>
              </div>
              <div className="flex flex-col space-y-4">
                <div
                  className={`flex cursor-pointer items-center rounded-lg border-2 p-4 ${paymentMethod === "e-money" ? "border-[#D87D4A]" : ""} ${errors.paymentMethod ? "border-[#CD2C2C]" : "border-gray-300"}`}
                >
                  <input
                    type="radio"
                    id="e-money"
                    value="e-money"
                    {...register("paymentMethod")}
                    className="mr-4 h-5 w-5 accent-[#D87D4A]"
                  />
                  <label
                    htmlFor="e-money"
                    className="cursor-pointer text-sm font-bold"
                  >
                    e-Money
                  </label>
                </div>
                <div
                  className={`flex cursor-pointer items-center rounded-lg border-2 p-4 ${paymentMethod === "e-money" ? "border-[#D87D4A]" : ""} ${errors.paymentMethod ? "border-[#CD2C2C]" : "border-gray-300"}`}
                >
                  <input
                    type="radio"
                    id="cash-on-delivery"
                    value="cash-on-delivery"
                    {...register("paymentMethod")}
                    className="mr-4 h-5 w-5 accent-[#D87D4A]"
                  />
                  <label
                    htmlFor="cash-on-delivery"
                    className="cursor-pointer text-sm font-bold"
                  >
                    Cash on Delivery
                  </label>
                </div>
              </div>
              {errors.paymentMethod && (
                <p className="absolute -top-6 right-0 mt-1 text-xs text-[#CD2C2C] md:col-span-1">
                  {errors.paymentMethod.message}
                </p>
              )}
            </div>

            {paymentMethod === "e-money" && (
              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="eMoneyNumber"
                    className={`mb-2 block text-xs font-bold ${errors.eMoneyNumber ? "text-[#CD2C2C]" : ""}`}
                  >
                    e-Money Number
                  </label>
                  <input
                    type="text"
                    id="eMoneyNumber"
                    {...register("eMoneyNumber")}
                    className={`w-full rounded-lg border-2 p-4 text-sm font-bold ${errors.eMoneyNumber ? "border-[#CD2C2C]" : "border-gray-300"} focus:border-[#D87D4A] focus:outline-none`}
                    placeholder="238521993"
                  />
                  {errors.eMoneyNumber && (
                    <p className="mt-1 text-xs text-[#CD2C2C]">
                      {errors.eMoneyNumber.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="eMoneyPIN"
                    className={`mb-2 block text-xs font-bold ${errors.eMoneyPIN ? "text-[#CD2C2C]" : ""}`}
                  >
                    e-Money PIN
                  </label>
                  <input
                    type="text"
                    id="eMoneyPIN"
                    {...register("eMoneyPIN")}
                    className={`w-full rounded-lg border-2 p-4 text-sm font-bold ${errors.eMoneyPIN ? "border-[#CD2C2C]" : "border-gray-300"} focus:border-[#D87D4A] focus:outline-none`}
                    placeholder="6891"
                  />
                  {errors.eMoneyPIN && (
                    <p className="mt-1 text-xs text-[#CD2C2C]">
                      {errors.eMoneyPIN.message}
                    </p>
                  )}
                </div>
              </div>
            )}
            {paymentMethod === "cash-on-delivery" && (
              <div className="mt-6 flex items-center gap-6">
                <Image src="/cash.svg" alt="" width={48} height={48} />
                <p className="max-w-lg text-sm text-black/50">
                  The &apos;Cash on Delivery&apos; option enables you to pay in
                  cash when our delivery courier arrives at your residence. Just
                  make sure your address is correct so that your order will not
                  be cancelled.
                </p>
              </div>
            )}
          </section>
        </form>
      </div>

      <div className="lg:col-span-1">
        <Summary paying={paying} />
      </div>
    </>
  );
}
