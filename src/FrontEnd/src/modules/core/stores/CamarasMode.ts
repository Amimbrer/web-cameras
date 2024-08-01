import { create } from "zustand";

type CamarasStore = {
  switchValue: boolean;
  toggleSwitch: () => void;
};

export const useCamarasStore = create<CamarasStore>((set) => ({
  switchValue: false,
  toggleSwitch: () => set((state) => ({ switchValue: !state.switchValue })),
}));
