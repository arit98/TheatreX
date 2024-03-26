import React, { useState } from 'react'
import SwitchTabs from './SwitchTabs'
import Card from './Card'
import useFetch from '../hooks/useFetch';

const PopularSection = () => {
    const [endPoint, setEndPoint] = useState("movie");

  const { data, loading } = useFetch(`/${endPoint}/popular`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <div className="carouselSection relative mb-[70px]">
      <div className="w-full max-w-[1200px] m-auto pl-[20px] mb-5 flex items-center justify-between">
        <span className="carouselTitle font-normal text-xl text-white">
          What's Popular
        </span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </div>

      <Card data={data?.results} loading={loading} endPoint={endPoint} />
    </div>
  )
}

export default PopularSection