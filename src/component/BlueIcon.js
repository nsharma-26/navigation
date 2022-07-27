import React, { useState } from "react";
import "../container/BottomNavigation.css";
import BlueIconImage from "../assests/images/blue-icon.png";

function BlueIcon() {
  return (
    <div className="first-image-block">
      <img src={BlueIconImage} />
      <span className="image-text">Item</span>
    </div>
  );
}

export default BlueIcon;
