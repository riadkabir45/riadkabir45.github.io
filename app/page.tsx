import Page from "@/components/Page";
import { scanMarkdowns } from "@/utils/mdFiles";
import Image from "next/image";
import PostCard from "@/components/PostCard";

export default function Home() {

  const mdFiles = scanMarkdowns('posts');

  return (
    <div className="container mx-auto px-4 py-8">
      <Page className="flex flex-col items-center">
        <Image className="rounded-full mx-auto shadow-md" priority={true} src="/profile.png" alt="Profile Picture" width={100} height={100} />
        <div className="flex flex-col items-center text-center">
          <p className="m-8 text-xl">Welcome to my wlog!</p>
          <p>It's a wikipedia and blog combined.</p>
          <p>To hold whatever I have learned throughout my code journey.</p>
        </div>
        <div className="mt-10 text-5xl">Featured Posts</div>
        <div className="flex flex-col w-full max-w-3xl gap-4 mt-8">
          {mdFiles.getFeaturedPosts().slice(0, 2).map(post => (
            <PostCard key={post.meta.id} {...post.meta} />
          ))}
        </div>
        <div className="mt-10 text-5xl">Posts</div>
        <div className="flex flex-col w-full max-w-3xl gap-4 mt-8">
          {mdFiles.getNonFeaturedPosts().slice(0, 2).map(post => (
            <PostCard key={post.meta.id} {...post.meta} />
          ))}
        </div>
      </Page>
    </div>
  );
}
