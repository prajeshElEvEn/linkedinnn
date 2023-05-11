import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HeaderOption from './HeaderOption'
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { BusinessCenter, Notifications } from '@mui/icons-material';
import ChatIcon from '@mui/icons-material/Chat'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/user/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';

const Header = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const logOutApp = () => {
        dispatch(logout())
        signOut(auth)
    }

    return (
        <div className='header'>
            <div className="header-left">
                <LinkedInIcon
                    style={{ color: "#0050c0", fontSize: "2.5rem" }}
                />
                <div className="header-search">
                    <SearchIcon />
                    <input
                        type="text"
                        placeholder="Search anything..."
                    />
                </div>
            </div>
            <div className="header-right">
                <HeaderOption Icon={HomeIcon} title={'Home'} />
                <HeaderOption Icon={SupervisorAccountIcon} title={'My Network'} />
                <HeaderOption Icon={BusinessCenter} title={'Jobs'} />
                <HeaderOption Icon={ChatIcon} title={'Messaging'} />
                <HeaderOption Icon={Notifications} title={'Notifications'} />
                <HeaderOption
                    avatar={user?.photoUrl}
                    onClick={logOutApp}
                />
            </div>
        </div>
    )
}

export default Header
