import React from 'react';
import '../../styles/valgomatButton.style.css'
import {useSelector} from "react-redux";
import {State} from "../../redux/reducers";

interface valgomatButtonProps {
    nextTransition: Function
}

export const ValgomatButton = ({nextTransition}: valgomatButtonProps) => {
    const counter = useSelector((state: State) => state.questionCounter);
    let lastText = 'Forrige';
    if (counter === 1){
        lastText = 'Hjem';
    }

    const next = () => {
        nextTransition(true);
    };

    const last = () => {
        nextTransition(false);
    };

    return (
        <div className="valgomatButtons">
            <button className='valgomatButton' onClick={last}>{lastText}</button>
            <button className='valgomatButton' onClick={next}>Neste</button>
        </div>
    );


};
