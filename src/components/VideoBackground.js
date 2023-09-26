import React from "react";
import useMainTrailer from "../hooks/useMainTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies.movieTrailers);
  useMainTrailer(movieId);
  return (
    <div className="w-full absolute -z-10 ">
     
      {trailer && (
        <iframe className="w-full h-full  aspect-video"
          src={"https://www.youtube.com/embed/" + trailer.key +"?autoplay=1&mute=1"}
          title="YouTube video player"
        //   frameBorder="0"
        //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
