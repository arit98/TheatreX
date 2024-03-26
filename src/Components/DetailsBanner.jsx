import React, { useState } from "react";
import { useStateHomeValue } from "./useStateValue";
import useFetch from "../hooks/useFetch";
import Img from "./LazyLoadImg/Img";
import { useParams } from "react-router-dom";
import NoPoster from "../assets/images/no-poster.png";
import { IoPlayCircleOutline  } from "react-icons/io5";
import Geners from "./Geners";

const DetailsBanner = ({ video, crew }) => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  const { url } = useStateHomeValue();
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const _genres = data?.genres?.map((g) => g.id);

  const options = { day: "numeric", month: "long", year: "numeric" };

  const director = crew?.filter((f) => f.job === "Director");
  const writer = crew?.filter(
    (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
  );

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };
  return (
    <>
      {!loading ? (
        <>
          {!!data && (
            <div className="heroBanner w-full h-[450px] md:h-[700px] flex items-center relative select-none">
              <div className="backdrop-img w-full h-full absolute top-0 left-0 opacity-50 overflow-hidden">
                <Img
                  className="object-cover w-full h-full"
                  src={url.backdrop + data.backdrop_path}
                  alt=""
                />
              </div>
              <div className="opacity-layer w-full h-[550px] sm:h-[250px] md:h-[250px] lg:h-[250px]"></div>
              {/* inside */}
              <div className="w-full flex items-center justify-between md:flex-row flex-col m-auto max-w-[1200px] gap-12">
                <div className="left w-full flex items-center justify-center">
                  {data.poster_path ? (
                    <img className="md:w-[320px] w-48 h-auto z-50 rounded-xl mt-24 md:mt-0" src={url.backdrop + data.poster_path} />
                  ) : (
                    <Img src={NoPoster} />
                  )}
                </div>
                <div className="z-20 flex items-start justify-center md:my-20 flex-col md:p-0 p-4">
                  <div className="title text-xl md:text-3xl text-white font-semibold">
                    {`${data.name || data.title} (${new Date(data?.release_date)
                      .toDateString("en-US", options)
                      .slice(10)
                      .trim()})`}
                  </div>
                  <div className="subtitle md:text-xl text-lg mt-2 text-gray-500">
                    {data.tagline}
                  </div>
                  <div className="flex items-center justify-start gap-2 mt-4">
                    <Geners data={_genres} />
                  </div>
                  <div className="flex items-center justify-center gap-4 md:mt-6 mt-2 mb-4">
                    <div
                      className={`radial-progress md:text-2xl text-md font-bold md:h-20 h-12 w-12 md:w-20 bg-gray-200 ${
                        data?.vote_average < 5
                          ? "text-red-500"
                          : data?.vote_average < 7
                          ? "text-orange-500"
                          : "text-green-500"
                      }`}
                      style={{
                        "--value": data?.vote_average * 10,
                        "--thickness": "4px",
                      }}
                      color="#31363f"
                      role="progressbar"
                    >
                      {(data?.vote_average)?.toFixed(1)}
                    </div>
                    <div
                      className="playbtn"
                      onClick={() => {
                        setShow(true);
                        setVideoId(video.key);
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <IoPlayCircleOutline className="md:text-[5rem] text-6xl cursor-pointer hover:text-red-400" />
                        <span className="text-xl font-semibold">
                          Watch Trailer
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="overview pb-4">
                    <div className="text-xl font-semibold">Overview</div>
                    <div className="description">{data.overview}</div>
                  </div>

                  <div className="info flex items-center justify-between w-full border-y py-4">
                    {data.status && (
                      <div className="infoItem flex items-center justify-center flex-col">
                        <span className="text bold">Status: </span>
                        <span className="text-red-400">{data.status}</span>
                      </div>
                    )}
                    {data.release_date && (
                      <div className="infoItem flex items-center justify-center flex-col">
                        <span className="text bold">Release Date: </span>
                        <span className="text-red-400">
                          {new Date(data.release_date).toDateString(
                            "en-US",
                            options
                          )}
                        </span>
                      </div>
                    )}
                    {data.runtime && (
                      <div className="infoItem flex items-center justify-center flex-col">
                        <span className="text bold">Runtime: </span>
                        <span className="text-red-400">
                          {toHoursAndMinutes(data.runtime)}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="">
                    {director?.length > 0 && (
                      <div className="info border-y py-4">
                        <span className="text bold">Director: </span>
                        <span className="text-red-400">
                          {director?.map((d, i) => (
                            <span key={i}>
                              {d.name}
                              {director.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}

                    {writer?.length > 0 && (
                      <div className="info border-y py-4">
                        <span className="text bold">Writer: </span>
                        <span className="text-red-400">
                          {writer?.map((d, i) => (
                            <span key={i}>
                              {d.name}
                              {writer.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}
                  </div>

                  {data?.created_by?.length > 0 && (
                    <div className="info">
                      <span className="text bold">Creator: </span>
                      <span className="text-red-400">
                        {data?.created_by?.map((d, i) => (
                          <span key={i}>
                            {d.name}
                            {data?.created_by.length - 1 !== i && ", "}
                          </span>
                        ))}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default DetailsBanner;
