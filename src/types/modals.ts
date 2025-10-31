/* eslint-disable @typescript-eslint/no-explicit-any */
export type ModalStateType = {
  status: "open" | "close";
  modalType: "update" | "delete" | "create" | "logout";
  data?: any;
};

export type ModalState = {
  modalState: ModalStateType;
  updateModal: (newModalState: ModalStateType) => void;
};
