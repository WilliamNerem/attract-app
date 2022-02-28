import React from 'react';
import '../../styles/navbar.style.css'
import {Link, useLocation} from "react-router-dom";

interface hamburgerItemProps {
    itemText: string
    link: string
}

export const HamburgerItem = ({
    itemText,
    link
}: hamburgerItemProps) => {
    const location = useLocation();
    let className = 'hamburgerItemLink';

    if (location.pathname === link){
        className = 'hamburgerItemLinkActive'
    }

    return (
        <Link to={link} className={className} >{itemText}</Link>
    );
};