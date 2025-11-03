import { ModalState } from "@/types/modals";
import { create } from "zustand";

export const useModalStore = create<ModalState>()((set) => ({
  modalState: { status: "close", modalType: "cart" },
  updateModal: (newModalState) => set({ modalState: newModalState }),
  closeModal: () =>
    set({
      modalState: { status: "close", modalType: null },
    }),
}));
