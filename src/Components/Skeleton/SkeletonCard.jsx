import React from "react";

const SkeletonCard = () => {
  return (
    <div className="flex items-center justify-center w-full md:mb-8">
      <div className="md:w-[225px] md:h-[311px] w-24 h-32 p-1 rounded-md border mt-8 animate-pulse">
        <div className="w-full h-full bg-gray-300 rounded-md"></div>
        <div className="p-4">
          <div className="flex items-center justify-center flex-col w-full -gap-4">
            <h1 className="md:text-md text-sm font-semibold bg-gray-200 md:h-4 h-2 w-4/5 mb-2"></h1>
            <p className="mt-3 text-md font-medium text-gray-600 bg-gray-200 md:h-3 h-2 w-20"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
