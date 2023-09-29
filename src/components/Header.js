import React from 'react'
import { LOGO } from '../utils/constants'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/")
        })
            .catch((error) => {
                // navigate to error page
            });
    }
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