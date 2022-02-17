import React, {useState} from 'react';
import { HamburgerItem } from "../atoms/hamburgerItem";
import Hamburger from 'hamburger-react'
import './hamburger.style.css'
import AnimateHeight from "react-animate-height";

export const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const handleClick= () => setIsOpen(!isOpen);

    return(
        <div className='hamburger'>
            <Hamburger color='#7500c0' onToggle={toggled => {
                if (toggled) {
                    handleClick();
                    setHeight(150)
                } else {
                    handleClick();
                    setHeight(0)
                }
            }} />
            <AnimateHeight
                duration={300}
                height={height}
            >
                <HamburgerItem itemText={'Link 1'}/>
                <HamburgerItem itemText={'Link 2'}/>
                <HamburgerItem itemText={'Link 3'}/>
            </AnimateHeight>

        </div>
    );
};