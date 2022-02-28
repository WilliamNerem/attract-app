import React from 'react';
import '../../styles/valgomatButton.css'
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../redux";

export const ValgomatButton = () => {

    const dispatch = useDispatch();
    const { increaseCounter, decreaseCounter } = bindActionCreators(actionCreators, dispatch);

    return (
        <div className="valgomatButtons">
            <button id="qBack" onClick={() => decreaseCounter()}>Forrige spørsmål</button>
            <button id="qForward" onClick={() => increaseCounter()}>Neste spørsmål</button>
        </div>
    );


};
