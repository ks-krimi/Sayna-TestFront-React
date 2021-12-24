import React from "react";
import Card from "../card";
import "./topPicks.scss";

const foods = [
  {
    image: "/assets/images/topPicks/1.png",
    isPromo: true,
  },
  {
    image: "/assets/images/topPicks/2.png",
    isPromo: false,
  },
];

function TopPicks() {
  return (
    <div className="top-picks">
      <div className="head-wrapper">
        <p>Top Picks For You</p>
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

export default TopPicks;
