import { Avatar } from '@mui/material'
import React from 'react'
import Bg from '../assets/images/bg.jpg'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar-top">
                {/* <img src={Bg} alt="" /> */}
                <div className="img"
                    style={{
                        "background": `url(${Bg})`
                    }}
                ></div>
                <Avatar />
                <div className="top-info">
                    <div className="name">
                        Prajesh Pratap Singh
                    </div>
                    <div className="email">
                        prajesh.eleven118@gmail.com
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
            </div>
        </div>
    )
}

export default Sidebar
