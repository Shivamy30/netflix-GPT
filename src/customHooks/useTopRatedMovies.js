import { useEffect } from "react"
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";


const useTopRatedMovies = () => {

    const topRatedMovies = useSelector(store => store.movies.topRatedMovies);
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
        const responseJson = await response.json();
        dispatch(addTopRatedMovies(responseJson.results))
    }
    useEffect(() => {
        topRatedMovies.length==0 && getTopRatedMovies();
    }, []);
}

export default useTopRatedMovies;