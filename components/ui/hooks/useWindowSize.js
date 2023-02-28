import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: typeof window.innerWidth,
        height: typeof window.innerHeight,
      });
    }
    typeof window.addEventListener("resize", handleResize);
    handleResize();
    return () => typeof window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
