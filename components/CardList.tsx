"use client";
import React from "react";
import PostCard from "./PostCard";

interface CardListProps {
    cardContents: any[];
}

function CardList({ cardContents }: CardListProps) {
    const [search, setSearch] = React.useState("");

    return (
        <div className="flex flex-col w-full max-w-3xl gap-4 mt-8">
            <input onChange={e => setSearch(e.target.value)} className="focus:outline-none border-b-2 border-gray-300 py-2" value={search} type="text" id="search" name="search" placeholder="Search posts..." />
            {cardContents.filter(post => (post.meta.title.toLowerCase() + post.meta.tags.join(" ").toLowerCase()).includes(search.toLowerCase())).map(post => (
                <PostCard key={post.meta.id} {...post.meta} />
            ))}
        </div>
    );
}

export default CardList;
