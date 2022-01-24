import React from "react";
import { Link } from "react-router-dom";

import Logo from "../logo";

import "./index.less";

const Header: React.FC = () => {
  return (
    <div className="sophon-header">
      <div className="sophon-header-content">
        <div className="sophon-header-content-logo">
          <Logo size={33} />
        </div>
        <div className="sophon-header-content-navgate">
          <Link to="/services">
            <span>service</span>
          </Link>
          <span>occupation</span>
          <span>Opportunities</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
