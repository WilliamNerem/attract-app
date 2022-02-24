import React from 'react';
import '../../styles/valgomatButton.css'


interface ValgomatButtonProps {
    increaseCounter: any,
    decreaseCounter: any
}



export const ValgomatButton = ({
    increaseCounter,
    decreaseCounter
}: ValgomatButtonProps) => {


    return (
        <div className="valgomatButtons">
            <button id="qBack" onClick={decreaseCounter}>Forrige spørsmål</button>
            <button id="qForward" onClick={increaseCounter}>Neste spørsmål</button>
        </div>
    );


};
