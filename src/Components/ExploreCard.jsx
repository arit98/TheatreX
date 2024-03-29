import React from "react";
import { useStateHomeValue } from "./useStateValue";
import NoPoster from "../assets/images/no-poster.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import Geners from "./Geners";

const ExploreCard = ({ data, fromSearch, mediaType }) => {
  const { url, loading } = useStateHomeValue();

  const navigate = useNavigate();

  const posterUrl = data?.poster_path
    ? url?.poster + data?.poster_path
    : NoPoster;

  const options = { day: "numeric", month: "long", year: "numeric" };

  return (
    <div
      className={`flex items-center flex-col gap-2 rounded-lg`}
      onClick={() => navigate(`/${data?.media_type || mediaType}/${data?.id}`)}
    >
      <div className="flex items-center justify-center flex-wrap">
        <img
          className="w-full md:h-[311px] h-[180px] rounded-2xl"
          src={posterUrl}
          alt=""
        />
        <div
          className={`radial-progress absolute md:text-2xl text-md font-bold md:h-20 h-12 w-12 md:w-20 bg-gray-200 ${
            data?.vote_average < 5
              ? "text-red-500"
              : data?.vote_average < 7
              ? "text-orange-500"
              : "text-green-500"
          }`}
          style={{
            "--value": data?.vote_average * 10,
            "--thickness": "4px",
          }}
          color="#31363f"
          role="progressbar"
        >
          {(data?.vote_average).toFixed(1)}
        </div>
        <div className="absolute md:flex hidden flex-wrap pt-56 gap-1 w-[210px] m-auto justify-center">
          <Geners data={data?.genre_ids} />
        </div>
      </div>

      <div className="pl-1 flex items-center justify-cnetr flex-col text-white">
        <p className="md:text-2xl text-sm font-semibold text-center text-ellipsis overflow-hidden whitespace-nowrap md:w-[160px] w-20">
          {data?.title || data?.name}
        </p>
        <p className="text-red-400 font-medium md:text-md text-sm text-center">
          {new Date(data?.release_date).toLocaleDateString("en-US", options)}
        </p>{" "}
      </div>
    </div>
  );
};

export default ExploreCard;
