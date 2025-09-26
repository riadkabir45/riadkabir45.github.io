import { scanMarkdowns } from '@/utils/mdFiles';
import { randomUUID } from 'crypto';
import Link from 'next/link';
import React from 'react';
import { ReactElement } from 'react';
import { type MarkdownPost } from "@/utils/mdFiles";
import SwitchLink from './SwitchLink';


const wikiMD = scanMarkdowns('wiki', true);
const posts = wikiMD.getAllPosts();

interface TreeContentProps {
    paths: string[];
    className?: string;
}

function titleCase(text: string){
    const parts = text.split('-_');
    const upperParts = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1));
    return upperParts.join(' ');
}

function findMetaData(path: string) {
    const post = posts.find(p => {
        const compPath = p.filePath.replace(process.cwd(), '');
        const [landCrit, childCrit] = [ path + (path.endsWith('/') ? '' : '/') + 'page.md', path + '.md'];
        return compPath === landCrit || compPath === childCrit;
    });

    
    return post;
}

function recursiveTable(content: Record<string, any>, parent = "/wiki/", level = 0) {

    const treeLine = "-";
    
    // Define specific padding classes that Tailwind will include
    const getPaddingClass = (level: number) => {
        const paddingClasses = [
            'pl-0',   // level 0
            'pl-4',   // level 1
            'pl-8',   // level 2
            'pl-12',  // level 3
            'pl-16',  // level 4
            'pl-20',  // level 5
            'pl-24',  // level 6
        ];
        return paddingClasses[Math.min(level, paddingClasses.length - 1)] || 'pl-24';
    };

    findMetaData(parent);

    return (
        <>
            {Object.entries(content).map(([key, value]) => (
                <div key={key}> 
                    <SwitchLink 
                        className={`block py-1 px-2 ${findMetaData(`${parent}${key}`) !== undefined ? 'hover:bg-gray-100 dark:hover:bg-gray-800' : ''} rounded ${getPaddingClass(level)}`}
                        state={findMetaData(`${parent}${key}`) !== undefined}
                        href={`${parent}${key === '' ? '' : key}`}
                    >
                        { key === '' ? 'Wiki' : findMetaData(`${parent}${key}`)?.meta.title || titleCase(key)}
                    </SwitchLink>
                    {value !== null && typeof value === 'object' ? recursiveTable(value, `${parent}${key}/`, level + 1) : null}
                </div>
            ))}
        </>
    );
}

function TreeContent({ paths, className = "" }: TreeContentProps) {

    const treePath: Record<string, any> = {};

    for (const p of paths) {
        const parts = p.split('/');
        let current: any = treePath;

        for (const part of parts) {
            if (!current[part]) {
                if(part === parts[parts.length - 1])
                    current[part] = null;
                else
                    current[part] = {};
            }
            current = current[part];
        }
    }

    return (
        <div className={`mx-auto ${className}`}>
            <div className='sticky top-8 py-8'>
                <h2>Wiki Navigation</h2>
                <nav className='my-5 flex flex-col'>
                    {recursiveTable(treePath)}
                </nav>
            </div>
      </div>
    );
}

export default TreeContent;