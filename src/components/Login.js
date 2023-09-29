import React, { useRef, useState } from 'react'
import Header from './Header'
import { BACKGROUND_IMAGE } from '../utils/constants';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButtonClick = () => {
        const validationCheck = checkValidData(email.current.value, password.current.value);
        setErrorMsg(validationCheck);
        if (validationCheck) return;

        if (!isSignInForm) {
            // sign Up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
                      }).then(() => {
                        const {uid, displayName, email, photoURL} = auth.currentUser;
                        dispatch(addUser({uid:uid, displayName:displayName, email:email, photoURL:photoURL})); 
                        navigate("/browse")
                      }).catch((error) => {
                        
                      });
                })
                .catch((error) => {
                    // const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorMessage)
                });
        } else {
            signInWithEmailAndPassword(auth,email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    navigate("/browse")
                })
                .catch((error) => {
                    // const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorMessage);

                });
        }
    }
    return (
        <div className=''>
            <Header />
            <div className='absolute'>
                <img className='h-screen w-screen'
                    alt='background-image'
                    src={BACKGROUND_IMAGE} />
            </div>
            <form onSubmit={(e) => e.preventDefault()}
                className='bg-black absolute p-12 w-96 my-32 mx-auto text-white right-0 left-0 rounded-lg bg-opacity-80 max-sm:w-full max-sm:my-0 max-sm:h-full max-sm:flex max-sm:justify-center max-sm:flex-col'>
                <h1 className='font-bold text-3xl pt-3 pb-5'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={name} minLength={3} className='p-3 my-2 w-full bg-gray-600 rounded-lg' type='text' placeholder='Full Name' />}
                <input ref={email} className='p-3 my-2 w-full bg-gray-600 rounded-lg' type='email' placeholder='Email' />
                <input ref={password} className='p-3 my-2 w-full bg-gray-600 rounded-lg' type='password' placeholder='Password' />
                {errorMsg && <p className='text-red-500'>⚠️ {errorMsg}</p>}
                <button className='p-3 my-8 w-full bg-red-700 rounded-lg' onClick={handleButtonClick}>Sign In</button>
                <p className='text-gray-500 font-medium'>{isSignInForm ? "New to Netflix?" : "Already registered user?"} <span onClick={() => setIsSignInForm(!isSignInForm)} className='text-white cursor-pointer'>{isSignInForm ? "Sign up now" : "Sign In"}</span> </p>
                <p className='text-gray-500 text-sm py-2'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
            </form>
        </div>
    )
}

export default Login