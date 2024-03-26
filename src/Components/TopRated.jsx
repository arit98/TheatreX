import React, { useState } from 'react'
import useFetch from '../hooks/useFetch';
import SwitchTabs from './SwitchTabs';
import Card from './Card';

const TopRated = () => {
    const [endPoint, setEndPoint] = useState("movie");

    const { data, loading } = useFetch(`/${endPoint}/top_rated`);
  
    const onTabChange = (tab) => {
      setEndPoint(tab === "Movies" ? "movie" : "tv");
    };
  return (
    <div className="carouselSection relative mb-[70px]">
      <div className="w-full max-w-[1200px] m-auto pl-[20px] mb-5 flex items-center justify-between">
        <span className="carouselTitle font-normal text-xl text-white flex items-center justify-center gap-2">
          Top Rated
        </span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </div>

      <Card data={data?.results} loading={loading} endPoint={endPoint} />
    </div>
  )
}

export default TopRated