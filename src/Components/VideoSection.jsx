import React, { useState } from "react";

import Img from "./LazyLoadImg/Img";
import { IoPlayCircleOutline } from "react-icons/io5";
import TrailerModal from "./TrailerModal";

import "../assets/styles/external.css";
import Slider from "react-slick";
import SkeletonVideo from "./Skeleton/SkeletonVideo";

const VideosSection = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 4,
    arrows: false,
    className: "flex items-center",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          arrows: false,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    <div className="w-full p-4 relative mb-4">
      <div className="w-full max-w-[1200px] m-auto mb-10">
        <div className="sectionHeading text-white text-xl mb-5">
          Official Videos
        </div>
        {!!loading ? (
          <Slider {...settings}>
              {data?.results?.map((video) => (
              <div className="videos flex overflow-x-auto px-20 md:gap-12 gap-16">
                  <div
                  key={video?.id}
                  className="videoItem cursor-pointer w-150 md:w-1/4"
                  onClick={() => {
                    setVideoId(video?.key);
                    setShow(true);
                  }}
                >
                  <div className="videoThumbnail mb-5 relative -ml-12 flex">
                    <Img
                      src={`https://img.youtube.com/vi/${video?.key}/mqdefault.jpg`}
                      className="w-full rounded-lg"
                    />
                    <IoPlayCircleOutline className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 hover:text-red-400" />
                  </div>
                  <div className="videoTitle text-white text-sm md:text-lg text-center text-ellipsis overflow-hidden whitespace-nowrap md:w-[160px] w-20">
                    {video?.name}
                  </div>
                </div>
            </div>
              ))}
          </Slider>
        ) : (
          <div className="videoSkeleton flex gap-8 overflow-x-auto px-20 md:gap-4">
            {Array.from({ length: 10 }).map((_, index) => (
            <div key={index}>
              <SkeletonVideo />
            </div>
          ))}
          </div>
        )}
      </div>
      <TrailerModal
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default VideosSection;
