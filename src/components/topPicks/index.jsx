import React, { useRef } from "react";
import { motion } from "framer-motion";
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
  const ref = useRef();
  return (
    <div className="top-picks">
      <div className="head-wrapper">
        <p>Top Picks For You</p>
        <span>See all</span>
      </div>
      <div className="wrapper-constraint" ref={ref}>
        <motion.div className="card-wrapper" drag="x" dragConstraints={ref}>
          {foods.map((food, index) => (
            <Card food={food} key={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default TopPicks;
