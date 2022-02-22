import React, {useState} from "react";
import { HamburgerMenu } from "./hamburger";
import Acc_Logo_Black_Purple_RGB from '../../images/Acc_Logo_Black_Purple_RGB.png'
import '../../styles/navbar.style.css'
import Backdrop from '@mui/material/Backdrop';

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };


    return(
        <div>
            <div className='nav'>
                <img className='logo' src={Acc_Logo_Black_Purple_RGB} alt='logo'/>
                <HamburgerMenu onClick={handleToggle}/>
            </div>
            <Backdrop
                sx={{ zIndex: 1 }}
                open={open}
            />
        </div>
    );
};