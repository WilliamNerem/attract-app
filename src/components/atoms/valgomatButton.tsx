import React, {useState} from 'react';
import '../../styles/valgomatButton.style.css'
import {useSelector} from "react-redux";
import {State} from "../../redux";

interface valgomatButtonProps {
    nextTransition: Function
}

export const ValgomatButton = ({nextTransition}: valgomatButtonProps) => {
    const counter = useSelector((state: State) => state.questionCounter);
    const [disableButton, setDisableButton] = useState(false);
    let lastText = 'Forrige';
    if (counter === 1){
        lastText = 'Hjem';
    }

    const next = () => {
        if (!disableButton){
            nextTransition(true);
            setDisableButton(true);
            setTimeout((() => {
                setDisableButton(false);
            }), 250);
        }
    };

    const last = () => {
        if (!disableButton){
            nextTransition(false);
            setDisableButton(true);
            setTimeout((() => {
                setDisableButton(false);
            }), 250);
        }
    };

    return (
        <div className="valgomatButtons">
            <button className='valgomatButton' onClick={last}>{lastText}</button>
            <button className='valgomatButton' onClick={next}>Neste</button>
        </div>
    );


};
