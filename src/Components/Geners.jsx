import React from "react";
import { useStateHomeValue } from "./useStateValue";

const Geners = ({ data }) => {
  const { genres } = useStateHomeValue();
  return (
    <div className="absolute md:flex hidden flex-wrap gap-1 bottom-16 w-[210px] m-auto justify-center">
      {data?.map((d) => {
        if(!genres[d]?.name) return;
        return <div className="bg-red-400 p-1 text-xs text-white rounded-md">{genres[d]?.name}</div>;
      })}
    </div>
  );
};

export default Geners;
