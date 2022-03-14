import React from 'react';
import { HamburgerItem } from "../atoms/hamburgerItem";
import Hamburger from 'hamburger-react'
import '../../styles/navbar.style.css'
import AnimateHeight from "react-animate-height";

interface hamburgerProps {
    hamburgerToggled: boolean
    setHamburgerToggled: React.Dispatch<React.SetStateAction<boolean>>
    height: number
}

export const HamburgerMenu = ({
    hamburgerToggled,
    setHamburgerToggled,
    height
}: hamburgerProps) => {
    return(
        <div className='hamburger'>
            <Hamburger toggled={hamburgerToggled} onToggle={() => {
                setHamburgerToggled(!hamburgerToggled);
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