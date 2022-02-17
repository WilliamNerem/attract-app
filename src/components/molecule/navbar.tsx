import React from "react";
import { HamburgerMenu } from "./hamburger";
import Acc_Logo_White_Purple_RGB from '../../images/Acc_Logo_White_Purple_RGB.png'
import './navbar.style.css'

export const Navbar = () => {
    return(
        <div className='nav'>
            <img className='logo' src={Acc_Logo_White_Purple_RGB} alt='logo'/>
            <HamburgerMenu/>
        </div>
    );
};