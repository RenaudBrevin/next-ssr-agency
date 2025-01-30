import React from 'react';
import Link from 'next/link';

const ListItem = ({ itemLabel, itemLink }: { itemLabel: string, itemLink?: string }) => {
    return (
        <li className="border border-gray rounded-full py-2 px-4 bg-lightBlack whitespace-nowrap">
            {itemLink ? (
                <Link href={itemLink} className="project--link flex items-center gap-2">
                    <span className="bg-gold w-2 h-2 rounded-full"></span>
                    {itemLabel}
                </Link>
            ) : (
                <p className="project--link flex items-center gap-2">
                    <span className="bg-gold w-2 h-2 rounded-full"></span>
                    {itemLabel}
                </p>
            )}
        </li>
    );
};

export default ListItem;
