import React from "react";

function Card({ food }) {
  return (
    <div className="card">
      <div className="img-wrapper">
        <img src={food.image} alt={food.image} />
        {food.isPromo ? <span className="promo">10% off</span> : null}
        <span className="favorite">
          <img src="/assets/icons/Heart.svg" alt="Heart" />
        </span>
        <span className="date">35 min</span>
      </div>
      <div className="content-wrapper">
        <span className="title">Demo Restaurant</span>
        <span className="rating">
          <img src="assets/icons/star2.svg" alt="colored star" /> 4.7
          <span className="k">(7K+)</span>
        </span>
        <p className="lieu">Italian</p>
        <p className="prix">
          <img src="/assets/icons/bike.svg" alt="bike" />
          $10
        </p>
      </div>
    </div>
  );
}

export default Card;
