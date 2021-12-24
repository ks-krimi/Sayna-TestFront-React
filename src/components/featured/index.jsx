import React from "react";
import "./featured.scss";

function Featured() {
  return (
    <div className="featured">
      <p className="title">Today’s Featured</p>
      <div className="wrapper">
        <div className="carousel-wrapper">
          <div className="carousel">
            <img
              className="bg"
              src="./assets/images/carousel/image 12.png"
              alt="Chicken Fried"
            />
            <div className="circle">
              <img src="./assets/images/carousel/image 15.svg" alt="" />
            </div>
            <p className="text">
              Get Chicken Fried <br />
              Starting at <span className="gold">$25</span>
              <span className="grey">Chicken Buger Fest </span>
            </p>
            <div className="button">
              <span>ORDER NOW</span>
              <div className="img-wrapper">
                <img src="./assets/images/carousel/cloche.svg" alt="cloche" />
              </div>
            </div>
          </div>
          <div className="carousel">
            <img
              className="bg"
              src="./assets/images/carousel/image 14.png"
              alt="Chicken Buger"
            />
            <div className="circle" style={{ backgroundColor: "#fff" }}>
              <img src="./assets/images/carousel/image 16.svg" alt="" />
            </div>
            <p className="text">
              Get Chicken Buger <br />
              Starting at <span className="gold">$25</span>
              <span className="grey">Chicken Buger Fest </span>
            </p>
            <div className="button">
              <span>ORDER NOW</span>
              <div className="img-wrapper">
                <img src="./assets/images/carousel/cloche.svg" alt="cloche" />
              </div>
            </div>
          </div>
        </div>
        <div className="dots">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((nb) => (
            <span></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featured;
