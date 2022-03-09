import React from "react";
import {SinglePallet} from "./singlePallet";
import { departments } from '../../departments'

interface palletProps {
    totalPointsArray: number[]
}


export const Pallet = ({totalPointsArray}: palletProps) => { // Strat is 0, tech is 1, inter is 2
    const sortedArr = totalPointsArray.slice().sort((a, b) => a - b).slice(0,3);
    if(sortedArr[0] != sortedArr[1]) {
        const depArr = [sortedArr.indexOf(totalPointsArray[0]), sortedArr.indexOf(totalPointsArray[1]), sortedArr.indexOf(totalPointsArray[2])];

        const placement = (position: number) => {
            return departments[depArr.indexOf(position)].name;
        };

        const percent = (position: number) => {
            const difference = sortedArr[position];
            return (difference / 11) * 100;
        };
        return(
            <div className='pallet'>
                <SinglePallet id='second' placement={placement(1)} percent={percent(1)} />
                <SinglePallet id='first' placement={placement(2)} percent={percent(2)} />
                <SinglePallet id='third' placement={placement(0)} percent={percent(0)} />
            </div>
        )
    }
    else {
        return (
            <div className='pallet'>
                <SinglePallet id='second' placement={departments[sortedArr.indexOf(sortedArr[1])].name}
                              percent={(sortedArr[1] / 11) * 100}/>
                <SinglePallet id='first' placement={departments[sortedArr.indexOf(sortedArr[2])].name}
                              percent={(sortedArr[3] / 11) * 100}/>
                <SinglePallet id='third' placement={departments[sortedArr.indexOf(sortedArr[0])].name}
                              percent={(sortedArr[0] / 11) * 100}/>
            </div>
        )
    }
};