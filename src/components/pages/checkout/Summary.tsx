"use client";

import Spinner from "@/components/shared/Spinner";
import useCartStore from "@/stores/cart";
import Image from "next/image";

type Props = {
  paying: boolean;
};

export default function Summary({ paying }: Props) {
  const { cart, getTotalPrice } = useCartStore();
  const total = getTotalPrice();

  const grandTotal = total + 400 + 500;
  return (
    <div className="sticky top-6 rounded-lg bg-white p-6 md:p-8">
      <h2 className="mb-8 text-lg font-bold tracking-wider">SUMMARY</h2>
      <div className="mb-8 space-y-6">
        {cart.map((item) => (
          <div key={item._id} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-200">
                <Image
                  src={item.image.desktop}
                  alt={item.name}
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <p className="text-sm font-bold">{item.name}</p>
                <p className="text-sm font-bold text-gray-500">
                  $ {item.price.toLocaleString()}
                </p>
              </div>
            </div>
            <span className="text-sm font-bold text-gray-500">
              x{item.quantity}
            </span>
          </div>
        ))}
      </div>

      <div className="mb-6 space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-500 uppercase">Total</p>
          <p className="text-lg font-bold">$ {total}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-500 uppercase">
            Shipping
          </p>
          <p className="text-lg font-bold">$ 500</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-500 uppercase">
            VAT (Included)
          </p>
          <p className="text-lg font-bold">$ 400</p>
        </div>
      </div>

      <div className="mt-6 mb-8 flex items-center justify-between">
        <p className="text-sm font-medium text-gray-500 uppercase">
          Grand Total
        </p>
        <p className="text-lg font-bold text-[#D87D4A]">$ {grandTotal}</p>
      </div>

      <button
        type="submit"
        form="orderForm"
        disabled={paying}
        className="flex w-full cursor-pointer items-center justify-center gap-4 bg-[#D87D4A] py-4 text-sm font-bold tracking-wider text-white transition-colors hover:bg-[#FBAF85]"
      >
        {paying && <Spinner />}
        <p>{paying ? "CONFIRMING ORDER" : "CONTINUE & PAY"}</p>
      </button>
    </div>
  );
}
