import React, { useRef } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import "./button.scss";

function ButtonWrapper() {
  const ref = useRef();
  return (
    <div className="button-wrapper" ref={ref}>
      <motion.div className="buttonGroup" drag="x" dragConstraints={ref}>
        <Button>Pickup</Button>
        <Button styled>Ratings</Button>
        <Button>Under 30 min</Button>
        <Button select>Price</Button>
      </motion.div>
    </div>
  );
}

export default ButtonWrapper;
