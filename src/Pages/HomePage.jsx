import React, { useEffect, useState } from "react";
import HeroSection from "../Components/HeroSection";
import TrendingSection from "../Components/TrendingSection";
import PopularSection from "../Components/PopularSection";
import TopRated from "../Components/TopRated";
import Web from "../assets/images/bgWeb.png"
import blackSpidy from "../assets/images/ani1.png"
import Spidy from "../assets/images/ani2.png"

import "../assets/styles/pendulum.css"

const HomePage = () => {
  return (
    <div className="overflow-y-scroll">
      <img className="absolute w-full" src={Web} alt="" />
        <img
          className="md:flex hidden pendulum drop-shadow-md absolute right-0 bg-transparent md:h-[50%] h-[25%] z-50"
          src={blackSpidy}
          alt=""
        />
        <img
          className="flex md:hidden bounce drop-shadow-md absolute left-0 bg-transparent md:h-[65%] h-[40%] z-[101]"
          src={Spidy}
          alt=""
        />
      <HeroSection />
      <TrendingSection />
      <PopularSection />
      <TopRated />
    </div>
  );
};

export default HomePage;
