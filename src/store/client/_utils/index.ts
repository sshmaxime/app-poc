import { useEffect, useState } from "react";
import { create } from "zustand";

export const createStore = <Store, Actions>() => create<Store & Actions>();

export const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback?: (state: T) => F
): T | undefined => {
  const result = store(callback ?? ((state) => state));
  const [data, setData] = useState<any>();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};
