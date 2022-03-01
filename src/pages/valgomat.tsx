import { Navbar } from "../components/molecule/navbar";
import { ProgressBar } from "../components/atoms/progressbar";
import { Questions } from "../components/atoms/questions";
import { ValgomatButton } from "../components/atoms/valgomatButton";
import {LikertScale} from "../components/atoms/likertScale";
import {AlertDialog} from "../components/atoms/alertDialogFunction";
import * as React from "react";
import {State} from "../redux";
import {useSelector} from "react-redux";
import {Result} from "../components/organisms/result";
import {AlgorithmActionType} from '../redux'

export const QuestionsData = [
    {
        questionNumber: 1,
        questionTxt: "Dette er spørsmål 1? SOSIAL",
        progress: 25,
        characteristic: AlgorithmActionType.SOCIAL
    },
    {
        questionNumber: 2,
        questionTxt: "Dette er spørsmål 2? KREATIV",
        progress: 50,
        characteristic: AlgorithmActionType.CREATIVE
    },
    {
        questionNumber: 3,
        questionTxt: "Dette er spørsmål 3? PRAKTISK",
        progress: 75,
        characteristic: AlgorithmActionType.PRACTICAL
    },
    {
        questionNumber: 4,
        questionTxt: "Dette er spørsmål 4? SOSIAL",
        progress: 100,
        characteristic: AlgorithmActionType.SOCIAL
    },
];

const Valgomat = () => {
    const counter = useSelector((state: State) => state.questionCounter);
    const state = useSelector((state: State) => state.likertAnswer);


    if (counter === 0) {
        return (
            <AlertDialog/>
        )
    }

    let char = AlgorithmActionType.PRACTICAL;

    for (let questions of QuestionsData) {
        if (counter === 1){
            char = AlgorithmActionType.SOCIAL
        } else if (counter === 2){
            char = AlgorithmActionType.CREATIVE
        } else if (counter === 3){
            char = AlgorithmActionType.SOCIAL
        }
        if (counter === questions.questionNumber) {
            return (
                <>
                    <Navbar/>
                    <h1>{state[questions.questionNumber-1]}</h1>
                    <Questions questionNumber={questions.questionNumber} questionTxt={questions.questionTxt}/>
                    <LikertScale questionNumber={questions.questionNumber} characteristic={questions.characteristic}/> {/*finn ut hvordan vi gjør dette*/}
                    <ValgomatButton/>
                    <ProgressBar completed={questions.progress}/>
                </>
            )
        }
    }
    if (counter === QuestionsData.length+1) {
        return (
            <Result/>
        )
    }
    return null;
};



export default Valgomat;