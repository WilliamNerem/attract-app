import React from "react";
import {SinglePallet} from "./singlePallet";
import { departments } from '../../departments'

interface palletProps {
    differenceArray: number[]
}


export const Pallet = ({differenceArray}: palletProps) => { // Strat is 0, tech is 1, inter is 2
    const sortedArr = differenceArray.slice().sort((a, b) => a - b).slice(0,3);
    if(sortedArr[1] != sortedArr[2]) {
        const depArr = [sortedArr.indexOf(differenceArray[0]), sortedArr.indexOf(differenceArray[1]), sortedArr.indexOf(differenceArray[2])];
        const placement = (position: number) => {
            return departments[depArr.indexOf(position)].name;
        }
        const percent = (position: number) => {
            const possibleDifference = departments[depArr.indexOf(position)].possibleDifference;
            const difference = sortedArr[position];
            return (Math.abs(possibleDifference - difference)) / possibleDifference * 100
        }
        return(
            <div className='pallet'>
                <SinglePallet id='second' placement={placement(1)} percent={percent(1)} />
                <SinglePallet id='first' placement={placement(0)} percent={percent(0)} />
                <SinglePallet id='third' placement={placement(2)} percent={percent(2)} />
            </div>
        )
    }
    else {
        return (
            <div className='pallet'>
                <SinglePallet id='second' placement={departments[sortedArr.indexOf(sortedArr[1])].name}
                              percent={(Math.abs(departments[sortedArr.indexOf(sortedArr[1])].possibleDifference) - sortedArr[1]) / departments[sortedArr.indexOf(sortedArr[1])].possibleDifference * 100}/>
                <SinglePallet id='first' placement={departments[sortedArr.indexOf(sortedArr[0])].name}
                              percent={(Math.abs(departments[sortedArr.indexOf(sortedArr[0])].possibleDifference) - sortedArr[0]) / departments[sortedArr.indexOf(sortedArr[0])].possibleDifference * 100}/>
                <SinglePallet id='third' placement={departments[sortedArr.indexOf(sortedArr[2])].name}
                              percent={(Math.abs(departments[sortedArr.indexOf(sortedArr[2])].possibleDifference) - sortedArr[2]) / departments[sortedArr.indexOf(sortedArr[2])].possibleDifference * 100}/>
            </div>
        )
    }
};