import { Navbar } from "../components/molecule/navbar";
import { ProgressBar } from "../components/atoms/progressbar";
import { Questions } from "../components/atoms/questions";
import { ValgomatButton } from "../components/atoms/valgomatButton";
import {useState} from "react";
import {LikertScale} from "../components/atoms/likertScale";
import {AlertDialog} from "../components/atoms/alertDialogFunction";
import * as React from "react";
import {State, actionCreators} from "../redux";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";


const Valgomat = () => {
    const counter = useSelector((state: State) => state.questionCounter);


    if(counter == 0) {
            return (
            <AlertDialog />
        )
        }

        if(counter == 1) {
            return (
                <>
                    <Navbar/>
                    <Questions questionNumber={1} questionTxt={"Dette er et kjempegodt spm!"}/>
                    <LikertScale storageKey={"Q1"}/>
                    <ValgomatButton/>
                    <ProgressBar completed={50}/>
                </>
            );
        } else {
            return (
                <>
                    <Navbar/>
                    <Questions questionNumber={2} questionTxt={"Dette er et kjempegodt spm også!!!"}/>
                    <LikertScale storageKey={"Q2"}/>
                    <ValgomatButton/>
                    <ProgressBar completed={100}/>
                </>
            );
        }}



export default Valgomat;