import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import Card from "./Card";

const RecommendationSection = ({mediaType, id}) => {
  const [endPoint, setEndPoint] = useState("movie");

  const { data, loading } = useFetch(`/${mediaType}/${id}/recommendations`);

  const title = mediaType === "movie" ? "Recomanded Movies" : "Recomanded TV Shows";
  return (
    <div className="carouselSection relative mb-[70px]">
      <div className="w-full max-w-[1200px] m-auto pl-[20px] mb-5 flex items-center justify-between">
        <span className="carouselTitle font-normal text-xl text-white flex items-center justify-center gap-2">
          {title}
        </span>
      </div>

      <Card data={data?.results==[] ? <p>No Recomendation</p> : data?.results} loading={loading} endPoint={mediaType} />
    </div>
  );
};

export default RecommendationSection;
