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
import {StatementOrder} from "../components/molecule/statementOrder";
import '../styles/valgomat.style.css';
import {DynamicQuestion} from "../components/atoms/dynamicQuestion";

const Valgomat = () => {
    const counter = useSelector((state: State) => state.questionCounter);
    const algoArray = useSelector((state: State) => state.algorithm);
    const departmentsArray = useSelector((state: State) => state.departmentsAlgorithm);
    const userDifferences: number[] = [];

    const checkDepartment = () => {
        let difference = 0;
        for (let dep of departments) {
            difference = 0;
            difference += Math.abs(dep.social - algoArray[0]);
            difference += Math.abs(dep.creative - algoArray[1]);
            difference += Math.abs(dep.practical - algoArray[2]);
            userDifferences.push(difference);
        }
    };
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
                    {questions.isStatement ? <StatementOrder /> : <LikertScale questionNumber={questions.questionNumber} characteristic={questions.characteristic} isReversed={questions.isReversed}/>}
                    <ValgomatButton/>
                    <ProgressBar completed={questions.progress}/>
                </>
            )
        }
        if (counter === QuestionsData().length + 1) {

            let totalPoints: number[] = [];

            userDifferences.map((differenceCharacteristic, index) => {
                const departmentPoints = departmentsArray[index].points;
                const characteristicPoints = (differenceCharacteristic * (3 / departments[index].possibleDifference));
                totalPoints = [...totalPoints, departmentPoints - characteristicPoints];
            });

            const biggestTwo = totalPoints.slice().sort((a, b) => b - a).slice(0, 2); // Needs to be here if not it will always go to dynamic site
            if (biggestTwo[0] !== biggestTwo[1]) {
                return (
                    <>
                        <br/><br/>
                        <Result differenceArray={totalPoints}/>
                    </>
                )
            } else {
                const firstDep = totalPoints.indexOf(biggestTwo[0]); // Here we know that strat is 0, tech is 1, interactive is 2
                const secondDep = totalPoints.lastIndexOf(biggestTwo[1]); // lastIndexOf starts backwards
                return (
                    <>
                        <Navbar/>
                        <h1 className='questionNumber'>Spørsmål {counter}</h1>
                        <DynamicQuestion firstDep={firstDep} secondDep={secondDep}/>
                        <ValgomatButton/>
                        <ProgressBar completed={100}/>
                    </>
                )
            }
        }
    }

    return null;
};



export default Valgomat;