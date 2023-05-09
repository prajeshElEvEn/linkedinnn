import { Avatar } from '@mui/material'
import React from 'react'

const HeaderOption = ({ avatar, Icon, title }) => {
    return (
        <div className='headerOption'>
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
