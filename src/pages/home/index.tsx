import React from "react";

import ResponseContainer from "../../components/response-container";

import "./index.less";

import HomeRight from "../../static/home-right.png";

const Home: React.FC = () => {
  return (
    <ResponseContainer className="home-content">
      <div className="home-content-left">
        <div className="home-content-left-text">
          We ensure creating value for coustomers as the core. We hope to
          establish long-term partnership with our customers through our years
          of financial transactions, investments and consulting experience.
          Participate in building the crypto world together and share in
          exponential gains together.
        </div>
      </div>
      <div className="home-content-right">
        <img src={HomeRight} alt="" />
      </div>
    </ResponseContainer>
  );
};

export default Home;
