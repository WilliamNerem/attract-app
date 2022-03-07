import React from 'react';
import '../../styles/valgomat.style.css'


interface DynamicQuestionProps {
    firstDep: number;
    secondDep: number;
}

export const DynamicQuestion = ({firstDep, secondDep}: DynamicQuestionProps) => {
    if (firstDep + secondDep == 3) { //Then we know it's tech vs interactive
        return (
            <div className={'dynamicQuestion'}>
                <p>TECH OR INTERACTIVE?</p>
            </div>
        )
    } else if (firstDep + secondDep == 2) {
        return (
            <div className={'dynamicQuestion'}>
                <p>STRAT OR INTERACTIVE?</p>
            </div>
        )
    } else if (firstDep + secondDep == 2) {
        return (
            <div className={'dynamicQuestion'}>
                <p>STRAT OR TECH?</p>
            </div>
        )
    }
    return null;
}
