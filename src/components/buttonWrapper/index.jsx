import React from "react";
import Button from "./Button";
import "./button.scss";

function ButtonWrapper() {
  return (
    <div className="wrapper">
      <div className="buttonGroup">
        <Button>Pickup</Button>
        <Button styled>Ratings</Button>
        <Button>Under 30 min</Button>
        <Button select>Price</Button>
      </div>
    </div>
  );
}

export default ButtonWrapper;
