import React from 'react';
import {ValgomatButton} from "../atoms/valgomatButton";
import {ProgressBar} from "../atoms/progressbar";
import '../../styles/valgomatFooter.style.css'

interface valgomatFooterProps {
    completed: number
    nextTransition: Function
}

export const ValgomatFooter = (
    {completed, nextTransition}: valgomatFooterProps
) => {
    return (
        <div className="valgomatFooter">
            <ValgomatButton nextTransition={nextTransition}/>
            <ProgressBar completed={completed}/>
        </div>
    );


};
