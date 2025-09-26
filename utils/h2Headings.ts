const getH2Headings = (content: string) => {
    const h2Regex = /^## (.+)$/gm;
    const headings = [];
    let match;

    while ((match = h2Regex.exec(content)) !== null) {
        const text = match[1];
        const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
        headings.push({ text, id });
    }

    return headings;
};

export default getH2Headings;