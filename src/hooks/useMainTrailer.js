import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants";
import { addMovieTrailers } from "../utils/moviesSlice";
import { useEffect } from "react";
import { useActionData } from "react-router-dom";

const useMainTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();

    const filteredTrailerS = json?.results?.filter(
      (item) => item.type === "Trailer"
    );
    const trailer = filteredTrailerS.length
      ? filteredTrailerS[1]
      : json?.results[0];
    dispatch(addMovieTrailers(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default useMainTrailer;
