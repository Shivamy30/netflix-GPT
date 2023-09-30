import React, { useEffect } from 'react'
import { LOGO } from '../utils/constants'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { addUser, removeUser } from '../utils/userSlice'

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user)
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

    return (
        <div className=' absolute w-screen h-16 z-10 px-8 py-2 bg-gradient-to-b from-black flex justify-between'>
            <img className='w-44 h-16'
                alt='logo'
                src={LOGO} />
            {user && <div className='flex p-2'>
                <img
                    className='w-8 h-8'
                    alt='user-icon'
                    src={user?.photoURL}
                />
                <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
            </div>}
        </div>
    )
}

export default Header