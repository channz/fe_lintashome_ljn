import { create } from "zustand";

interface SelectedPopIdStore {
  selectedPopId: string[];
  addPopId: (id: string) => void;
  removedPopId: (id: string) => void;
}

export const useSelectedPopIdStore = create<SelectedPopIdStore>((set) => ({
  selectedPopId: [],
  addPopId: (id) =>
    set((state) => ({
      selectedPopId: [...state.selectedPopId, id],
    })),
  removedPopId: (id) =>
    set((state) => ({
      selectedPopId: state.selectedPopId.filter((pop_id) => pop_id !== id),
    })),
}));
