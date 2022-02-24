import React from "react";

interface singlePalletProps {
    id: string
    placement: string
    percent: number
}

export const SinglePallet = ({id, placement, percent}: singlePalletProps) => {


    return(
        <div id={id} className='singlePallet'>
            <h3 className='singlePalletPlacement'>{placement}</h3>
            <div className='singlePalletDiv' style={{height: percent+'px'}}/>
            <p className='percent'>{percent+'%'}</p>
        </div>
    );
};