import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";

function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => res.json())
            .then((data) => setPost(data));
    }, [id]);

    if (!post) return <p className="text-center text-xl">Loading...</p>;

    return (
        <div className="bg-gray-50 min-h-screen">
            <Header />
            <div className="container px-4 py-6 mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
                    <p className="text-gray-600 text-lg mb-6">{post.body}</p>
                    <Link
                        to="/"
                        className="text-blue-600 hover:text-blue-800 text-lg font-semibold"
                    >
                        ← Back to posts
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PostDetail;
