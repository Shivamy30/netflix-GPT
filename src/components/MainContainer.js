import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const movies = useSelector(store=>store.movies.nowPlayingMovies);
    if(movies.length === 0 ) return null;
    const i = Math.floor(Math.random() * movies.length);
    const mainMovie = movies[i];
    const {original_title, overview, id} = mainMovie;
    return (
        <div className='pt-[30%] bg-black md:pt-0'>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground videoId={id}/>
        </div>
    )
}

export default MainContainer