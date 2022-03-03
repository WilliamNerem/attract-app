import React from "react";

interface singlePalletProps {
    id: string
    placement: string
    percent: number
}

export const SinglePallet = ({id, placement, percent}: singlePalletProps) => {
    percent = Math.round(percent * 10) / 10;

    return(
        <div id={id} className='singlePallet'>
            <h3 className='singlePalletPlacement'>{placement}</h3>
            <div className='singlePalletDiv' style={{height: percent+'px'}}/>
            <p className='percent'>{percent+'%'}</p>
        </div>
    );
};