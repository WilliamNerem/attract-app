import React from 'react';
import { HamburgerItem } from "../atoms/hamburgerItem";
import Hamburger from 'hamburger-react'
import '../../styles/navbar.style.css'
import AnimateHeight from "react-animate-height";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {State} from "../../redux/reducers";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../redux";

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
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const inProgress = useSelector((state: State) => state.valgomatInProgress);
    const { showAlertDialog } = bindActionCreators(actionCreators, dispatch);

    const handleClick = () => {
        if (inProgress) {
            showAlertDialog(true);
        } else {
            navigate('/');
        }
    }

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
                <HamburgerItem itemText={'Home'} link={inProgress ? '' : '/'} onClick={handleClick}/>
                <HamburgerItem itemText={'Valgomat'} link={'/valgomat'}/>
                <HamburgerItem itemText={'Informasjon'} link={'/info'}/>
            </AnimateHeight>

        </div>
    );
};