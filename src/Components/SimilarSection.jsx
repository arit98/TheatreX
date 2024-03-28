import React, { useState } from 'react'
import Card from './Card';
import SwitchTabs from './SwitchTabs';
import useFetch from '../hooks/useFetch';

const SimilarSection = ({id, mediaType}) => {
    const [endPoint, setEndPoint] = useState("movie");

    const { data, loading } = useFetch(`/${mediaType}/${id}/similar`);

    const title = mediaType === "movie" ? "Similar Movies" : "Similar TV Shows"

    const hasSimilar = data && data?.results && data?.results.length > 0;
  
  return (
    <div className="carouselSection relative mb-[70px]">
      <div className="w-full max-w-[1200px] m-auto pl-[20px] mb-5 flex items-center justify-between">
        <span className="carouselTitle font-normal text-xl text-white flex items-center justify-center gap-2">
          {title}
        </span>
      </div>

      <Card data={data?.results} loading={loading} endpoint={mediaType} />
      {!loading && !hasSimilar && (
        <p class="text-center text-xl text-red-400">No similarity found.</p>
      )}
    </div>
  )
}

export default SimilarSection