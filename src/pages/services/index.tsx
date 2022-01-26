import React from "react";

import ResponseContainer from "../../components/response-container";

import "./index.less";

const Services: React.FC = () => {
  return (
    <div className="services-wrap">
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
