import React from "react";

const SkeletonDetails = () => {
  return (
    <div className="heroBanner w-full h-[450px] md:h-[700px] flex items-center relative animate-pulse">
      <div className="backdrop-img w-full h-full absolute top-0 left-0 opacity-50 overflow-hidden bg-gray-300"></div>
      <div className="opacity-layer w-full h-[550px] sm:h-[250px] md:h-[250px] lg:h-[250px] bg-gray-300"></div>
      <div className="w-full flex items-center justify-between md:flex-row flex-col m-auto max-w-[1200px]">
        <div className="left w-full flex items-center justify-center">
          <div className="w-48 h-64 md:w-[320px] md:h-[450px] bg-gray-300 rounded-xl mt-24 md:mt-0 z-50"></div>
        </div>
        <div className="flex items-start justify-start flex-col md:p-0 p-4 md:mr-[24rem] w-full z-50 md:mt-0 mt-16">
          <div className="title text-xl md:text-3xl text-white font-semibold bg-gray-300 w-2/3 md:h-8 h-6 mb-4"></div>
          <div className="subtitle md:text-xl text-lg mt-2 text-gray-500 bg-gray-300 w-1/2 md:h-6 h-4 mb-4"></div>
          <div className="flex items-center justify-start gap-2 mt-4">
            <div className="bg-gray-300 w-16 h-6 rounded-full"></div>
            <div className="bg-gray-300 w-16 h-6 rounded-full"></div>
            <div className="bg-gray-300 w-16 h-6 rounded-full"></div>
          </div>
          <div className="flex items-center justify-center gap-4 md:mt-6 mt-2 mb-4">
            <div className="bg-gray-300 md:w-20 w-12 md:h-20 h-12 rounded-full"></div>
            <div className="playbtn bg-gray-300 md:w-20 w-12 md:h-20 h-12 rounded-full"></div>
          </div>
          <div className="overview pb-4">
            <div className="text-xl font-semibold bg-gray-300 w-1/3 h-6 mb-2"></div>
            <div className="description bg-gray-300 w-full h-24"></div>
          </div>
          <div className="info flex items-center justify-between w-full border-y py-4 -mt-32">
            <div className="infoItem flex items-center justify-center flex-col">
              <span className="text bold">Status: </span>
              <span className="text-red-400 bg-gray-300 w-16 h-6"></span>
            </div>
            <div className="infoItem flex items-center justify-center flex-col">
              <span className="text bold">Release Date: </span>
              <span className="text-red-400 bg-gray-300 w-24 h-6"></span>
            </div>
            <div className="infoItem flex items-center justify-center flex-col">
              <span className="text bold">Runtime: </span>
              <span className="text-red-400 bg-gray-300 w-20 h-6"></span>
            </div>
          </div>
          <div className="">
            <div className="info border-y py-4">
              <span className="text bold">Director: </span>
              <span className="text-red-400 bg-gray-300 w-1/3 h-6"></span>
            </div>
            <div className="info border-y py-4">
              <span className="text bold">Writer: </span>
              <span className="text-red-400 bg-gray-300 w-1/3 h-6"></span>
            </div>
          </div>
          <div className="info">
            <span className="text bold">Creator: </span>
            <span className="text-red-400 bg-gray-300 w-1/3 h-6"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonDetails;
