import React, {useState} from 'react';
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
    onClick: any
}

export const HamburgerMenu = ({
    onClick
}: hamburgerProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const inProgress = useSelector((state: State) => state.valgomatInProgress);
    const { setCounter } = bindActionCreators(actionCreators, dispatch);
    const [height, setHeight] = useState(0);

    const handleClick = () => {
        if (inProgress) {
            setCounter(0);
        } else {
            navigate('/');
        }
    }

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
                <HamburgerItem itemText={'Home'} link={inProgress ? '' : '/'} onClick={handleClick}/>
                <HamburgerItem itemText={'Valgomat'} link={'/valgomat'}/>
                <HamburgerItem itemText={'Informasjon'} link={'/info'}/>
            </AnimateHeight>

        </div>
    );
};