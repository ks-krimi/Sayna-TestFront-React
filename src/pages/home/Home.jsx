import React from "react";
import "./home.scss";
import Header from "../../components/header";
import Featured from "../../components/featured";
import Promotion from "../../components/promotion";
import PopularFood from "../../components/foods";
import ButtonWrapper from "../../components/buttonWrapper";
import TopPicks from "../../components/topPicks";
import FastestNear from "../../components/fastestNear";

function Home() {
  return (
    <div className="container">
      <Header />
      <Featured />
      <Promotion />
      <PopularFood />
      <ButtonWrapper />
      <TopPicks />
      <FastestNear />
    </div>
  );
}

export default Home;
