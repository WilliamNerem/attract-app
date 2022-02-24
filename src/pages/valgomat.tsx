import { Navbar } from "../components/molecule/navbar";
import { ProgressBar } from "../components/atoms/progressbar";
import { Questions } from "../components/atoms/questions";
import { ValgomatButton } from "../components/atoms/valgomatButton";
import {useState} from "react";
import {LikertScale} from "../components/atoms/likertScale";
import {AlertDialog} from "../components/atoms/alertDialogFunction";
import * as React from "react";


const Valgomat = () => {
    const [counter, setCounter] = useState(1);

    const increaseCounter = () => {
        setCounter(counter+1);
    }
    const decreaseCounter = () => {
        setCounter(counter-1);
    }
        if(counter == 0) {
            return (
                <>
            <AlertDialog increaseCounter={increaseCounter}/>
                </>
        )
        }

        if(counter == 1) {
            return (
                <>
                    <Navbar/>
                    <Questions questionNumber={1} questionTxt={"Dette er et kjempegodt spm!"}/>
                    <LikertScale storageKey={"Q1"}/>
                    <ValgomatButton increaseCounter={increaseCounter} decreaseCounter={decreaseCounter}/>
                    <ProgressBar completed={50}/>
                </>
            );
        } else {
            return (
                <>
                    <Navbar/>
                    <Questions questionNumber={2} questionTxt={"Dette er et kjempegodt spm også!!!"}/>
                    <LikertScale storageKey={"Q2"}/>
                    <ValgomatButton increaseCounter={increaseCounter} decreaseCounter={decreaseCounter}/>
                    <ProgressBar completed={100}/>
                </>
            );
        }}



export default Valgomat;