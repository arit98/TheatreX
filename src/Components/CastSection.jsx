import React from "react";
import { useSelector } from "react-redux";

import Img from "./LazyLoadImg/Img";
import avatar from "../assets/images/avatar.png";
import Slider from "react-slick";

const CastSection = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 8, // Number of slides to show at once
    slidesToScroll: 6,
    arrows: false,
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
          slidesToShow: 3,
          arrows: false,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle bg-gray-300 rounded-full h-20 w-20 md:h-28 md:w-28 mb-5"></div>
        <div className="row bg-gray-300 rounded h-5 mb-3"></div>
        <div className="row2 bg-gray-300 rounded h-5 w-3/4 mx-auto"></div>
      </div>
    );
  };
  return (
    <div className="castSection m-auto max-w-[1200px] w-full md:mt-0 mt-[625px] p-4">
        <div className="sectionHeading text-white text-3xl mb-5">Top Cast</div>
        {!loading ? (
          <Slider {...settings}>
            {data?.map((item) => {
              let imgUrl = item.profile_path ? url.profile + item.profile_path : avatar;
              return (
                <div className="listItems md:gap-4 gap-3 overflow-hidden px-5 md:px-0">
                <div key={item.id} className="listItem text-center text-white flex items-center justify-center flex-col">
                  <div className="profileImg w-12 h-12 md:w-44 md:h-44 rounded-full overflow-hidden mb-5">
                    <Img src={imgUrl} />
                  </div>
                  <div className="name md:text-lg text-sm font-semibold">{item.name}</div>
                  <div className="character md:text-lg text-sm opacity-50">{item.character}</div>
                </div>
          </div>
              );
            })}
            </Slider>
        ) : (
          <div className="castSkeleton flex gap-5 overflow-hidden px-5 md:px-0">
            {Array.from({ length: 6 }, (_, index) => (
              <React.Fragment key={index}>{skeleton()}</React.Fragment>
            ))}
          </div>
        )}
      </div>
  );
};

export default CastSection;