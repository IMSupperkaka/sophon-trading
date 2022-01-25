import React from "react";
import { DownloadOutlined, TwitterOutlined } from "@ant-design/icons";

import downloadPath from "../../static/logo.png";
import "./index.less";

const Opportunities: React.FC = () => {
  return (
    <div className="opportunities-content">
      <h2>Get in touch.</h2>
      <div className="opportunities-contact">
        <div className="opportunities-contact-icon">
          <TwitterOutlined />
        </div>
        contact@jumpcrypto.com
      </div>
      <div className="opportunities-contact">
        <div className="opportunities-contact-icon">
          <svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3799"
            width="1em"
            height="1em"
          >
            <path
              d="M981 359v419c0 43.078-34.922 78-78 78H120c-43.078 0-78-34.922-78-78V359h3.5l405.513 312.066c35.951 27.667 86.023 27.667 121.974 0L978.5 359H981z"
              fill="currentColor"
              p-id="3800"
            ></path>
            <path
              d="M572.971 612.1l375.614-288.934c37.646-28.96 44.69-82.954 15.73-120.601A86 86 0 0 0 896.15 169h-768.3c-47.496 0-86 38.504-86 86a86 86 0 0 0 33.565 68.166L451.03 612.099c35.945 27.65 85.997 27.65 121.942 0z"
              fill="currentColor"
              p-id="3801"
            ></path>
          </svg>
        </div>
        contact@jumpcrypto.com
      </div>
      <a download href={downloadPath} className="opportunities-download-btn">
        Package
        <DownloadOutlined className="opportunities-download-icon" />
      </a>
    </div>
  );
};

export default Opportunities;
