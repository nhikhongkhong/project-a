import React, { useState, useEffect } from 'react';
import axios from 'axios'

const PostGrid = ({visible, userID }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log("userID", userID)
        const fetchUsers = async () => {
            const postResult = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)
            console.log(postResult.data)
            setPosts(postResult.data)
        }
        fetchUsers()
    }, [userID])

    return visible ? (<h1></h1>) : (
        <section className="card">
            {posts.map((post) => (<h1>{post.title}</h1>))}
        </section>
    )
}

export default PostGrid
