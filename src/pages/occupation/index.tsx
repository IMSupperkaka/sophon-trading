import React from "react";

import ResponseContainer from "../../components/response-container";

import bg from "../../static/occupation-bg.png";

import "./index.less";

const Services: React.FC = () => {
  return (
    <div className="occupation-wrap">
      <ResponseContainer className="occupation-content">
        <h2>Job Description</h2>
        <p>
          We prefer word-of-mouth recommendations, but insightful industry
          thinking and long-term industry exchanges are also viable way to
          getting a job
        </p>
        <img className="occupation-bg" src={bg} alt="" />
      </ResponseContainer>
    </div>
  );
};

export default Services;
