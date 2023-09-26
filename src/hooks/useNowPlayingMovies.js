import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../constants";

const useNowplayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const resposne = await data.json();
    console.log(resposne.results);
    dispatch(addNowPlayingMovies(resposne.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowplayingMovies;
