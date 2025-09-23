import { scanMarkdowns } from "@/utils/mdFiles";
import Link from "next/link";

export default function Home() {

  const mdFiles = scanMarkdowns('posts');

  return (
    <div className="container mx-auto px-4 py-8">
      <p>Hello, Next.js!</p>
      <div>
        {mdFiles.getAllPosts().map(post => (
          <Link key={post.meta.id} href={`/posts/${post.meta.id}`}>
            <h2>{post.meta.title}</h2>
            <p>{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
