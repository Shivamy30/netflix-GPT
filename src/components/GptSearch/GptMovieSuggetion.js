import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../MovieList';

const GptMovieSuggetion = () => {
    const gpt = useSelector(store => store.gpt);
    const { movieResutls, movieNames } = gpt;
    if (movieNames.length ===0) {
        // show simmer UI or spinner
        return null;
    }

        return (
            <div className='p-4 m-4 bg-black text-white'>
                <div>
                    <h1>{movieNames[0]}</h1>
                    <MovieList title={movieNames[0]} movies={movieResutls[0]}/>
                </div>

            </div>
        )
}

export default GptMovieSuggetion