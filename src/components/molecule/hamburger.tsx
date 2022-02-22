import React, {useState} from 'react';
import { HamburgerItem } from "../atoms/hamburgerItem";
import Hamburger from 'hamburger-react'
import './hamburger.style.css'
import AnimateHeight from "react-animate-height";

interface hamburgerProps {
    onClick: any
}

export const HamburgerMenu = ({
    onClick
}: hamburgerProps) => {
    const [height, setHeight] = useState(0);

    return(
        <div className='hamburger' onClick={onClick}>
            <Hamburger onToggle={toggled => {
                if (toggled) {
                    //setIsOpen(true);
                    setHeight(150);
                } else {
                    //setIsOpen(false);
                    setHeight(0)
                }
            }} />
            <AnimateHeight
                duration={300}
                height={height}
                className='hamburgerItems'
            >
                <HamburgerItem itemText={'Link 1'}/>
                <HamburgerItem itemText={'Link 2'}/>
                <HamburgerItem itemText={'Link 3'}/>
            </AnimateHeight>

        </div>
    );
};