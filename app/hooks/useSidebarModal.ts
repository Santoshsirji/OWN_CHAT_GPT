import { create } from "zustand";

interface SidebarModalState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useSidebarModal = create<SidebarModalState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useSidebarModal;
