import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-8 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-5xl font-bold md:w-1/2'>{title}</h1>
        <p className='hidden md:inline-block py-2 md:py-6 text-lg  md:w-[700px]'>{overview}</p>
        <div className='my-4 md:my-0'>
            <button className='bg-white text-black py-2 md:py-3 px-3 md:px-6 text-xl rounded-lg hover:bg-opacity-80'>▶️ Play</button>
            <button className= ' hidden md:inline-block mx-4 bg-gray-500 py-3 px-10 text-xl bg-opacity-50 rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle