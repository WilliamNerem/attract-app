import React from "react";
import {SinglePallet} from "./singlePallet";

export const Pallet = () => {
    return(
        <div className='pallet'>
            <SinglePallet id='second' placement='2' percent={60}/>
            <SinglePallet id='first' placement='1' percent={80}/>
            <SinglePallet id='third' placement='3' percent={20}/>
        </div>
    );
};