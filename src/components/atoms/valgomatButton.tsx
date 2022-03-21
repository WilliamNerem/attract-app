import React from 'react';
import '../../styles/valgomatButton.style.css'

interface valgomatButtonProps {
    nextTransition: Function
}

export const ValgomatButton = ({nextTransition}: valgomatButtonProps) => {



    const next = () => {
        nextTransition(true);
    };

    const last = () => {
        nextTransition(false);
    };

    return (
        <div className="valgomatButtons">
            <button className='valgomatButton' onClick={last}>Forrige</button>
            <button className='valgomatButton' onClick={next}>Neste</button>
        </div>
    );


};
