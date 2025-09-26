"use client";
import React from "react";
import Link from "next/link";

export default function Nav() {
    const [searchState, setSearchState] = React.useState(false);

    function toggleSearch() {
        setSearchState(!searchState);
        console.log(searchState);

    }

    return (
        <div className="shadow-md">
            <nav className="container mx-auto py-4 px-4">
                <div className="flex items-center justify-between w-full">
                    <Link href="/" className="hover:text-gray-500"><i className="nf nf-md-shield_sword text-3xl" /></Link>
                    <ul className="flex space-x-4 text-xl">
                        <li className="overflow-clip flex">
                            <ul className="flex space-x-4">
                                <li><Link href="/posts" className="hover:text-gray-500">Posts</Link></li>
                                <li><Link href="/contact" className="hover:text-gray-500">Contact</Link></li>
                            </ul>
                        </li>
                        <li>|</li>
                        <li><Link href="/posts" className="hover:text-gray-500"><i className="nf nf-fa-search" /></Link></li>
                        <li><button onClick={() => setSearchState(!searchState)} className="hover:text-gray-500"><i className="nf nf-md-brightness_4" /></button></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}