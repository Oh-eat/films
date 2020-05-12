import { useCallback, useRef } from "react";

export default function useDebounce(func, delay) {
  const timer = useRef(null);
  const debounced = useCallback(
    (...params) => {
      if (timer.current) return;
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        func(params);
        timer.current = null;
      }, delay);
    },
    [func, delay]
  );
  return [debounced, timer];
}
