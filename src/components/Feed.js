import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { CalendarViewDay, EventNote } from '@mui/icons-material';

const Feed = () => {
    return (
        <div className='feed'>
            <div className="feed-inputContainer">
                <div className="feed-input">
                    <CreateIcon />
                    <form action="">
                        <input
                            type="text"
                            placeholder="Write something here..."
                        />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed-inputOptions">
                    <InputOption Icon={ImageIcon} title={"Photo"} color={"#70B5F9"} />
                    <InputOption Icon={SubscriptionsIcon} title={"Video"} color={"#e7a33e"} />
                    <InputOption Icon={EventNote} title={"Event"} color={"#c0cbcd"} />
                    <InputOption Icon={CalendarViewDay} title={"Write article"} color={"#7fc15e"} />
                </div>
            </div>
        </div>
    )
}

export default Feed
