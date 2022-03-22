import React from "react";
import {SinglePallet} from "./singlePallet";
import { departments } from '../../departments'

interface palletProps {
    totalPointsArray: number[]
}


export const Pallet = ({totalPointsArray}: palletProps) => { // Strat is 0, tech is 1, inter is 2
    const sortedArr = totalPointsArray.slice().sort((a, b) => b - a).slice(0,3);
    const maximumPoints = 11;
    let depArr: number[] = [] ;
    depArr = [sortedArr.indexOf(totalPointsArray[0]), sortedArr.indexOf(totalPointsArray[1]), sortedArr.indexOf(totalPointsArray[2])]; //Index of strat, tech and inter

    if(sortedArr[1] === sortedArr[2]) {
        depArr[totalPointsArray.lastIndexOf(sortedArr[1])] = sortedArr.lastIndexOf(sortedArr[1]); // Differentiate indexes of the same value
    }

    const placement = (position: number) => {
        return departments[depArr.indexOf(position)].name;
    };

    const percent = (position: number) => {
        const difference = sortedArr[position];
        return (difference / maximumPoints) * 100;
    };

    return(
        <div className='pallet'>
            <SinglePallet id='second' placement={placement(1)} percent={percent(1)} />
            <SinglePallet id='first' placement={placement(0)} percent={percent(0)} />
            <SinglePallet id='third' placement={placement(2)} percent={percent(2)} />
        </div>
    )
};