import React from "react";
import FoodItem from "./FoodItem";
import "./popularFood.scss";

const food = [
  {
    title: "Bakery",
    url: "/assets/images/popfoods/donut.png",
  },
  {
    title: "Fast Food",
    url: "/assets/images/popfoods/burger1.png",
  },
  {
    title: "Desserts",
    url: "/assets/images/popfoods/cake.png",
  },
  {
    title: "Burgers",
    url: "/assets/images/popfoods/burger.png",
  },
  {
    title: "Mexican",
    url: "/assets/images/popfoods/soup.png",
  },
];

function PopularFood() {
  return (
    <div className="popular-food">
      <p>Popular Food for you</p>
      <div className="foodlist">
        {food.map((item) => (
          <FoodItem item={item} />
        ))}
      </div>
    </div>
  );
}

export default PopularFood;
