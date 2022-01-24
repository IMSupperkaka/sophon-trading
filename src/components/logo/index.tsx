import React from "react";
import classnames from "classnames";

import "./index.less";

import LogoImg from "../../static/logo.png";

const Logo: React.FC<{
  size: number;
  className?: string;
}> = (props) => {
  const { size } = props;

  return (
    <div
      className={classnames("sophon-logo", props.className)}
      style={{ width: size, height: size, borderRadius: size / 6 }}
    >
      <img
        style={{ width: (2 / 3) * size, height: (2 / 3) * size }}
        src={LogoImg}
        alt=""
      />
    </div>
  );
};

export default Logo;
