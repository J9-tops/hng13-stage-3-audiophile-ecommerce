"use client";

import CartModal from "@/components/modals/Cart";
import { cn } from "@/lib/utils";
import { useModalStore } from "@/stores/modal";
import { ModalStateType } from "@/types/modals";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import OrderConfirmationModal from "./modals/OrderConfirmationModal";

const MODAL_ANIMATION = {
  initial: { opacity: 0, scale: 1, y: -50 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.8, y: -50 },
  transition: { duration: 0.5, ease: easeInOut },
};

const renderModal = (modalState: ModalStateType) => {
  switch (modalState.modalType) {
    case "cart":
      return <CartModal />;
    case "orderConfirmation":
      return <OrderConfirmationModal />;
    default:
      return null;
  }
};

function ModalWrapper() {
  const { modalState, closeModal } = useModalStore();

  return (
    <AnimatePresence>
      {modalState.status !== "close" && (
        <motion.section
          key="modal-backdrop"
          className="fixed inset-0 z-900 min-h-screen w-full overflow-hidden bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            {...MODAL_ANIMATION}
            className={cn(
              "flex size-full max-h-screen overflow-y-auto px-4",
              modalState.modalType === "orderConfirmation" &&
                "items-center justify-center",
              modalState.modalType === "cart" &&
                "mt-25 items-start justify-end pr-35",
            )}
          >
            {renderModal(modalState)}
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default ModalWrapper;
