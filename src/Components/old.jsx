import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import useFetch from "../hooks/useFetch";
import Geners from "./Geners";
import Img from "./LazyLoadImg/Img";
import PosterFallback from "../assets/images/no-poster.png";
import "../assets/styles/external.css"
// import { PlayIcon } from "../Playbtn";
// import VideoPopup from "../../../components/videoPopup/VideoPopup";

const DetailsBanner = ({ video, crew }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);

  const { url } = useSelector((state) => state.home);

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
    <div className="w-full bg-black pt-100 pb-50 md:pb-0 md:pt-120 md:min-h-700">
      {!loading ? (
        <>
          {!!data && (
            <React.Fragment>
              <div className="w-full h-full absolute top-0 left-0 opacity-10 overflow-hidden bg-green-400">
                <Img src={url.backdrop + data.backdrop_path} />
              </div>
              <div className="opacity-layer w-full h-[550px] sm:h-[250px] md:h-[250px] lg:h-[250px]"></div>
              <div className="w-full max-w-[1200px] m-auto px-20 z-50">
                <div className="flex flex-col relative gap-4 md:flex-row w-full">
                  <div className="flex w-[880px] h-[331px] mt-24 max-w-[1200px]">
                    {data.poster_path ? (
                      <Img
                        className="posterImg"
                        src={url.backdrop + data.poster_path}
                      />
                    ) : (
                      <Img className="posterImg" src={PosterFallback} />
                    )}
                  </div>
                  <div className="right mt-24">
                    <div className="title text-3xl">
                      {`${data.name || data.title} (${new Date(
                        data?.release_date
                      ).toDateString("en-US", options).slice(10).trim()})`}
                    </div>
                    <div className="subtitle text-xl mt-8 mb-4">{data.tagline}</div>

                   <div className="absolute -bottom-20 left-72 w-full"><Geners data={_genres} /></div>

                    <div className="row">
                      <div
                        className={`radial-progress absolute right-0 top-24 md:text-2xl text-md font-bold md:h-20 h-12 w-12 md:w-20 bg-gray-200 ${
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
                        {(data?.vote_average).toFixed(1)}
                      </div>
                      <div
                        className="playbtn"
                        onClick={() => {
                          setShow(true);
                          setVideoId(video.key);
                        }}
                      >
                        {/* <PlayIcon /> */}
                        <span className="text">Watch Trailer</span>
                      </div>
                    </div>

                    <div className="overview">
                      <div className="heading">Overview</div>
                      <div className="description">{data.overview}</div>
                    </div>

                    <div className="info">
                      {data.status && (
                        <div className="infoItem">
                          <span className="text bold">Status: </span>
                          <span className="text">{data.status}</span>
                        </div>
                      )}
                      {data.release_date && (
                        <div className="infoItem">
                          <span className="text bold">Release Date: </span>
                          <span className="text">
                            {new Date(data.release_date).toDateString(
                              "en-US",
                              options
                            )}
                          </span>
                        </div>
                      )}
                      {data.runtime && (
                        <div className="infoItem">
                          <span className="text bold">Runtime: </span>
                          <span className="text">
                            {toHoursAndMinutes(data.runtime)}
                          </span>
                        </div>
                      )}
                    </div>

                    {director?.length > 0 && (
                      <div className="info">
                        <span className="text bold">Director: </span>
                        <span className="text">
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
                      <div className="info">
                        <span className="text bold">Writer: </span>
                        <span className="text">
                          {writer?.map((d, i) => (
                            <span key={i}>
                              {d.name}
                              {writer.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}

                    {data?.created_by?.length > 0 && (
                      <div className="info">
                        <span className="text bold">Creator: </span>
                        <span className="text">
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
                {/* <VideoPopup
                                    show={show}
                                    setShow={setShow}
                                    videoId={videoId}
                                    setVideoId={setVideoId}
                                /> */}
              </div>
            </React.Fragment>
          )}
        </>
      ) : (
        <div className="detailsBannerSkeleton">
          <div className="w-full max-w-[1200px]">
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
