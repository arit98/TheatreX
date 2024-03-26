import React from "react";
import { useStateHomeValue } from "./useStateValue";
import "../assets/styles/external.css"

const Geners = ({ data }) => {
  const { genres } = useStateHomeValue();
  return (
    <>
      {data?.map((d) => {
        if(!genres[d]?.name) return;
        return <div className="bg-red-400 p-1 text-xs text-white rounded-md">{genres[d]?.name}</div>;
      })}
    </>
  );
};

export default Geners;
