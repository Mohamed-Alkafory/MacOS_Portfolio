import { create } from "zustand";

const useDarkMode = create((set) => ({
  isDark: false,
  //   typeof window !== "undefined"
  //       ? window.matchMedia("(prefers-color-scheme: dark)").matches
  //       : false,
  toggle: () => set((state) => ({ isDark: !state.isDark })),
}));

export default useDarkMode;
