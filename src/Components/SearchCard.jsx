import React from "react";
import { useStateHomeValue } from "./useStateValue";
import NoPoster from "../assets/images/no-poster.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const SearchCard = ({ data, fromSearch, mediaType }) => {
  const { url } = useStateHomeValue();

  const navigate = useNavigate();

  const posterUrl = data?.poster_path ? url?.poster + data?.poster_path : NoPoster;

  const options = { day: "numeric", month: "long", year: "numeric" };

  return (
    <div
      className={`flex items-center flex-col gap-2 rounded-lg pb-8`}
      onClick={() => navigate(`/${data?.media_type || mediaType}/${data?.id}`)}
    >
      <div className="flex items-center justify-center">
        <img
          className="w-full md:h-[311px] h-[180px] rounded-2xl"
          src={posterUrl}
          alt=""
        />
      </div>

      <div className="pl-1 flex items-center justify-cnetr flex-col text-white">
        <p className="md:text-2xl text-sm font-semibold text-center text-ellipsis overflow-hidden whitespace-nowrap md:w-[160px] w-20">
          {data?.title || data?.name}
        </p>
        <p className="text-red-400 font-medium md:text-md text-sm text-center">
          {new Date(data?.release_date).toLocaleDateString("en-US", options)}
        </p>{" "}
        {/* Call the function */}
      </div>
    </div>
  );
};

export default SearchCard;
