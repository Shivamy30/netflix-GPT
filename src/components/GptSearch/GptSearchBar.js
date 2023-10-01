import React from 'react'
import { useSelector } from 'react-redux';
import lang from '../../utils/languageConstant';


const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);

  return (
    <div className='pt-[10%] flex justify-center'>
        <form className=' bg-black w-1/2 grid grid-cols-12'>
            <input className='p-3 m-3 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='py-2 m-3 col-span-3 rounded-lg bg-red-700 text-white'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar