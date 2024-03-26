import React, { useState } from "react";
import SwitchTabs from "./SwitchTabs";
import useFetch from "../hooks/useFetch";
import Card from "./Card";

const TrendingSection = () => {
  const [endPoint, setEndPoint] = useState("day");

  const { data, loading } = useFetch(`/trending/movie/${endPoint}`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Today" ? "day" : "week");
  };

  return (
    <div className="carouselSection relative mb-[70px]">
      <div className="w-full max-w-[1200px] m-auto pl-[20px] mb-5 flex items-center justify-between">
        <span className="carouselTitle font-normal text-xl text-white">
          Trending
        </span>
        <SwitchTabs data={["Today", "This Week"]} onTabChange={onTabChange} />
      </div>

      <Card data={data?.results} loading={loading} />
    </div>
  );
};

export default TrendingSection;
