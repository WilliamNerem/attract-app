import React, {useEffect, useState} from "react";
import { HamburgerMenu } from "./hamburger";
import Acc_Logo_Black_Purple_RGB from '../../images/Acc_Logo_Black_Purple_RGB.png'
import '../../styles/navbar.style.css'
import Backdrop from '@mui/material/Backdrop';
import {useDispatch, useSelector} from "react-redux";
import {State} from "../../redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../redux";
import {useNavigate} from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const inProgress = useSelector((state: State) => state.valgomatInProgress);
    const { showAlertDialog, isInfoClicked } = bindActionCreators(actionCreators, dispatch);
    const [open, setOpen] = useState(false);
    const [height, setHeight] = useState<string|number>(0);
    const [hamburgerToggled, setHamburgerToggled] = useState(false);

    const handleClick = (isInfo: boolean) => {
        if (inProgress) {
            showAlertDialog(true);
            isInfoClicked(isInfo);
        } else {
            isInfo ? navigate('/info') : navigate('/');
        }
    };

    useEffect(() => {
        if (hamburgerToggled) {
            setHeight('auto');
            setOpen(true);
        } else {
            setHeight(0);
            setOpen(false);
        }
    }, [hamburgerToggled]);

    return(
        <div className='navMargin'>
            <div className='nav'>
                <a className={'navbar-item-logo'} onClick={() => handleClick(false)}><img className='logo' src={Acc_Logo_Black_Purple_RGB} alt='logo'/></a>
                <a className={'navbar-item'} onClick={() => handleClick(false)}>Hjem</a>
                <a className={'navbar-item'} onClick={() => handleClick(true)}>Informasjon</a>
                <a className={'navbar-item'} href={'/valgomat'}>Valgomat</a>
                <HamburgerMenu hamburgerToggled={hamburgerToggled} setHamburgerToggled={setHamburgerToggled} height={height}/>
            </div>
            <Backdrop
                sx={{ zIndex: 9 }}
                open={open}
                onClick={() => {
                    setOpen(false);
                    setHamburgerToggled(!hamburgerToggled);
                }}
            />
        </div>
    );
};