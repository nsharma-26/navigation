import React, { useState } from "react";
import "../../container/BottomNavigation.css";
import BlueIcon from "../../component/BlueIcon";
import BlackIcon from "../../component/BlackIcon";
import ImageParentBlock from "../../component/ImageParentBlock";

function SecondNavBlock() {
  return (
    <div className="second-nav-block">
      <ImageParentBlock>
        <BlueIcon />
        <BlackIcon />
        <BlackIcon />
        <BlackIcon />
        <BlackIcon />
      </ImageParentBlock>
    </div>
  );
}

export default SecondNavBlock;
