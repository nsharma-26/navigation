import React, { useState } from "react";
import "../container/BottomNavigation.css";

function ImageParentBlock(props) {
  return (
    <div className="image-block" style={props.customStyle}>
      {props.children}
    </div>
  );
}

export default ImageParentBlock;
