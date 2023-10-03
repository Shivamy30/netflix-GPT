import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import lang from '../../utils/languageConstant';
import openai from '../../utils/openai';
import { options } from '../../utils/constants';
import { addGptMoviesResult } from '../../utils/gptSlice';



const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef("")
    const dispatch = useDispatch();

    const searchTMDB = async (movieName) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, options)
        const jsonData = await data.json();
        return jsonData.results;


    }
    const handleGptSeachClick = async () => {
        try {
            const searchQuery = "Act as a Movie Recommendation System and suggest some movies for the query: " + searchText.current.value +
                ". only give me namse of 5 movies, comma separated like the example given ahead. Example: gaddar, hera feri, koi mil gaya, krish, golmal";
            const gptSeachResult = await openai.chat.completions.create({
                messages: [{ role: 'user', content: searchQuery }],
                model: 'gpt-3.5-turbo',
            });
            if (!gptSeachResult.choices) {
                //handle error
                return;
            }

            console.log(gptSeachResult.choices);
            const gptMovies = gptSeachResult.choices?.[0].message?.content.split(",");

            const promiseArray = gptMovies.map((movie) => searchTMDB(movie));
            const tmdbResult = await Promise.all(promiseArray);

            dispatch(addGptMoviesResult(tmdbResult));
        } catch (e) {
            alert("some error occurred please try after some time");
        }
    }


    return (
        <div className='min-sm:pt[50%] max-sm:pt-[150px] sm:pt-[10%] flex justify-center'>
            <form onSubmit={(e) => e.preventDefault()}
                className=' bg-black w-full md:w-1/2 grid grid-cols-12'>
                <input type='text' ref={searchText} className='p-3 m-3 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder} />
                <button onClick={handleGptSeachClick}
                    className='py-2 m-3 col-span-3 rounded-lg bg-red-700 text-white'>{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar