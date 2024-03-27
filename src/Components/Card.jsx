import React from "react";
import Slider from "react-slick";
import { useStateHomeValue } from "./useStateValue";
import NoPoster from "../assets/images/no-poster.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkeletonCard from "./Skeleton/SkeletonCard";
import Geners from "./Geners";
import { useNavigate } from "react-router-dom";

const Card = ({ data, loading, endPoint }) => {
  const { url } = useStateHomeValue();

  const navigate = useNavigate()

  const options = { day: "numeric", month: "long", year: "numeric" };

  // Settings for the carousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Number of slides to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          arrows: false,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-[1200px] m-auto mt-12 cursor-pointer">
      {!loading ? (
        <Slider {...settings}>
          {data?.map((item) => {
            const PosterUrl = item.poster_path
              ? url.poster + item.poster_path
              : NoPoster;
            return (
              <div
                key={item.id}
                className={`flex items-center flex-col gap-2 rounded-lg`}
                onClick={()=>navigate(`/${item.media_type || endPoint}/${item.id}`)}
              >
                <div className="flex items-center justify-center">
                  <img
                    className="p-1 w-full md:h-[311px] h-[126px] rounded-2xl"
                    src={PosterUrl}
                    alt=""
                  />
                  {/* progress bar */}
                  <div
                    className={`radial-progress absolute md:text-2xl text-md font-bold md:h-20 h-12 w-12 md:w-20 bg-gray-200 ${
                      item?.vote_average < 5
                        ? "text-red-500"
                        : item?.vote_average < 7
                        ? "text-orange-500"
                        : "text-green-500"
                    }`}
                    style={{
                      "--value": item?.vote_average * 10,
                      "--thickness": "4px",
                    }}
                    color="#31363f"
                    role="progressbar"
                  >
                    {(item?.vote_average).toFixed(1)}
                  </div>
                  <div className="absolute md:flex hidden flex-wrap gap-1 bottom-16 w-[210px] m-auto justify-center">
                  <Geners data={item.genre_ids} />
                  </div>
                </div>

                <div className="pl-1 flex items-center justify-cnetr flex-col text-white">
                  <p className="md:text-2xl text-sm font-semibold text-center text-ellipsis overflow-hidden whitespace-nowrap md:w-[160px] w-20">
                    {item.title || item.name}
                  </p>
                  <p className="text-red-400 font-medium md:text-md text-sm text-center">
                    {new Date(item.release_date).toLocaleDateString(
                      "en-US",
                      options
                    )}
                  </p>{" "}
                  {/* Call the function */}
                </div>
              </div>
            );
          })}
        </Slider>
      ) : (
        <div className="flex items-center justify-center gap-2 max-w-[1200px] w-full -mt-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index}>
              <SkeletonCard />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
