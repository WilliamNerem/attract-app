import React from "react";

interface resultTextProps {
    result: string
}

export const ResultText = ({result}: resultTextProps) => {

    if (result === 'Strategy & Consulting') {
        return(
            <h2 className='resultText'>Du er strategen!</h2>
        );
    }
    else if (result === 'Technology') {
        return(
            <h2 className='resultText'>Du er utvikleren!</h2>
        );
    }
    else if (result === 'Interactive') {
        return(
            <h2 className='resultText'>Du er designeren!</h2>
        );
    }

    return(
        <h2 className='resultText'>Du er unik!!</h2>
    );
};