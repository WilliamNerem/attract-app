import React, {useState} from "react";
import { HamburgerMenu } from "./hamburger";
import Acc_Logo_Black_Purple_RGB from '../../images/Acc_Logo_Black_Purple_RGB.png'
import '../../styles/navbar.style.css'
import Backdrop from '@mui/material/Backdrop';
import {useDispatch, useSelector} from "react-redux";
import {State} from "../../redux/reducers";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../redux";
import {useNavigate} from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const inProgress = useSelector((state: State) => state.valgomatInProgress);
    const { setCounter } = bindActionCreators(actionCreators, dispatch);
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };

    const handleClick = () => {
        if (inProgress) {
            setCounter(0);
        } else {
            navigate('/');
        }
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