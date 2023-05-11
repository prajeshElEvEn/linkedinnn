import { Avatar } from '@mui/material'
import React from 'react'

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
    return (
        <div
            className='headerOption'
            onClick={onClick}
        >
            {
                Icon && <Icon className='headerOption-icon' />
            }
            {
                avatar && <Avatar className='headerOption-icon' src={avatar} />
            }
            {
                title && <div className="headerOption-title">
                    {title}
                </div>
            }
        </div>
    )
}

export default HeaderOption
