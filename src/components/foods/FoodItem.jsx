import React from "react";

function FoodItem({ item }) {
  return (
    <div className="foodItem">
      <div className="imageWrapper">
        <img src={item.url} alt={item.title} />
      </div>
      <p>{item.title}</p>
    </div>
  );
}

export default FoodItem;
