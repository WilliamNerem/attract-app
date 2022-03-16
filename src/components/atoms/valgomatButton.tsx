import React from 'react';
import '../../styles/valgomatButton.style.css'
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../redux";

export const ValgomatButton = () => {

    const dispatch = useDispatch();
    const { increaseCounter, decreaseCounter } = bindActionCreators(actionCreators, dispatch);

    return (
        <div className="valgomatButtons">
            <button className='valgomatButton' onClick={() => decreaseCounter()}>Forrige</button>
            <button className='valgomatButton' onClick={() => increaseCounter()}>Neste</button>
        </div>
    );


};
