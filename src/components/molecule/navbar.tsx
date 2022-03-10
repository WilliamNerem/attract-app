import React, {useState} from "react";
import { HamburgerMenu } from "./hamburger";
import Acc_Logo_Black_Purple_RGB from '../../images/Acc_Logo_Black_Purple_RGB.png'
import '../../styles/navbar.style.css'
import Backdrop from '@mui/material/Backdrop';
import {AlertDialog} from "../atoms/alertDialogFunction";
import {useSelector} from "react-redux";
import {State} from "../../redux/reducers";

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const counter = useSelector((state: State) => state.questionCounter);
    const handleToggle = () => {
        setOpen(!open);
    };

    const handleClick = () => {

    }


    return(
        <div className='navMargin'>
            <div className='nav'>
                <a onClick={handleClick}><img className='logo' src={Acc_Logo_Black_Purple_RGB} alt='logo'/></a>
                <HamburgerMenu onClick={handleToggle}/>
            </div>
            <Backdrop
                sx={{ zIndex: 1 }}
                open={open}
            />
        </div>
    );
};