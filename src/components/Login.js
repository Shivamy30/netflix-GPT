import React, { useState } from 'react'
import Header from './Header'
import { BACKGROUND_IMAGE } from '../utils/constants';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    console.log(BACKGROUND_IMAGE);
    return (
        <div className=''>
            <Header />
            <div className='absolute'>
                <img
                    alt='background-image'
                    src={BACKGROUND_IMAGE} />

            </div>
            <form className='bg-black absolute p-12 w-3/12 my-32 mx-auto text-white right-0 left-0 rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-3xl pt-3 pb-5'>{isSignInForm? "Sign In":"Sign Up"}</h1>
                {!isSignInForm && <input className='p-3 my-2 w-full bg-gray-600 rounded-lg' type='text' placeholder='Full Name' />}
                <input className='p-3 my-2 w-full bg-gray-600 rounded-lg' type='email' placeholder='Email' />
                <input className='p-3 my-2 w-full bg-gray-600 rounded-lg' type='password' placeholder='Password' />
                <button className='p-3 my-8 w-full bg-red-700 rounded-lg'>Sign In</button>
                <p className='text-gray-500 font-medium'>{isSignInForm?"New to Netflix?":"Already registered user?"} <span onClick={()=>setIsSignInForm(!isSignInForm)} className='text-white cursor-pointer'>{isSignInForm?"Sign up now":"Sign In"}</span> </p>
                <p className='text-gray-500 text-sm py-2'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
            </form>
        </div>
    )
}

export default Login