import React from "react";

export default function Post({ post }) {
    return (
        <div>
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p className="text-lg">{post.body}</p>
        </div>
    );
}

export async function getStaticPaths() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    const post = await res.json();

    return { props: { post } };
}