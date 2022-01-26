import React from "react";

const ResponseContainer: React.FC<{
  className?: string;
}> = (props) => {
  return (
    <div style={{ width: 940, margin: "0 auto" }} className={props.className}>
      {props.children}
    </div>
  );
};

export default ResponseContainer;
