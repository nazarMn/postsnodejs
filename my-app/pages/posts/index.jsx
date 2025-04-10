
import Link from "next/link";

export default function PostsList({ posts }) {
    return (
        <div className=" mx-auto p-6 bg-white shadow-lg rounded-2xl">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">Posts</h1>
    <ul className="space-y-4">
        {posts.map((post) => (
            <li
                key={post.id}
                className="bg-gray-100 hover:bg-gray-200 transition-colors duration-300 rounded-xl p-4 justify-between flex items-center"
            >
              
                    {post.title}
                    <Link
                    href={`/posts/${post.id}`}
                    className="text-xl text-blue-500 color-foreground hover:underline"
                >
                    Read more
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