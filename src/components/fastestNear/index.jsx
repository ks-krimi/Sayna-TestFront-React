import React, { useRef } from "react";
import { motion } from "framer-motion";
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
  const ref = useRef();
  return (
    <div className="fastest-near">
      <div className="head-wrapper">
        <p>Fastest Near You</p>
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

export default FastestNear;
