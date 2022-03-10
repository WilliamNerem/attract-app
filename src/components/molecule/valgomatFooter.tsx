import React from 'react';
import {ValgomatButton} from "../atoms/valgomatButton";
import {ProgressBar} from "../atoms/progressbar";
import '../../styles/valgomatFooter.style.css'

interface valgomatFooterProps {
    completed: number
}

export const ValgomatFooter = (
    {completed}: valgomatFooterProps
) => {
    return (
        <div className="valgomatFooter">
            <ValgomatButton/>
            <ProgressBar completed={completed}/>
        </div>
    );


};
