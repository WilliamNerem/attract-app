import React, {useEffect, useState} from "react";
import { HamburgerMenu } from "./hamburger";
import Acc_Logo_Black_Purple_RGB from '../../images/Acc_Logo_Black_Purple_RGB.png'
import '../../styles/navbar.style.css'
import Backdrop from '@mui/material/Backdrop';

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const [hamburgerToggled, setHamburgerToggled] = useState(false);

    useEffect(() => {
        if (hamburgerToggled) {
            setHeight(150);
            setOpen(true);
        } else {
            setHeight(0);
            setOpen(false);
        }
    }, [hamburgerToggled]);

    return(
        <div className='navMargin'>
            <div className='nav'>
                <a href={'/'}><img className='logo' src={Acc_Logo_Black_Purple_RGB} alt='logo'/></a>
                <HamburgerMenu hamburgerToggled={hamburgerToggled} setHamburgerToggled={setHamburgerToggled} height={height}/>
            </div>
            <Backdrop
                sx={{ zIndex: 1 }}
                open={open}
                onClick={() => {
                    setOpen(false);
                    setHamburgerToggled(!hamburgerToggled);
                }}
            />
        </div>
    );
};