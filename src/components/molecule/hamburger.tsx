import React, {useState} from 'react';
import { HamburgerItem } from "../atoms/hamburgerItem";
import Hamburger from 'hamburger-react'
import '../../styles/navbar.style.css'
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
                    setHeight(150);
                } else {
                    setHeight(0)
                }
            }} />
            <AnimateHeight
                duration={300}
                height={height}
                className='hamburgerItems'
            >
                <HamburgerItem itemText={'Home'} link={'/'}/>
                <HamburgerItem itemText={'Valgomat'} link={'/valgomat'}/>
                <HamburgerItem itemText={'NoPage'} link={'/noPage'}/>
            </AnimateHeight>

        </div>
    );
};