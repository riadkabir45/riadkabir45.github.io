export default function Nav() {
    return (
        <>

            <nav className="container mx-auto py-4 px-4">
                <div className="flex items-center justify-between w-full">
                    <a href="/" className="hover:text-gray-500"><i className="nf nf-md-shield_sword text-3xl" /></a>
                    <ul className="flex space-x-4 text-xl">
                        <li><a href="/about" className="hover:text-gray-500">Posts</a></li>
                        <li><a href="/contact" className="hover:text-gray-500">Tags</a></li>
                        <li><a href="/contact" className="hover:text-gray-500">Contact</a></li>
                        <li>|</li>
                        <li><a href="/search" className="hover:text-gray-500"><i className="nf nf-fa-search" /></a></li>
                        <li><a href="/search" className="hover:text-gray-500"><i className="nf nf-md-brightness_4" /></a></li>
                    </ul>
                </div>
            </nav>
            <hr />
        </>
    );
}