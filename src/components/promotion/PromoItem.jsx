import React from "react";

function PromoItem({ item }) {
  return (
    <div className="promoItem">
      <div className="imageWrapper">
        <img src={item.url} alt={item.title} />
      </div>
      <p>{item.title}</p>
    </div>
  );
}

export default PromoItem;
