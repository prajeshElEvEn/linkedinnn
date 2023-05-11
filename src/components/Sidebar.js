import { Avatar } from '@mui/material'
import React from 'react'
import Bg from '../assets/images/bg.jpg'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/user/userSlice'

const Sidebar = () => {
    const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <div className="sidebar-recentItem">
            <span className="sidebar-hash">#</span>
            <span className="hash-text">{topic}</span>
        </div>
    )
    return (
        <div className='sidebar'>
            <div className="sidebar-top">
                {/* <img src={Bg} alt="" /> */}
                <div className="img"
                    style={{
                        "background": `url(${Bg}) no-repeat center center / cover`
                    }}
                ></div>
                <Avatar src={user.photoUrl} />
                <div className="top-info">
                    <div className="name">
                        {
                            user.displayName
                        }
                    </div>
                    <div className="email">
                        {
                            user.email
                        }
                    </div>
                </div>
            </div>
            <div className="sidebar-stats">
                <div className="sidebar-stat">
                    <div className="stat-text">
                        Who viewed you
                    </div>
                    <div className="stat-number">
                        2,543
                    </div>
                </div>
                <div className="sidebar-stat">
                    <div className="stat-text">
                        Views on post
                    </div>
                    <div className="stat-number">
                        2,448
                    </div>
                </div>
            </div>
            <div className="sidebar-bottom">
                <div className="bottom-text">
                    Recent
                </div>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('jsx')}
                {recentItem('design')}
                {recentItem('ui/ux')}
                {recentItem('coding')}
            </div>
        </div>
    )
}

export default Sidebar

// hair color
// green chips
//
