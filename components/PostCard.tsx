import Link from "next/link";
import React from "react";

interface PostCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  category: string;
  featured: boolean;
}

function PostCard({ 
  id, 
  title, 
  description, 
  date, 
  author, 
  tags, 
  category, 
  featured 
}: PostCardProps) {
  return (
        <div className="flex flex-col md:flex-row gap-2">
            <div className="flex flex-col items-center justify-center">
                <span className="text-md text-gray-200 mt-10 md:mt-0">{date}</span>
            </div>
            <div className="p-4 shadow-md flex-1">
                <div className="flex flex-row justify-between"><h2 className="text-xl font-bold">{title}</h2>{featured && <i className="nf nf-fa-star"/>}</div>
                <div className="mt-2 flex flex-row gap-2 text-sm text-gray-500 flex-wrap items-center">
                    <i className="nf nf-md-tag_multiple" />
                    {tags.map((tag, index) => (
                        <React.Fragment key={tag}>
                        {/* Render the span for the tag */}
                        <span className="">{tag}</span>
                        {index < tags.length - 1 && '|'}
                        </React.Fragment>
                    ))}
                </div>
                <p className="mt-2 text-gray-200">{description}</p>
                <Link href={`/posts/${id}`} className="text-slate-600 hover:underline">Read more</Link>
            </div>
        </div>
    );
}

export default PostCard;