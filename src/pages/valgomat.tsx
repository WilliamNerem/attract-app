import { Navbar } from "../components/molecule/navbar";
import { ProgressBar } from "../components/atoms/progressbar";
import { Questions } from "../components/atoms/questions";
import { LikertScale } from "../components/atoms/likertScale";
import { AlertDialog } from "../components/atoms/alertDialog";
import * as React from "react";
import { State, actionCreators } from "../redux";
import { useSelector, useDispatch } from "react-redux";
import { QuestionsData } from '../questions'
import { departments } from '../departments'
import {StatementOrder} from "../components/molecule/statementOrder";
import '../styles/valgomat.style.css';
import {DynamicQuestion} from "../components/atoms/dynamicQuestion";
import {ValgomatFooter} from "../components/molecule/valgomatFooter";
import {bindActionCreators} from "redux";
import {useTransition, animated} from 'react-spring';
import {useEffect, useState} from "react";
import {InfoButton} from "../components/molecule/infoButton";
import {ShowExplanation} from "../components/molecule/showExplanation";
import Backdrop from "@mui/material/Backdrop";
import {Result} from "../components/organisms/result";
import {ImageSelection} from "../components/atoms/imageSelection";
import {ResultSubDepartment} from "../components/organisms/resultSubDepartment";

