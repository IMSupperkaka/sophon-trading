import React, { useEffect, useState, useMemo } from "react";
import { useMemoizedFn } from "ahooks";

import useWindowWidth from "../../hooks/use-window-width";

const MIN_WIDTH = 940;

const MAX_WIDTH = 1066;

const LIMIT_MIN_WIDTH = 1440;

const LIMIT_MAX_WIDTH = 1920;

const ResponseContainer: React.FC<{
  className?: string;
}> = (props) => {
  const windowWidth = useWindowWidth();

  const contentWidth = useMemo(() => {
    if (windowWidth <= LIMIT_MIN_WIDTH) {
      return MIN_WIDTH;
    }
    if (windowWidth <= LIMIT_MAX_WIDTH) {
      return (
        MIN_WIDTH +
        ((windowWidth - LIMIT_MIN_WIDTH) * (MAX_WIDTH - MIN_WIDTH)) /
          (LIMIT_MAX_WIDTH - LIMIT_MIN_WIDTH)
      );
    }
    return MAX_WIDTH;
  }, [windowWidth]);

  return (
    <div
      style={{ width: contentWidth, margin: "0 auto" }}
      className={props.className}
    >
      {props.children}
    </div>
  );
};

export default ResponseContainer;
