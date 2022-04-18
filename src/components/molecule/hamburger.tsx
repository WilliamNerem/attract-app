import React from 'react';
import { HamburgerItem } from "../atoms/hamburgerItem";
import Hamburger from 'hamburger-react'
import '../../styles/navbar.style.css'
import AnimateHeight from "react-animate-height";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {State} from "../../redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../redux";

interface hamburgerProps {
    hamburgerToggled: boolean
    setHamburgerToggled: React.Dispatch<React.SetStateAction<boolean>>
    height: string | number
}

export const HamburgerMenu = ({
    hamburgerToggled,
    setHamburgerToggled,
    height
}: hamburgerProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const inProgress = useSelector((state: State) => state.valgomatInProgress);
    const { showAlertDialog, isInfoClicked } = bindActionCreators(actionCreators, dispatch);

    const handleClick = (isInfo: boolean) => {
        if (inProgress) {
            showAlertDialog(true);
            isInfoClicked(isInfo);
        } else {
            isInfo ? navigate('/info') : navigate('/');
        }
    };

    return(
        <div className='hamburger' data-testid={'hamburger'}>
            <Hamburger toggled={hamburgerToggled} onToggle={() => {
                setHamburgerToggled(!hamburgerToggled);
            }} />
            <AnimateHeight
                duration={300}
                height={height}
                className='hamburgerItems'
            >
                <HamburgerItem itemText={'Hjem'} link={inProgress ? '' : '/'} onClick={() => handleClick(false)}/>
                <HamburgerItem itemText={'Valgomat'} link={'/valgomat'}/>
                <HamburgerItem itemText={'Informasjon'} link={inProgress ? '' : '/info'} onClick={() => handleClick(true)}/>
            </AnimateHeight>

        </div>
    );
};