import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { CalendarViewDay, EventNote } from '@mui/icons-material';
import Post from './Post';
import { collection, addDoc, serverTimestamp, onSnapshot, orderBy, query } from "firebase/firestore"
import { db } from '../firebase/config';

const Feed = () => {
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const postRef = collection(db, "posts")
        const postQuery = query(postRef, orderBy("timestamp", "desc"))
        onSnapshot(postQuery, (snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])


    const sendPost = async (e) => {
        e.preventDefault()
        await addDoc(collection(db, "posts"), {
            name: "Prajesh Pratap Singh",
            description: "this is a test",
            message: input,
            photoUrl: "",
            timestamp: serverTimestamp()

        })
        setInput('')
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
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
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
                <Post
                    key={post.id}
                    name={post.data.name}
                    desc={post.data.description}
                    msg={post.data.message}
                    photoUrl={post.data.photoUrl}
                />
            ))}
        </div>
    )
}

export default Feed
