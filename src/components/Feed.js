import React from 'react'
import CreateIcon from '@mui/icons-material/Create';

const Feed = () => {
    return (
        <div className='feed'>
            <div className="feed-inputContainer">
                <div className="feed-input">
                    <CreateIcon />
                    <form action="">
                        <input type="text" />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Feed
