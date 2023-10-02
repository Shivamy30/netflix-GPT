import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggetion from './GptMovieSuggetion'
import { BACKGROUND_IMAGE, GPT_PAGE_BG_IMAGE } from '../../utils/constants'


const GptMainPage = () => {
    return (
        <>
            <div className='absolute -z-10'>
                <img className='h-screen w-screen'
                    alt='background'
                    src={GPT_PAGE_BG_IMAGE} />
            </div>
            <div className=''>
                <GptSearchBar />
                <GptMovieSuggetion />
            </div>
        </>
    )
}

export default GptMainPage