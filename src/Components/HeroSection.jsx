import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateHomeValue } from "../Components/useStateValue";
import useFetch from "../hooks/useFetch";
import Img from "./LazyLoadImg/Img";

const HeroSection = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");

  const { url } = useStateHomeValue();

  const navigate = useNavigate();

  const { data, loading } = useFetch("/movie/upcoming");

  const searchQueryHandler = (e) => {
    e.preventDefault();
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  useEffect(() => {
    const bg =
      url?.backdrop +
      data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;

    setBackground(bg);
  }, [data]);

  return (
    <div className="heroBanner w-full h-[450px] md:h-[700px] flex items-center relative select-none">
      {!loading && (
        <div className="backdrop-img w-full h-full absolute top-0 left-0 opacity-50 overflow-hidden">
          <Img className="object-cover w-full h-full" src={background} alt="" />
        </div>
      )}

      <div className="opacity-layer w-full h-[550px] sm:h-[250px] md:h-[250px] lg:h-[250px]"></div>

      <div className="content-wrapper w-full max-w-[1200px] m-auto px-20 z-50">
        <div className="wrapper">
          <div className="heroBannerContent flex flex-col items-center text-white text-center max-w-[800px] m-auto">
            <span className="title text-[50px] font-bold mb-3 md:0 md:text-[90px] font-serif">
              TheatreX
            </span>
            <span className="subTitle text-lg font-medium mb-10 md:text-2xl font-serif">
              Millions of movies, TV shows and people to discover, Explore now.
            </span>
            <div className="searchInput flex items-center md:w-full">
              <input
                className="flex-1 h-[50px] bg-white text-gray-700 outline-none rounded-l-3xl pl-4 text-sm md:w-auto md:ml-auto md:text-xl md:pl-8"
                type="text"
                placeholder="Search for a movie or TV show"
                onKeyUp={searchQueryHandler}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button onClick={searchQueryHandler} className="w-[100px] h-[50px] bg-gradient-to-r from-[#76ABAE] to-[#78A083] rounded-r-3xl">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
