import React from 'react';


interface ValgomatButtonProps {
    increaseCounter: any,
    decreaseCounter: any
}



export const ValgomatButton = ({
    increaseCounter,
    decreaseCounter
}: ValgomatButtonProps) => {


    return (
        <p>
            <button onClick={decreaseCounter}>Forrige spørsmål</button>
            <button onClick={increaseCounter}>Neste spørsmål</button>
        </p>
    );


};
