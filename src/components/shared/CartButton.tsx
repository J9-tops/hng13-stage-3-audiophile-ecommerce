"use client";

import useCartStore from "@/stores/cart";
import { useModalStore } from "@/stores/modal";
import Icons from "../ui/icons";

export default function CartButton() {
  const { cart } = useCartStore();
  const { updateModal } = useModalStore();

  const totalItems = cart.length;

  const openCart = () => {
    updateModal({ status: "open", modalType: "cart" });
  };

  return (
    <button
      onClick={openCart}
      className="relative flex cursor-pointer justify-end p-3 lg:min-w-32"
      aria-label="Shopping cart"
    >
      <Icons name="cart" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#D7885B] text-xs font-bold text-white">
          {totalItems}
        </span>
      )}
    </button>
  );
}
