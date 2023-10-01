import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggetion from './GptMovieSuggetion'
import { BACKGROUND_IMAGE } from '../../utils/constants'


const GptMainPage = () => {
        return(
            <div>
                <div className='absolute -z-10'>
                    <img className='h-screen w-screen'
                        alt='background'
                        src={BACKGROUND_IMAGE} />
                </div>
                <GptSearchBar  />
                <GptMovieSuggetion />
            </div>
        )
}

export default GptMainPage