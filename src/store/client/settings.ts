import { createStore } from "@store/client/_utils";
import { persist } from "zustand/middleware";

const STORE_NAME = "SETTINGS";

interface State {
  counter: number;
}

interface Actions {
  increase: (by: number) => void;
}

export const useSettings = createStore<State, Actions>()(
  persist(
    (set, get) => ({
      counter: 0,
      increase: (by) => set({ counter: get().counter + by }),
    }),
    { name: STORE_NAME }
  )
);