const Valgomat = () => {
    const dispatch = useDispatch();
    const { valgomatIsInProgress, showAlertDialog, increaseCounter, decreaseCounter } = bindActionCreators(actionCreators, dispatch);
    const counter = useSelector((state: State) => state.questionCounter);
    const algoArray = useSelector((state: State) => state.characteristicPoints);
    const departmentsArray = useSelector((state: State) => state.departmentsAlgorithm);
    const isShowAlertDialog = useSelector((state: State) => state.showAlertDialog);
    const imageSelector = useSelector((state: State) => state.imageSelector);
    const [transitionValue, setTransitionValue] = useState({from: ''});
    const [transition, setTransition] = useState(true);
    const [className, setClassname] = useState('initializeTransition');
    const [open, setOpen] = useState(false);
    const [mainResult, setMainResult] = useState(true);
    const userDifferences: number[] = [];
    valgomatIsInProgress(true);

    useEffect(() => {
        if (transition){
            setTransition(!transition);
            setClassname('initializeTransition');
        }
    },[counter]);

    const startTransition = useTransition(transition, {
        from: {transform: "translateX("+transitionValue.from+")"},
        enter: {transform: "translateX(0)"}
    });

    const handleTransition = (
        isNext: boolean
    ) => {
        if (!isNext) {
            setClassname('animatedDivLeaveNext');
            setTransition(!transition);
            setTimeout((decreaseCounter), 200);
            if (!transition){
                setTransitionValue({from: '-100vw'});
            } else {
                setTransitionValue({from: '100vw'});
            }
        } else {
            setClassname('animatedDivLeaveLast');
            setTransition(!transition);
            setTimeout((increaseCounter), 200);
            if (!transition){
                setTransitionValue({from: '100vw'});
            } else {
                setTransitionValue({from: '-100vw'});
            }
        }
    };

    const checkDepartment = () => {
        let difference = 0;

        for (let dep of departments) {
            difference = 0;
            difference += Math.abs(dep.social - (algoArray[0] + imageSelector[3].points));
            difference += Math.abs(dep.creative - (algoArray[1] + imageSelector[4].points));
            difference += Math.abs(dep.practical - (algoArray[2] + imageSelector[5].points));
            userDifferences.push(difference);
        }
    };
    checkDepartment();

    if (counter === 0) {
        showAlertDialog(true);
    }
    if (isShowAlertDialog) {
        return (
            <AlertDialog end={false}/>
        )
    }

    const handleClick = () => {
        setOpen(true);
    };

    for (let questions of QuestionsData()) {
        if (counter === questions.questionNumber) {
            return (
                <div className='bodyValgomat'>
                    <div className={'valgomat'}>
                        <Navbar/>
                        {startTransition((style) =>
                            <animated.div style={style} className={className}>
                                <InfoButton handleClick={handleClick}/>
                                <h1 className='questionNumber'>Spørsmål {counter}</h1>
                                <Questions questionTxt={questions.questionTxt}/>
                                {questions.isStatement ? <StatementOrder /> : questions.isImageSelection ? <ImageSelection pictures={[questions.images[0], questions.images[1], questions.images[2]]} pointAllocater={[questions.allocatePoints[0], questions.allocatePoints[1], questions.allocatePoints[2]]}/> :
                                    <LikertScale questionNumber={questions.questionNumber} characteristic={questions.characteristic} isReversed={questions.isReversed}/>}
                            </animated.div>
                        )}
                    </div>
                    <ValgomatFooter completed={questions.progress} nextTransition={handleTransition}/>
                    <Backdrop
                        open={open}
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <ShowExplanation questionType={questions.questionType}/>
                    </Backdrop>
                </div>
            )
        }

        if (counter === 9 || counter === 10 || counter >= 20) { // Need to be updated if we increase part 1 questions
            const dynamicCounter = QuestionsData().length + 2;
            let totalPoints: number[] = [];
            let departmentPointsArray: number[] = [];

            userDifferences.map((differenceCharacteristic, index) => {
                const departmentPoints = departmentPointsArray[index] = departmentsArray[index].points + imageSelector[index].points;  // Setting departmentPoints and the new array together
                const characteristicPoints = (differenceCharacteristic * (3 / departments[index].possibleDifference));
                totalPoints = [...totalPoints, departmentPoints - characteristicPoints];
            });

            const biggestTwoTotal = totalPoints.slice().sort((a, b) => b - a).slice(0, 2); // Needs to be here if not it will always go to dynamic site
            const biggestTwoDepartmentPoints = departmentPointsArray.slice().sort((a, b) => b - a).slice(0, 2);

            if (counter === dynamicCounter || counter > 20){
                const information = [
                    {
                        title: 'Sub department 1',
                        link: 'https://www.accenture.com/no-en/',
                        infoText: 'Info tekst om sub department 1',
                        infoSubText: 'Noe info subtext om denne'
                    },
                    {
                        title: 'Sub department 2',
                        link: 'https://www.accenture.com/no-en/',
                        infoText: 'Info tekst om sub department 2',
                        infoSubText: 'Noe info subtext om denne'
                    },
                    {
                        title: 'Sub department 3',
                        link: 'https://www.accenture.com/no-en/',
                        infoText: 'Info tekst om sub department 3',
                        infoSubText: 'Noe info subtext om denne'
                    },
                ]

                if (counter >= 21) {setMainResult(false)}

                return (
                    mainResult ? <Result totalPointsArray={totalPoints}/> : <ResultSubDepartment information={information}/>
                )
            }

            if ((biggestTwoDepartmentPoints[0] !== biggestTwoDepartmentPoints[1]) || counter === 20) {   // Check if number 1 has the same points as number 2 department
                return (
                    <>
                        <AlertDialog end={true} totalPointsArray={totalPoints}/>
                    </>
                )
            } else {
                const firstDep = totalPoints.indexOf(biggestTwoTotal[0]); // Here we know that strat is 0, tech is 1, interactive is 2
                const secondDep = totalPoints.lastIndexOf(biggestTwoTotal[1]); // lastIndexOf starts backwards
                return (
                    <>
                        <div className='bodyValgomat'>
                            <Navbar/>
                            {startTransition((style) =>
                                <animated.div style={style} className={className}>
                                    <h1 className='questionNumber'>Spørsmål {counter}</h1>
                                    <p className='valgomatQuestion'>Trykk på den påstanden som passer best</p>
                                    <DynamicQuestion firstDep={firstDep} secondDep={secondDep}/>
                                </animated.div>
                            )}
                            <div className='dynamicFooter'>
                                <button className='valgomatButton' onClick={() => handleTransition(false)}>Forrige</button>
                                <ProgressBar completed={100}/>
                            </div>
                        </div>
                    </>
                )
            }
        }
    }

    return null;
};



export default Valgomat;