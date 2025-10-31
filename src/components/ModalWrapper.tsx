// "use client"

// import { cn } from "@/lib/utils"
// import { ModalStateType } from "@/types/modals"

// import { AnimatePresence, motion } from "framer-motion"

// const MODAL_ANIMATION = {
//   initial: { opacity: 0, scale: 1, y: -50 },
//   animate: { opacity: 1, scale: 1, y: 0 },
//   exit: { opacity: 0, scale: 0.8, y: -50 },
//   transition: { duration: 0.5, ease: "easeInOut" },
// }

// const renderModal = (modalState: ModalStateType) => {
//   switch (modalState.modalType) {
//     case "logout":
//       return <LogoutConfirmationModal />
//     case "addClientManually":
//       return <AddClientTabs />
//     case "addClientCSV":
//       return <AddClientTabs />
//     case "callClients":
//       return <CallClientsModal />
//     case "editClientDetails":
//       return <EditClientModal />
//     case "deleteClient":
//       return <DeleteClientModal />
//     case "addCampaign":
//       return <AddNewCampaign />
//     case "editCampaign":
//       return <AddNewCampaign />
//     case "deleteCampaign":
//       return <DeleteCampaignModal />
//     default:
//       const exhaustiveCheck: never = modalState.modalType
//       return exhaustiveCheck
//   }
// }

// function ModalWrapper() {
//   const { modalState } = useModalStore()

//   return (
//     <AnimatePresence>
//       {modalState.status !== "close" && (
//         <motion.section
//           key="modal-backdrop"
//           className="fixed inset-0 z-[900] min-h-screen w-full overflow-hidden bg-black/50"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <motion.div
//             {...MODAL_ANIMATION}
//             className={cn(
//               "flex size-full max-h-screen items-center justify-center overflow-y-auto px-4"
//             )}
//           >
//             {renderModal(modalState)}
//           </motion.div>
//         </motion.section>
//       )}
//     </AnimatePresence>
//   )
// }

// export default ModalWrapper
