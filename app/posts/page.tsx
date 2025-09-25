import CardList from "@/components/CardList";
import Page from "@/components/Page";
import PostCard from "@/components/PostCard";
import { scanMarkdowns } from "@/utils/mdFiles";
import React from "react";

function Posts() {
    const mdFiles = scanMarkdowns('posts');
    //const [search, setSearch] = React.useState("");

    return (
        <Page className="container flex flex-col items-center">
            <CardList cardContents={mdFiles.getAllPosts()} />
        </Page>
    );
}

export default Posts;