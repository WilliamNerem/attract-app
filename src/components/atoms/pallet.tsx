import React from "react";
import {SinglePallet} from "./singlePallet";
import { departments } from '../../departments'

interface palletProps {
    totalPointsArray: number[]
}


export const Pallet = ({totalPointsArray}: palletProps) => { // Strat is 0, tech is 1, inter is 2
    const sortedArr = totalPointsArray.slice().sort((a, b) => b - a).slice(0,3);
    console.log(sortedArr[0]);
    const maximumPoints = 11;
    if(sortedArr[1] != sortedArr[2]) {
        const depArr = [sortedArr.indexOf(totalPointsArray[0]), sortedArr.indexOf(totalPointsArray[1]), sortedArr.indexOf(totalPointsArray[2])]; //Index of strat, tech and inter

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
    }
    else {
        const depArr = []; // Only consists of indexes sortedArr[1] and sortedArr[2]
        let firstPlaceIndex = 0;
        for (let i = 0; i < totalPointsArray.length; i++) {
            if (totalPointsArray[i] !== sortedArr[0]) {
                depArr.push(i);
            } else {
                firstPlaceIndex = i;
            }
        }
        return (
           <div className='pallet'>
                <SinglePallet id='second' placement={departments[depArr[0]].name}
                              percent={(sortedArr[depArr[1]] / maximumPoints) * 100}/>
                <SinglePallet id='first' placement={departments[firstPlaceIndex].name}
                              percent={(sortedArr[0] / maximumPoints) * 100}/>
               <SinglePallet id='third' placement={departments[depArr[1]].name}
                             percent={(sortedArr[depArr[1]] / maximumPoints) * 100}/>
            </div>
        )
    }
};