import React from 'react';
import './hamburgerItem.style.css'
import { Link } from "react-router-dom";

interface hamburgerItemProps {
    itemText: string
    link: string
}

export const HamburgerItem = ({
    itemText,
    link
}: hamburgerItemProps) => {
    return (
        <Link to={link} className='hamburgerItemLink' >{itemText}</Link>
    );
};