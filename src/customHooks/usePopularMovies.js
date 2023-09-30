import { useEffect } from "react"
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
 import { addPopularMovies } from "../utils/moviesSlice";


const usePopularMovies = () => {

    const dispatch = useDispatch()
    const getPopularMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
        const responseJson = await response.json();
        dispatch(addPopularMovies(responseJson.results))
    }
    useEffect(() => {
        getPopularMovies();
    }, []);

};

export default usePopularMovies;