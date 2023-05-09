import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HeaderOption from './HeaderOption'
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { BusinessCenter, Notifications } from '@mui/icons-material';
import ChatIcon from '@mui/icons-material/Chat';
import me from '../assets/images/me.jpg'

const Header = () => {
    return (
        <div className='header'>
            <div className="header-left">
                {/* <img src="" alt="" /> */}
                <LinkedInIcon
                    style={{ color: "#0050c0", fontSize: "2.5rem" }}
                />
                <div className="header-search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header-right">
                <HeaderOption Icon={HomeIcon} title={'Home'} />
                <HeaderOption Icon={SupervisorAccountIcon} title={'My Network'} />
                <HeaderOption Icon={BusinessCenter} title={'Jobs'} />
                <HeaderOption Icon={ChatIcon} title={'Messaging'} />
                <HeaderOption Icon={Notifications} title={'Notifications'} />
                <HeaderOption avatar={me} />
            </div>
        </div>
    )
}

export default Header
