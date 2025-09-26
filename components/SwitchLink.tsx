import Link from "next/link";
import { ReactNode } from "react";
import React from 'react'; // Make sure React is imported for its types

type AnchorProps = React.ComponentPropsWithoutRef<'a'>;
type SpanProps = React.ComponentPropsWithoutRef<'span'>;

interface SwitchLinkProps extends Omit<AnchorProps & SpanProps, 'href' | 'children' | 'className'> {
    state: boolean;
    href: string;
    children: ReactNode;
    className?: string;
}

function SwitchLink({ state, href, children, className, ...rest }: SwitchLinkProps) {

    if (state)
        return (
            <Link href={href} {...rest} className={className}>
                {children}
            </Link>
        );
    else
        return (
            <span {...rest} className={className}>
                {children}
            </span>
        );
}

export default SwitchLink;