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

const Valgomat = () => {
    const counter = useSelector((state: State) => state.questionCounter);
    const state = useSelector((state: State) => state.likertAnswer);
    const algoArray = useSelector((state: State) => state.algorithm);

    function checkDepartment() {
        let oldDifference = 1000; // Big number so that the first new difference is always below the default
        let difference = 0;
        let chosenDepartment = null;
        for (let dep of departments) {
            difference = 0;
            difference += Math.abs(dep.social - algoArray[0].points);
            difference += Math.abs(dep.creative - algoArray[1].points);
            difference += Math.abs(dep.practical - algoArray[2].points);
            if (difference < oldDifference) {
                chosenDepartment = dep.name;
                oldDifference = difference;
            }
        }
        return chosenDepartment;
    }
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
                    <h1>{state[questions.questionNumber-1]}</h1>
                    <Questions questionNumber={questions.questionNumber} questionTxt={questions.questionTxt}/>
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
                <h1> {checkDepartment() }</h1>
            <Result/>
            </>
        )
    }
    return null;
};



export default Valgomat;