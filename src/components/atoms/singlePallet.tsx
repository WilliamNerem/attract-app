import React, {useState} from "react";

interface singlePalletProps {
    id: string
    placement: string
    percent: number
}

export const SinglePallet = ({id, placement, percent}: singlePalletProps) => {
    const [animateHeight, setAnimateHeight] = useState(false);
    percent = Math.round(percent);
    let palletPlace;
    let palletPlacementHeight = '';

    const startAnimation = () => {
        setAnimateHeight(true);
    };

    if (!animateHeight){
        setTimeout((startAnimation), 1);
    } else {
        if(id === 'first') {
            palletPlace = 1;
            palletPlacementHeight = 'palletPlacementHeightFirst';
        } else if(id === 'second') {
            palletPlace = 2;
            palletPlacementHeight = 'palletPlacementHeightSecond';
        }
        else if(id === 'third') {
            palletPlace = 3;
            palletPlacementHeight = 'palletPlacementHeightThird';
        }
    }
    return(
        <div id={id} className='singlePallet'>
            <h3 className='singlePalletPlacement nonHoverPlacement'>{placement}</h3>
            <div className={'palletPlacement ' + palletPlacementHeight}>{palletPlace}</div>
            <h4 className='percent'>{percent+'%'}</h4>
        </div>
    );
};