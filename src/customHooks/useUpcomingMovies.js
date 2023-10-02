import { addUpComingMovies } from "../utils/moviesSlice";
import { useEffect } from "react"
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";


const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector(store => store.movies.upcomingMovies)
    const getUpComingMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
        const responseJson = await response.json();
        dispatch(addUpComingMovies(responseJson.results))
    }
    useEffect(() => {
        upcomingMovies.length==0 && getUpComingMovies();
    }, []);
};

export default useUpcomingMovies;