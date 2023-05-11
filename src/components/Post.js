import { Avatar } from '@mui/material'
import React, { forwardRef } from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import InputOption from './InputOption';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Post = forwardRef(({ name, desc, msg, photoUrl }, ref) => {
    return (
        <div
            ref={ref}
            className='post'
        >
            <div className="post-header">
                <Avatar src={photoUrl} />
                <div className="post-info">
                    <div className="name">
                        {name}
                    </div>
                    <div className="description">
                        {desc}
                    </div>
                </div>
            </div>
            <div className="post-body">
                <div className="body-text">
                    {msg}
                </div>
            </div>
            <div className="post-button">
                <InputOption Icon={ThumbUpOffAltIcon} title={"Like"} color={"gray"} />
                <InputOption Icon={ChatOutlinedIcon} title={"Comment"} color={"gray"} />
                <InputOption Icon={ShareOutlinedIcon} title={"Share"} color={"gray"} />
                <InputOption Icon={SendOutlinedIcon} title={"Send"} color={"gray"} />
            </div>
        </div>
    )
})

export default Post
