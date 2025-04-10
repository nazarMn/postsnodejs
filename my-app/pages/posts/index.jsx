
import Link from "next/link";

export default function PostsList({ posts }) {
    return (
        <div>
            <h1 className="text-3xl font-bold">Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>   
                ))}
            </ul>
        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    return { props: { posts } };
}   