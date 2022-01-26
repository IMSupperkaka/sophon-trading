import React, { useEffect, useState } from "react";
import { useMemoizedFn } from "ahooks";

const useWindowWidth = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  const onResize = useMemoizedFn(() => {
    setWidth(window.innerWidth);
  });

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [onResize]);

  return width;
};

export default useWindowWidth;
