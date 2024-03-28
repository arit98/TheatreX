import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import Card from "./Card";

const RecommendationSection = ({mediaType, id}) => {
  const { data, loading } = useFetch(`/${mediaType}/${id}/recommendations`);

  const title = mediaType === "movie" ? "Recomanded Movies" : "Recomanded TV Shows";
  const hasRecommendations = data && data?.results && data?.results.length > 0;
  return (
    <div className="carouselSection relative mb-[70px]">
      <div className="w-full max-w-[1200px] m-auto pl-[20px] mb-5 flex items-center justify-between">
        <span className="carouselTitle font-normal text-xl text-white flex items-center justify-center gap-2">
          {title}
        </span>
      </div>

      <Card data={data?.results} loading={loading} endpoint={mediaType} />
      {!loading && !hasRecommendations && (
        <p class="text-center text-xl text-red-400">No recommendations found.</p>
      )}
    </div>
  );
};

export default RecommendationSection;
