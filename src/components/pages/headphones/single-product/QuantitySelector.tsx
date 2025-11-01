"use client";
import { useState } from "react";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increase = () => {
    setQuantity(quantity + 1);
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

      <span className="min-w-[2rem] text-center text-2xl font-bold text-black">
        {quantity}
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
