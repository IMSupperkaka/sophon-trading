import React from "react";
import { RightOutlined } from "@ant-design/icons";
import { useMemoizedFn } from "ahooks";
import { useNavigate } from "react-router-dom";

import Logo from "../../components/logo";

import "./index.less";

const cityList = ["Singapore", "Korea", "Hangzhou", "Shenzhen", "Shanghai"];

const Main: React.FC = () => {
  const navigate = useNavigate();

  const goHome = useMemoizedFn(() => {
    navigate("/home");
  });

  return (
    <div className="landing-content">
      <div className="landing-logo">
        <Logo size={66} />
      </div>
      <div className="landing-cities">
        {cityList.map((city) => (
          <div className="landing-city">{city}</div>
        ))}
      </div>
      <div className="landing-btn" onClick={goHome}>
        <span>Sophon Trading</span>
        <RightOutlined />
      </div>
    </div>
  );
};

export default Main;
