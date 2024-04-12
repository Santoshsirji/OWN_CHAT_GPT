import { create } from "zustand";

interface RegisteModalState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRegisteModal = create<RegisteModalState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisteModal;
