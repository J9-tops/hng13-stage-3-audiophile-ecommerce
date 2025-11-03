"use client";
import useCartStore from "@/stores/cart";
import { Product } from "@/types";

const QuantitySelector = ({ product }: { product: Product }) => {
  const cartItem = useCartStore((state) =>
    state.cart.find((i) => i._id === product._id),
  );
  const updateItemQuantity = useCartStore((state) => state.updateItemQuantity);

  const decrease = () => {
    if (cartItem?.quantity && cartItem.quantity > 1) {
      updateItemQuantity(product._id, cartItem.quantity - 1);
    }
  };

  const increase = () => {
    updateItemQuantity(product._id, (cartItem?.quantity || 0) + 1);
  };

  return (
    <div className="flex items-center gap-6 bg-gray-200 px-3 py-4 lg:px-6">
      <button
        onClick={decrease}
        className="flex h-8 w-8 cursor-pointer items-center justify-center text-2xl font-bold text-gray-400 transition-colors duration-200 hover:text-orange-500"
        aria-label="Decrease quantity"
      >
        −
      </button>

      <span className="min-w-8 text-center text-2xl font-bold text-black">
        {cartItem?.quantity || 1}
      </span>

      <button
        onClick={increase}
        className="flex h-8 w-8 cursor-pointer items-center justify-center text-2xl font-bold text-gray-400 transition-colors duration-200 hover:text-orange-500"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
