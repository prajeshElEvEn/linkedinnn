import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { CalendarViewDay, EventNote } from '@mui/icons-material';
import Post from './Post';
import { collection, addDoc, getDocs } from "firebase/firestore"
import { db } from '../firebase/config';

const Feed = () => {
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const postSnapshot = await getDocs(collection(db, "posts"))
            setPosts(postSnapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })))
        }
        getPosts()
    }, [])


    const sendPost = async (e) => {
        e.preventDefault()
        const postRef = await addDoc(collection(db, "posts"), {
            name: "Prajesh Pratap Singh",
            description: "this is a test",
            message: "message",
        })
    }

    return (
        <div className='feed'>
            <div className="feed-inputContainer">
                <div className="feed-input">
                    <CreateIcon />
                    <form>
                        <input
                            type="text"
                            placeholder="Write something here..."
                        />
                        <button
                            type="submit"
                            onClick={sendPost}
                        >
                            Send
                        </button>
                    </form>
                </div>
                <div className="feed-inputOptions">
                    <InputOption Icon={ImageIcon} title={"Photo"} color={"#70B5F9"} />
                    <InputOption Icon={SubscriptionsIcon} title={"Video"} color={"#e7a33e"} />
                    <InputOption Icon={EventNote} title={"Event"} color={"#c0cbcd"} />
                    <InputOption Icon={CalendarViewDay} title={"Write article"} color={"#7fc15e"} />
                </div>
            </div>

            {/* Post */}
            {posts.map((post) => (
                <Post />
            ))}
            <Post
                name={'Prajesh Pratap Singh'}
                desc={'this is a test'}
                msg={'message'}
            />
        </div>
    )
}

export default Feed
