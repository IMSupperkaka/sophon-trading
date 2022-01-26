import React, { useMemo } from "react";

import useWindowWidth from "../../hooks/use-window-width";

import ResponseContainer from "../../components/response-container";

import "./index.less";

const MIN_WIDTH = 0;

const MAX_WIDTH = 188;

const LIMIT_MIN_WIDTH = 1440;

const LIMIT_MAX_WIDTH = 1920;

const Services: React.FC = () => {
  const windowWidth = useWindowWidth();

  const offset = useMemo(() => {
    if (windowWidth <= LIMIT_MIN_WIDTH) {
      return MAX_WIDTH;
    }
    if (windowWidth <= LIMIT_MAX_WIDTH) {
      return (
        MAX_WIDTH -
        ((windowWidth - LIMIT_MIN_WIDTH) * (MAX_WIDTH - MIN_WIDTH)) /
          (LIMIT_MAX_WIDTH - LIMIT_MIN_WIDTH)
      );
    }
    return MIN_WIDTH;
  }, [windowWidth]);

  return (
    <div
      className="services-wrap"
      style={{
        backgroundPosition: `calc(100% + ${offset}px) bottom`,
      }}
    >
      <ResponseContainer className="services-content">
        <h2>Our services</h2>
        <p>
          Market making、Consulting、Resource assistance、Liquidity
          Service、OTC(USD, JPY, KRW.$100,000 threshold)、 Crypto Fund
        </p>
      </ResponseContainer>
    </div>
  );
};

export default Services;
