import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function Home() {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="bg-gray-50 min-h-screen">
            <Header />
            <div className="container px-4 py-6 mx-auto">
                <div className="flex justify-center mb-6">
                    <input
                        type="text"
                        placeholder="Search posts..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="px-6 py-3 w-full sm:w-1/3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <h2 className="text-3xl font-bold text-center mb-4">Post Titles</h2>
                <ul className="space-y-6">
                    {filteredPosts.map((post) => (
                            <li key={post.id} className="py-5 text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <Link
                                    to={`/post/${post.id}`}
                                    className="text-xl text-blue-500 hover:underline"
                                >
                                    {post.title}
                                </Link>
                            </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Home;
