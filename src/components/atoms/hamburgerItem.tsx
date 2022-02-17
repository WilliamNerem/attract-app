import React from 'react';
import './hamburgerItem.style.css'

interface hamburgerItemProps {
    itemText: string
}

export const HamburgerItem = ({
    itemText
}: hamburgerItemProps) => {
    return (
        <a href={'/'}>
            {itemText}
        </a>
    );
};