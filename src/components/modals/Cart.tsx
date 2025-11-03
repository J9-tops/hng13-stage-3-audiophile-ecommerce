"use client";

import useCartStore from "@/stores/cart";
import { useModalStore } from "@/stores/modal";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";

export default function CartModal() {
  const { cart, updateItemQuantity, clearCart, getTotalPrice } = useCartStore();
  const { updateModal } = useModalStore();

  const handleCheckout = () => {
    updateModal({ status: "open", modalType: "orderConfirmation" });
  };

  const handleClose = () => {
    updateModal({ status: "close", modalType: "cart" });
  };

  const total = getTotalPrice();

  return (
    <div className="flex w-full max-w-[380px] flex-col overflow-hidden rounded-lg bg-white">
      <div className="flex items-center justify-between p-6">
        <h2 className="text-lg font-bold">CART ({cart.length})</h2>
        <div className="flex items-center gap-4">
          <button
            onClick={clearCart}
            className="text-sm text-gray-500 underline hover:text-gray-700"
          >
            Remove all
          </button>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      <div className="flex-1 p-6">
        {cart.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-lg text-gray-500">Your cart is empty</p>
          </div>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <div className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={item.image.mobile}
                    alt={item.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-lg text-gray-500">
                    ${item.price.toLocaleString()}
                  </p>
                </div>

                <div className="flex items-center gap-4 rounded bg-gray-100 px-4 py-2">
                  <button
                    onClick={() =>
                      updateItemQuantity(
                        item.id,
                        Math.max(0, item.quantity - 1),
                      )
                    }
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center text-lg font-semibold">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-lg text-gray-500">TOTAL</span>
          <span className="text-lg font-bold">${total.toLocaleString()}</span>
        </div>
        <button
          onClick={handleCheckout}
          disabled={cart.length === 0}
          className="w-full bg-[#D87D4A] py-3 text-lg font-semibold text-white transition-colors hover:bg-[#C17A4F] disabled:cursor-not-allowed disabled:opacity-50"
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
}
