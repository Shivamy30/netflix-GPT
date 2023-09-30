import { useEffect } from "react"
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";


const useNowPlayingMovies = ()=> {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async()=>{
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        const responseJson = await response.json();
        dispatch(addNowPlayingMovies(responseJson.results))
    }
    useEffect(()=>{
        getNowPlayingMovies();
    },[]);
}

export default useNowPlayingMovies;