import React, { useState } from "react";
import "../../container/BottomNavigation.css";

function FirstNavBlock() {
  return (
    <div className="first-nav-block">
      <div className="page-title">Bottom navigation</div>
      <div className="page-description">
        Bottom navigation bars display three to five destinations at the bottom
        of a screen. Each destination is represented by an icon and an optional
        text label. When a bottom navigation icon is tapped, the user is taken
        to the top-level navigation destination associated with that icon.
      </div>
    </div>
  );
}

export default FirstNavBlock;
