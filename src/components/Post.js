import { Avatar } from '@mui/material'
import React from 'react'

const Post = () => {
    return (
        <div className='post'>
            <div className="post-header">
                <Avatar />
                <div className="post-info">
                    <div className="name">
                        Prajesh Pratap Singh
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
            </div>
            <div className="post-body">
                <div className="body-text">
                    Message goes here
                </div>
            </div>
        </div>
    )
}

export default Post
