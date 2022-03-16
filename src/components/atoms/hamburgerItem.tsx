import React from 'react';
import '../../styles/navbar.style.css'
import {Link, useLocation} from "react-router-dom";

interface hamburgerItemProps {
    itemText: string
    link: string
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

export const HamburgerItem = ({
    itemText,
    link,
    onClick
}: hamburgerItemProps) => {
    const location = useLocation();
    let className = 'hamburgerItemLink';

    if (location.pathname === link){
        className = 'hamburgerItemLinkActive'
    }

    return (
        <>
            {onClick
                ? <Link onClick={onClick} className={className} to={link} >{itemText}</Link>
                : <Link to={link} className={className} >{itemText}</Link>}

        </>
    );
};