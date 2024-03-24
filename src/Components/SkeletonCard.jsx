import React from "react";

const SkeletonCard = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-[225px] h-[311px] p-1 rounded-md border mt-8 animate-pulse">
        <div className="w-full h-full bg-gray-300 rounded-md"></div>
        <div className="p-4">
          <div className="flex items-center justify-center flex-col w-full">
            <h1 className="text-md font-semibold bg-gray-200 h-6 w-4/5 mb-2"></h1>
            <p className="mt-3 text-md font-medium text-gray-600 bg-gray-200 h-5 w-20"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
