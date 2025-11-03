/* eslint-disable @typescript-eslint/no-explicit-any */
export type ModalStateType = {
  status: "open" | "close";
  modalType: "cart" | "orderConfirmation" | null;
  data?: any;
};

export type ModalState = {
  modalState: ModalStateType;
  updateModal: (newModalState: ModalStateType) => void;
  closeModal: () => void;
};
