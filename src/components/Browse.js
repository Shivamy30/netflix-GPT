import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useUpcomingMovies from '../customHooks/useUpcomingMovies';
import useTopRatedMovies from '../customHooks/useTopRatedMovies';
import usePopularMovies from '../customHooks/usePopularMovies';
import { useSelector } from 'react-redux';
import GptMainPage from './GptSearch/GptMainPage';

const Browse = () => {

  useNowPlayingMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  usePopularMovies();
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  return (
    <div>
      <Header />
      {showGptSearch ? <GptMainPage /> :
        <>
          <MainContainer />
          <SecondaryContainer />
        </>}

    </div>
  )
}

export default Browse