import { ModalState } from "@/types/modals";
import { create } from "zustand";

export const useModalStore = create<ModalState>()((set) => ({
  modalState: { status: "close", modalType: "logout" },
  updateModal: (newModalState) => set({ modalState: newModalState }),
}));
