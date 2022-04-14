import { Navbar } from "../components/molecule/navbar";
import { Questions } from "../components/atoms/questions";
import { LikertScale } from "../components/atoms/likertScale";
import { AlertDialog } from "../components/atoms/alertDialog";
import * as React from "react";
import { State, actionCreators } from "../redux";
import { useSelector, useDispatch } from "react-redux";
import { QuestionsPartOne } from '../questions'
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

const Valgomat = () => {
    const dispatch = useDispatch();
    const { valgomatIsInProgress, showAlertDialog, increaseCounter, decreaseCounter } = bindActionCreators(actionCreators, dispatch);
    const counter = useSelector((state: State) => state.questionCounter);
    const algoArray = useSelector((state: State) => state.characteristicPoints);
    const departmentsArray = useSelector((state: State) => state.departmentsAlgorithm);
    const isShowAlertDialog = useSelector((state: State) => state.showAlertDialog);
    const subValgomatInProgress = useSelector((state: State) => state.subValgomatInProgress);
    const imageSelector = useSelector((state: State) => state.imageSelector);
    const [transitionValue, setTransitionValue] = useState({from: ''});
    const [transition, setTransition] = useState(true);
    const [className, setClassname] = useState('initializeTransition');
    const [open, setOpen] = useState(false);
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
    if (isShowAlertDialog && !subValgomatInProgress) {
        return (
            <AlertDialog end={false}/>
        )
    }

    const handleClick = () => {
        setOpen(true);
    };

    for (let questions of QuestionsPartOne()) {
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
                                {questions.isStatement ?
                                    <StatementOrder sharedWords={questions.sharedWords}/> : ''
                                }
                                {questions.isImageSelection ?
                                    <ImageSelection
                                        pictures={[questions.images[0], questions.images[1], questions.images[2]]}
                                        pointAllocater={[questions.allocatePoints[0], questions.allocatePoints[1], questions.allocatePoints[2]]}
                                    /> : ''
                                }
                                {questions.characteristic ?
                                    <LikertScale questionNumber={questions.questionNumber} characteristic={questions.characteristic} isReversed={questions.isReversed}/> : ''
                                }
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

        if (counter >= QuestionsPartOne().length + 1) { // When last question is asked or when
            const dynamicCounter = QuestionsPartOne().length + 2;
            let totalPoints: number[] = [];

            userDifferences.map((differenceCharacteristic, index) => {
                const characteristicPoints = (differenceCharacteristic * (2 / departments[index].possibleDifference));  //Changed from characteristic being worth 1/3 of departmentpoints to being worth 1/2 because of new and better characteristic questions
                totalPoints = [...totalPoints, (departmentsArray[index].points + imageSelector[index].points) - characteristicPoints];
            });

            const biggestTwoTotal = totalPoints.slice().sort((a, b) => b - a).slice(0, 2); // Needs to be here if not it will always go to dynamic site

            if (counter >= dynamicCounter){
                return (<Result totalPointsArray={totalPoints}/>)
            }
            if (biggestTwoTotal[0] > (biggestTwoTotal[1] +1)) {   // Check if number 1 has atleast 2 more points than number 2
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