import { useState, useEffect } from "react";
import { IUseDebounce } from "./types";

export const useDebounce = ({ value, delay }: IUseDebounce) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
