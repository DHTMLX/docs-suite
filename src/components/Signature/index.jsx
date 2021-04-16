import React from "react";

import cssstyles from "./styles.module.scss";

const Signature = ({ children }) => {
  return (
    <div className={cssstyles.signature}>
      <span>{children}</span>
    </div>
  );
};

export default Signature;
