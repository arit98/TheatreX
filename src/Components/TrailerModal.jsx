import React, { useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import { RxCross2 } from "react-icons/rx";

const TrailerModal = ({ show, setShow, videoId, setVideoId }) => {
    const hidePopup = () => {
        setShow(false); // Corrected setShow to false
        setVideoId(null);
    };

    useEffect(()=>{
        if(show){
            document.body.style.overflowY = "hidden"
        } else{
            document.body.style.overflowY = "scroll"
        }
    },[show])
    return (
        <div className={`videoPopup ${show ? "flex" : "hidden"} fixed left-0 inset-0 z-[101] flex items-center justify-center w-full`}>
            <div className="absolute inset-0 bg-black bg-opacity-25 backdrop-filter backdrop-blur-lg"></div>
            <span className="absolute top-0 right-0 px-4 py-2 text-white cursor-pointer z-40" onClick={hidePopup}>
                <RxCross2 />
            </span>
            <div className="aspect md:w-[1080px] md:h-[640px] aspect-h-9 z-50">
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${videoId}`}
                    controls
                    width="100%"
                    height="100%"
                    playing={true}
                />
            </div>
        </div>
    );
};

export default TrailerModal;