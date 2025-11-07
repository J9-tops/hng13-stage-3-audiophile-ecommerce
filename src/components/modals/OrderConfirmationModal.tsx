"use client";

import useCartStore from "@/stores/cart";
import { useModalStore } from "@/stores/modal";
import { Check } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function OrderConfirmationModal() {
  const { cart, clearCart, getTotalPrice } = useCartStore();
  const { updateModal } = useModalStore();
  const router = useRouter();

  const handleBackToHome = () => {
    clearCart();
    updateModal({ status: "close", modalType: "orderConfirmation" });
    router.replace("/orders");
  };

  const total = getTotalPrice();
  const displayItem = cart[0];
  const otherItemsCount = cart.length - 1;

  return (
    <div
      className="w-full max-w-2xl rounded-lg bg-white p-8 md:p-12"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="mb-8 flex flex-col items-start">
        <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-[#D7885B]">
          <Check size={24} className="text-white" strokeWidth={3} />
        </div>

        <h1 className="mb-4 text-3xl font-bold">
          THANK YOU
          <br />
          FOR YOUR ORDER
        </h1>

        <p className="text-base text-gray-500">
          You will receive an email confirmation shortly.
        </p>
      </div>

      <div className="mb-8 flex flex-col overflow-hidden rounded-lg md:flex-row">
        <div className="flex-1 bg-[#F1F1F1] p-6">
          {displayItem && (
            <>
              <div className="mb-4 flex items-center gap-4">
                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden">
                  <Image
                    src={displayItem.image.mobile}
                    alt={displayItem.name}
                    fill
                    className="object-contain p-1"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold">{displayItem.name}</h3>
                  <p className="text-gray-500">
                    ${displayItem.price.toLocaleString()}
                  </p>
                </div>

                <div className="text-gray-500">x{displayItem.quantity}</div>
              </div>
              {otherItemsCount > 0 && <hr className="mb-2 border-[#000]/8" />}
              {otherItemsCount > 0 && (
                <p className="text-center text-sm text-gray-500">
                  and {otherItemsCount} other item
                  {otherItemsCount > 1 ? "s" : ""}
                </p>
              )}
            </>
          )}
        </div>

        <div className="flex flex-col justify-center bg-black p-6 md:w-64">
          <p className="mb-2 text-sm text-gray-400">GRAND TOTAL</p>
          <p className="text-2xl font-bold text-white">
            ${total.toLocaleString()}
          </p>
        </div>
      </div>

      <button
        onClick={handleBackToHome}
        className="w-full cursor-pointer rounded bg-[#D7885B] py-4 text-lg font-semibold text-white transition-colors hover:bg-[#C17A4F]"
      >
        BACK TO HOME
      </button>
    </div>
  );
}
