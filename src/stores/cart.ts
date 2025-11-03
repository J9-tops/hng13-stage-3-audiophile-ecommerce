import { Product } from "@/types";
import { create } from "zustand";

export interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  cart: CartItem[];
  addItem: (item: Product) => void;
  removeItem: (id: number | string) => void;
  updateItemQuantity: (id: number | string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const useCartStore = create<CartStore>((set, get) => ({
  cart: [],

  addItem: (item) => {
    const existingItem = get().cart.find((i) => i.id === item.id);
    if (existingItem) {
      set({
        cart: get().cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
        ),
      });
    } else {
      set({ cart: [...get().cart, { ...item, quantity: 1 }] });
    }
  },

  removeItem: (id) => {
    set({ cart: get().cart.filter((i) => i.id !== id) });
  },

  updateItemQuantity: (id, quantity) => {
    if (quantity <= 0) {
      get().removeItem(id);
    } else {
      set({
        cart: get().cart.map((i) => (i.id === id ? { ...i, quantity } : i)),
      });
    }
  },

  clearCart: () => set({ cart: [] }),

  getTotalItems: () =>
    get().cart.reduce((total, item) => total + item.quantity, 0),

  getTotalPrice: () =>
    get().cart.reduce((total, item) => total + item.price * item.quantity, 0),
}));

export default useCartStore;
