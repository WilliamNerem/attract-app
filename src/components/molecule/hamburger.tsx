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
        <div className='hamburger'>
            <Hamburger onToggle={toggled => {
                if (toggled) {
                    setHeight(150);
                    onClick();
                } else {
                    setHeight(0);
                    onClick();
                }
            }} />
            <AnimateHeight
                duration={300}
                height={height}
                className='hamburgerItems'
            >
                <HamburgerItem itemText={'Home'} link={'/'}/>
                <HamburgerItem itemText={'Valgomat'} link={'/valgomat'}/>
                <HamburgerItem itemText={'Informasjon'} link={'/info'}/>
            </AnimateHeight>

        </div>
    );
};