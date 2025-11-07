"use client";

import useCartStore from "@/stores/cart";
import { Product } from "@/types";
import { toast } from "sonner";
import QuantitySelector from "./QuantitySelector";

export default function CartButtons({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);

  const cart = useCartStore((state) => state.cart);

  const handleAddToCart = () => {
    addItem({ ...product });
    toast.success(`Successfully added to cart`);
  };

  const isInCart = cart.some((item) => item._id === product._id);

  return (
    <div className="mx-0 grid grid-cols-2 items-center gap-6 pt-4 md:mx-auto lg:mx-0 lg:max-w-sm">
      {isInCart && <QuantitySelector product={product} />}

      <button
        onClick={handleAddToCart}
        disabled={isInCart}
        className="cursor-pointer bg-[#D87D4A] px-3 py-4 text-sm font-bold tracking-wider text-white transition-colors duration-300 hover:bg-[#FBAF85] disabled:cursor-not-allowed disabled:bg-[#FBAF85] lg:px-8"
      >
        ADD TO CART
      </button>
    </div>
  );
}
