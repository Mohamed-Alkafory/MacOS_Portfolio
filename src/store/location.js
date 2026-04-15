import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations } from "#constants";

const useLocationStore = create(
  immer((set) => ({
    activeLocation: locations.work,
    setActiveLocation: (location) =>
      set((state) => {
        if (location === undefined) return;
        state.activeLocation = location;
      }),
    resetActiveLocation: () =>
      set((state) => {
        // Always read fresh data from constants
        state.activeLocation = locations.work;
      }),
  })),
);
export default useLocationStore;
