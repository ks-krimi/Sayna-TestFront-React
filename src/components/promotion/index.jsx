import React from "react";
import PromoItem from "./PromoItem";
import "./promotion.scss";

const promos = [
  {
    title: "Shipping",
    url: "/assets/images/bestpromo/delivery-man.png",
  },
  {
    title: "Drugstores",
    url: "/assets/images/bestpromo/drugstore.png",
  },
  {
    title: "Holidays",
    url: "/assets/images/bestpromo/sun-cream.png",
  },
  {
    title: "Pets",
    url: "/assets/images/bestpromo/dog.png",
  },
  {
    title: "Retail",
    url: "/assets/images/bestpromo/Group.png",
  },
];

function Promotion() {
  return (
    <div className="promotion">
      <p>Best Promtion for you</p>
      <div className="promolist">
        {promos.map((item) => (
          <PromoItem item={item} />
        ))}
      </div>
    </div>
  );
}

export default Promotion;
