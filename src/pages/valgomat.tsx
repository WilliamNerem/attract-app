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
import {StatementOrder} from "../components/atoms/statementOrder";

export const QuestionsData = [
    {
        questionNumber: 1,
        questionTxt: "Dette er påstand rekkefølge spørsmål 1?",
        progress: 20,
        isStatement: true,
    },
    {
        questionNumber: 2,
        questionTxt: "Dette er spørsmål 2?",
        progress: 40,
        isStatement: false,
    },
    {
        questionNumber: 3,
        questionTxt: "Dette er spørsmål 3?",
        progress: 60,
        isStatement: false,
    },
    {
        questionNumber: 4,
        questionTxt: "Dette er spørsmål 4?",
        progress: 80,
        isStatement: false,
    },
    {
        questionNumber: 5,
        questionTxt: "Dette er spørsmål 5?",
        progress: 100,
        isStatement: false,
    },
]

const Valgomat = () => {
    const counter = useSelector((state: State) => state.questionCounter);
    const state = useSelector((state: State) => state.likertAnswer);


    if (counter === 0) {
        return (
            <AlertDialog/>
        )
    }

    for (let questions of QuestionsData) {
        if (counter === questions.questionNumber) {

            return (
                <>
                    <Navbar/>
                    <h1>{state[questions.questionNumber-1]}</h1>
                    <Questions questionNumber={questions.questionNumber} questionTxt={questions.questionTxt}/>
                    {questions.isStatement ? <StatementOrder /> : <LikertScale questionNumber={questions.questionNumber}/>}
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
}



export default Valgomat;