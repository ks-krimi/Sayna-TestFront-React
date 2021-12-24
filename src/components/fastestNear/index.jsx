import React from "react";
import Card from "../card";

const foods = [
  {
    image: "/assets/images/fastest/1.png",
    isPromo: false,
  },
  {
    image: "/assets/images/fastest/2.png",
    isPromo: true,
  },
];

function FastestNear() {
  return (
    <div className="top-picks">
      <div className="head-wrapper">
        <p>Fastest Near You</p>
        <span>See all</span>
      </div>
      <div className="card-wrapper">
        {foods.map((food, index) => (
          <Card food={food} key={index} />
        ))}
      </div>
    </div>
  );
}

export default FastestNear;
