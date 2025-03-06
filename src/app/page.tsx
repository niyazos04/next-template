import Link from "next/link";

interface Post {
  id: number;
  title: string;
}

async function getPosts() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
    {
      cache: "no-store", // Ensures fresh data for SSR
    }
  );
  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-bold mb-6">Blog Posts</h1>
      <ul className="text-lg space-y-4">
        {posts.map((post: Post) => (
          <li key={post.id}>
            <Link
              href={`/blog/${post.id}`}
              className="text-blue-500 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
