import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { options } from "../utils/constants"
import { useEffect } from "react";

const useMovieTrailer = (videoId) => {
    const dispatch = useDispatch();

    const getTrailerVideo = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${videoId}/videos?language=en-US`, options)
        const responseJson = await response.json();

        const filterdata = responseJson.results.filter((video) => video.type === "Trailer");
        const trailer = filterdata.length > 0 ? filterdata[0] : responseJson.results[0];
        dispatch(addTrailerVideo(trailer))
    }
    useEffect(() => {
        getTrailerVideo()
    }, []);

};

export default useMovieTrailer;