import React from "react";

interface singlePalletProps {
    id: string
    placement: string
    percent: number
}

export const SinglePallet = ({id, placement, percent}: singlePalletProps) => {
    percent = Math.round(percent);
    let palletPlace;

    if(id === 'first') {
        palletPlace = 1;
    } else if(id === 'second') {
        palletPlace = 2;
    }
    else if(id === 'third') {
        palletPlace = 3;
    }

    return(
        <div id={id} className='singlePallet'>
            <h3 className='singlePalletPlacement nonHoverPlacement'>{placement}</h3>
            <div className='palletPlacement'>{palletPlace}</div>
            <div className='singlePalletDiv'/>
            <h4 className='percent'>{percent+'%'}</h4>
        </div>
    );
};