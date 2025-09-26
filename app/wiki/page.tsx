import WikiPage from "./[...wikiPath]/page";

async function WikiHomePage() {
    const params = { wikiPath: [] as string[] };

    return <WikiPage params={params} />;
}

export default WikiHomePage;