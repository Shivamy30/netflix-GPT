import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../customHooks/useMovieTrailer';

const VideoBackground = ({ videoId }) => {
    useMovieTrailer(videoId);
    const trailerVideo = useSelector(store => store.movies.trailerVideo);

    return (
        <div className='w-screen'>
            <iframe className='w-screen aspect-video'
                src={"https://www.youtube.com/embed/" + trailerVideo?.key+ "?&autoplay=true&mute=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            >
            </iframe>
        </div>
    )
}

export default VideoBackground