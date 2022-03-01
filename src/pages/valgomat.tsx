import { Navbar } from "../components/molecule/navbar";
import { ProgressBar } from "../components/atoms/progressbar";
import { Questions } from "../components/atoms/questions";
import { ValgomatButton } from "../components/atoms/valgomatButton";
import {LikertScale} from "../components/atoms/likertScale";
import {AlertDialog} from "../components/atoms/alertDialogFunction";
import * as React from "react";
import {actionCreators, State} from "../redux";
import {useDispatch, useSelector} from "react-redux";
import {Result} from "../components/organisms/result";
import {bindActionCreators} from "redux";

const Valgomat = () => {
    const counter = useSelector((state: State) => state.questionCounter);
    const state = useSelector((state: State) => state.likertAnswer);
    const algoArray = useSelector((state: State) => state.algorithm);
    const dispatch = useDispatch();
    const { social, creative, practical } = bindActionCreators(actionCreators, dispatch);

    const QuestionsData = [
        {
            questionNumber: 1,
            questionTxt: "Dette er spørsmål 1? SOSIAL",
            progress: 25,
            characteristic: social
        },
        {
            questionNumber: 2,
            questionTxt: "Dette er spørsmål 2? KREATIV",
            progress: 50,
            characteristic: creative
        },
        {
            questionNumber: 3,
            questionTxt: "Dette er spørsmål 3? PRAKTISK",
            progress: 75,
            characteristic: practical
        },
        {
            questionNumber: 4,
            questionTxt: "Dette er spørsmål 4? SOSIAL",
            progress: 100,
            characteristic: social
        },
    ];

    const departments = [
        {
            name: 'S&T',
            social: 9,
            creative: 3,
            practical: 5
        },
        {
            name: 'Technology',
            social: 3,
            creative: 5,
            practical: 7
        },
        {
            name: 'Interactive',
            social: 1,
            creative: 7,
            practical: 3
        },
    ];

    function checkDepartment() {
        let oldDifference = 1000;
        let difference = 0;
        let chosenDepartment = null;
        for (let dep of departments) {
            difference = 0;
            if(dep.social == algoArray[0].points) {
                difference += 0;
            }
            else {
                difference += 1;
            }
            if(dep.creative == algoArray[1].points) {
                difference += 0;
            }
            else {
                difference += 1;
            }
            if(dep.practical == algoArray[2].points) {
                difference += 0;
            }
            else {
                difference += 1;
            }
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

    for (let questions of QuestionsData) {
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
    if (counter === QuestionsData.length+1) {
        return (
            <>
                <h1> {checkDepartment() }</h1>
            <Result/>
            </>
        )
    }
    return null;
};



export default Valgomat;