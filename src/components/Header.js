import React, { useEffect } from 'react'
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { addUser, removeUser } from '../utils/userSlice'
import { toggleShowGptSearch } from '../utils/gptSlice'
import { changeLanguage } from '../utils/configSlice'

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user)
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);
    const langKey = useSelector(store => store.config.lang);

    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            // navigate to error page
        });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, displayName, email, photoURL } = user;
                dispatch(addUser({ uid: uid, displayName: displayName, email: email, photoURL: photoURL }));
                navigate("/browse")
            } else {
                dispatch(removeUser())
                console.log("naviationg to home user not logged in")
                navigate("/")
            }
        });
        // unsubscribe will be called when component unmounts as we subscribe onAuthStateChanged so need to unsubscribe it.
        return () => unsubscribe();
    }, []);

    const handleGptSeachClick = () => {
        dispatch(toggleShowGptSearch())
    };

    const handleLangChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    }

    return (
        <div className=' absolute w-screen h-16 z-10 px-8 py-2 bg-gradient-to-b from-black flex flex-col sm:flex-row sm:justify-between'>
            <img className='w-44 m-auto sm:m-0 h-16 max-sm:w-24'
                alt='logo'
                src={LOGO} />
            {user &&
                <div className='flex m-auto sm:m-0'>
                    {showGptSearch && <select onChange={handleLangChange}
                        defaultValue={langKey}
                        name='lang' className='m-1 px-2 pt-2 pb-3 bg-gray-900 text-white rounded-lg'>
                        {SUPPORTED_LANGUAGES.map((lang) => (
                            <option key={lang.identifier} value={lang.identifier}>{lang.language}</option>))
                        }
                    </select>}
                    <button onClick={handleGptSeachClick}
                        className=' m-1 px-2 pt-2 pb-3 text-white bg-purple-800 rounded-lg '>
                        {showGptSearch ? "Home Page" : "GPT Search"}</button>
                    {<img
                        className='w-9 h-9 m-2 hidden sm:inline-block'
                        alt='user-icon'
                        src={user?.photoURL}
                    />}
                    <button onClick={handleSignOut} className='font-bold text-white bg-slate-500 rounded-lg m-1 px-2 pt-2 pb-3'>(Sign Out)</button>
                </div>}
        </div>
    )
}

export default Header