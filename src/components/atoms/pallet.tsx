import React from "react";
import {SinglePallet} from "./singlePallet";
import { departments } from '../../departments'

interface palletProps {
    differenceArray: number[]
}


export const Pallet = ({differenceArray}: palletProps) => {
    const strat = differenceArray[0];
    const tech = differenceArray[1];
    const inter = differenceArray[2];
    const sortedArr = differenceArray.sort((a, b) => a - b);
    const depArr = [sortedArr.indexOf(strat), sortedArr.indexOf(tech), sortedArr.indexOf(inter)];
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
    );
};