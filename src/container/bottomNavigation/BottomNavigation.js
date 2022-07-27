import React, { useState } from "react";
import "../../container/BottomNavigation.css";
import FirstNavBlock from "./FirstNavBlock";
import SecondNavBlock from "./SecondNavBlock";

function BottomNavigation() {
  return (
    <div className="container-custom">
      <div className="bottom-navigation-block">
        <FirstNavBlock />
        <SecondNavBlock />
      </div>
    </div>
  );
}

export default BottomNavigation;
