import React, { memo } from "react";


const Modal = ({ children }) => {
  return <div className="w-full h-full">{children}</div>;
};

export default memo(Modal);
