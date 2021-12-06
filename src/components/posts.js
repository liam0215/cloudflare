import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const resp = await fetch(
                "https://my-worker-with-router.liamarzola.workers.dev/posts"
            );
            const postsResp = await resp.json();
            setPosts(postsResp);
        };

        getPosts();
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            {posts.map((post) => (
                <div>
                    <h1>{post.title}</h1>
                    <h2>{post.username}</h2>
                    <p>{post.content}</p>
                    <p>
                        <Link to="/">Go back</Link>
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Posts;