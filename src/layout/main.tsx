import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import classnames from "classnames";

import Header from "../components/header";
import Footer from "../components/footer";

import "./index.less";

const withoutHeaderPaths = ["/"];

const withoutFooterPaths = ["/services", "/occupation"];

const Main: React.FC = () => {
  const location = useLocation();

  const hasHeader = !withoutHeaderPaths.includes(location.pathname);

  const hasFooter = !withoutFooterPaths.includes(location.pathname);

  return (
    <div
      className={classnames(
        "sophon-page",
        !hasHeader && "sophon-page-without-header",
        !hasFooter && "sophon-page-without-footer",
        location.pathname === "/" && "sophone-page-index-page"
      )}
    >
      {hasHeader && <Header />}
      <div className="sophon-page-content">
        <Outlet />
      </div>
      {hasFooter && <Footer />}
    </div>
  );
};

export default Main;
