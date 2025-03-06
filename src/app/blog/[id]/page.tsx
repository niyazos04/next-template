import { notFound } from "next/navigation";

interface Post {
  id: number;
  title: string;
  body: string;
}

async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store", // Ensures fresh data for SSR
  });

  if (!res.ok) {
    return null; // Return null if post is not found
  }

  return res.json();
}

export default async function BlogDetail({
  params,
}: {
  params: { id: string };
}) {
  const post = await getPost(params.id);

  if (!post) {
    return notFound();
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="mt-4 text-gray-700">{post.body}</p>
      <a href="/" className="mt-6 inline-block text-blue-500 hover:underline">
        ← Back to Home
      </a>
    </div>
  );
}
