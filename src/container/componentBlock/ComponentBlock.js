import React, { useState } from "react";
import "../../container/BottomNavigation.css";
import GreyBlock from "../../component/GreyBlock";
import BlueIcon from "../../component/BlueIcon";
import BlackIcon from "../../component/BlackIcon";
import BlueButton from "../../component/BlueButton";
import ImageParentBlock from "../../component/ImageParentBlock";

function BottomNavigation() {
  return (
    <div className="component-block">
      <div className="component-parent">
        <div className="component-header">Component</div>
        <div>
          <GreyBlock>
            <ImageParentBlock
              customStyle={{ marginLeft: "75px", marginRight: "184px" }}
            >
              <BlueIcon />
              <BlackIcon />
            </ImageParentBlock>
            <ImageParentBlock
              customStyle={{ marginLeft: "75px", marginRight: "10px" }}
            >
              <BlueIcon />
              <BlackIcon />
            </ImageParentBlock>
            <BlueButton />
          </GreyBlock>
          <GreyBlock>
            <ImageParentBlock
              customStyle={{ marginLeft: "75px", marginRight: "127px" }}
            >
              <BlueIcon />
              <BlackIcon />
              <BlackIcon />
            </ImageParentBlock>
            <ImageParentBlock
              customStyle={{ marginLeft: "75px", marginRight: "10px" }}
            >
              <BlueIcon />
              <BlackIcon />
              <BlackIcon />
            </ImageParentBlock>
            <BlueButton />
          </GreyBlock>
          <GreyBlock>
            <ImageParentBlock
              customStyle={{ marginLeft: "75px", marginRight: "70px" }}
            >
              <BlueIcon />
              <BlackIcon />
              <BlackIcon />
              <BlackIcon />
            </ImageParentBlock>
            <ImageParentBlock
              customStyle={{ marginLeft: "75px", marginRight: "10px" }}
            >
              <BlueIcon />
              <BlackIcon />
              <BlackIcon />
              <BlackIcon />
            </ImageParentBlock>
            <BlueButton />
          </GreyBlock>
          <GreyBlock>
            <ImageParentBlock
              customStyle={{ marginLeft: "75px", marginRight: "15px" }}
            >
              <BlueIcon />
              <BlackIcon />
              <BlackIcon />
              <BlackIcon />
              <BlackIcon />
            </ImageParentBlock>
            <ImageParentBlock
              customStyle={{ marginLeft: "75px", marginRight: "10px" }}
            >
              <BlueIcon />
              <BlackIcon />
              <BlackIcon />
              <BlackIcon />
              <BlackIcon />
            </ImageParentBlock>
            <BlueButton />
          </GreyBlock>
        </div>
      </div>
    </div>
  );
}

export default BottomNavigation;
