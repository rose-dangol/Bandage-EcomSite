import { useRef, useEffect } from "react";

export const useClickAway = (callback: () => void) => {
  const containerRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [callback]);
  return containerRef;
};
