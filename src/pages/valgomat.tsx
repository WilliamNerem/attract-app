import { Navbar } from "../components/molecule/navbar";
import { ProgressBar } from "../components/atoms/progressbar";
import { Questions } from "../components/atoms/questions";
import { ValgomatButton } from "../components/atoms/valgomatButton";
import { LikertScale } from "../components/atoms/likertScale";
import { AlertDialog } from "../components/atoms/alertDialogFunction";
import * as React from "react";
import { State } from "../redux";
import { useSelector } from "react-redux";
import { Result } from "../components/organisms/result";
import { QuestionsData } from '../questions'
import { departments } from '../departments'
import '../styles/valgomat.style.css';

const Valgomat = () => {
    const counter = useSelector((state: State) => state.questionCounter);
    const algoArray = useSelector((state: State) => state.algorithm);
    const userDifferences: number[] = [];

    const checkDepartment = () => {
        let difference = 0;
        for (let dep of departments) {
            difference = 0;
            difference += Math.abs(dep.social - algoArray[0].points);
            difference += Math.abs(dep.creative - algoArray[1].points);
            difference += Math.abs(dep.practical - algoArray[2].points);
            userDifferences.push(difference);
        }
        console.log("Dette er valgomat siden"+userDifferences);
    }
    checkDepartment();
    if (counter === 0) {
        return (
            <AlertDialog/>
        )
    }


    for (let questions of QuestionsData()) {
        if (counter === questions.questionNumber) {
            return (
                <>
                    <Navbar/>
                    <h1 className='questionNumber'>Spørsmål {counter}</h1>
                    <Questions questionTxt={questions.questionTxt}/>
                    <LikertScale questionNumber={questions.questionNumber} characteristic={questions.characteristic}/>
                    <ValgomatButton/>
                    <ProgressBar completed={questions.progress}/>
                </>
            )
        }
    }
    if (counter === QuestionsData().length+1) {
        return (
            <>
                <br/><br/>
            <Result differenceArray={userDifferences}/>
            </>
        )
    }
    return null;
};



export default Valgomat;