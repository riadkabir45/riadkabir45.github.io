import { randomUUID } from "crypto";
import Link from "next/link";

function TableContent( { content, className }: { content: { id: string; text: string }[]; className?: string } ) {
    return (
        <div className={`${className}`}>
        <div className="sticky top-8 py-8">
          <h3 className="font-semibold text-lg mb-4 text-neutral-50">Table of Contents</h3>
          <nav className="space-y-2">
            {content.map(heading => (
              <Link 
                key={heading.id + randomUUID()} 
                href={`#${heading.id}`}
                className="block text-sm text-gray-600 hover:text-blue-600 hover:underline py-1 border-l-2 border-transparent hover:border-blue-600 pl-3 transition-colors"
              >
                {heading.text}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    );
}

export default TableContent;