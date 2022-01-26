import React from "react";
import { Link } from "react-router-dom";

import LogoImg from "../../static/logo-title.png";

import ResponseContainer from "../response-container";
import "./index.less";

const Header: React.FC = () => {
  return (
    <div className="sophon-header">
      <ResponseContainer>
        <div className="sophon-header-content">
          <Link className="sophon-header-content-logo" to="/home">
            <img src={LogoImg} alt="" />
          </Link>
          <div className="sophon-header-content-navgate">
            <Link to="/services">
              <span>service</span>
            </Link>
            <Link to="/occupation">
              <span>occupation</span>
            </Link>
            <Link to="/opportunities">
              <span>Opportunities</span>
            </Link>
          </div>
        </div>
      </ResponseContainer>
    </div>
  );
};

export default Header;
