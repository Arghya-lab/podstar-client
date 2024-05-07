import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{
    windowWidth: number;
    windowHeight: number;
  }>({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });

  useEffect(() => {
    function updateWindowSize() {
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    }

    window.addEventListener("resize", updateWindowSize);
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  return windowSize;
}
