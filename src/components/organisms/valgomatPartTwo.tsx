import {Navbar} from "../molecule/navbar";
import {InfoButton} from "../atoms/infoButton";
import {Questions} from "../atoms/questions";
import {StatementOrder} from "../molecule/statementOrder";
import {LikertScale} from "../atoms/likertScale";
import {ValgomatFooter} from "../molecule/valgomatFooter";
import Backdrop from "@mui/material/Backdrop";
import {ShowExplanation} from "../molecule/showExplanation";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {actionCreators, State} from "../../redux";
import {useEffect, useState} from "react";
import {bindActionCreators} from "redux";
import {ResultSubDepartment} from "./resultSubDepartment";
import {useTranslation} from "react-i18next";

interface valgoMatPartTwoProps {
    questionArray: any[]
    isTech?: boolean
    isStrat?: boolean
    isInteractive?: boolean
    setIsDepClicked?: React.Dispatch<React.SetStateAction<{ strat: boolean; interactive: boolean; tech: boolean; }>>
}

export const ValgomatPartTwo = ({questionArray, isTech, isStrat, isInteractive, setIsDepClicked}: valgoMatPartTwoProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        increaseCounterPartTwo,
        decreaseCounterPartTwo,
        reset
    } = bindActionCreators(actionCreators, dispatch);
    const counter = useSelector((state: State) => state.questionCounterPartTwo);
    const stratSub = useSelector((state: State) => state.stratSubdivision);
    const interactiveSub = useSelector((state: State) => state.interactiveSubdivision);
    const [transition, setTransition] = useState(true);
    const [className, setClassname] = useState('initializeTransition');
    const [open, setOpen] = useState(false);


    useEffect(() => {
        if (transition) {
            setTransition(!transition);
        }
    }, [counter]);

    useEffect(() => {
        reset();
    }, []);

    if (className === 'fromRight' || className === 'fromLeft'){
        setTimeout((() => {
            setClassname('initializeTransition');
        }), 50);
    }

    const handleTransition = (
        isNext: boolean
    ) => {
        if (!isNext) {
            setClassname('animatedDivLeaveLast');
            setTransition(!transition);
            setTimeout((() => {
                if (!transition){
                    setClassname('fromLeft');
                } else {
                    setClassname('fromRight');
                }
                decreaseCounterPartTwo();
            }), 200);
        } else {
            setClassname('animatedDivLeaveNext');
            setTransition(!transition);
            setTimeout((() => {
                if (!transition){
                    setClassname('fromRight');
                } else {
                    setClassname('fromLeft');
                }
                increaseCounterPartTwo();
            }), 200);
        }
    };

    const handleClick = () => {
        setOpen(true);
    };

    for (let questions of questionArray) {
        if (counter === questions.questionNumber) {
            return (
                <div className='bodyValgomat' data-testid={'valgomatPartTwo'}>
                    <div className={'valgomat'}>
                        <Navbar/>
                        {
                            <div className={className} data-testid={'valgomatPartTwoComponent'}>
                                <InfoButton handleClick={handleClick}/>
                                <h1 className='questionNumber'>{t('questionPreText')} {counter}</h1>
                                <Questions questionTxt={questions.questionTxt}/>
                                {questions.isStatement ? <StatementOrder questionArray={questionArray} sharedWords={questions.sharedWords}/> :
                                    <LikertScale questionNumber={questions.questionNumber}
                                                 characteristic={questions.characteristic} // This is not characteristic, will be a subdepartment
                                                 isReversed={questions.isReversed}/>}
                            </div>
                        }
                    </div>
                    <ValgomatFooter completed={questions.progress} nextTransition={handleTransition}/>
                    <Backdrop
                        open={open}
                        onClick={() => {
                            setOpen(false);
                        }}
                        data-testid='showExplanation'
                    >
                        <ShowExplanation questionType={questions.questionType}/>
                    </Backdrop>
                </div>
            )
        }
        if (counter > questionArray.length){
            const information = (isStrat ? stratSub : (isInteractive ? interactiveSub : (isTech ? [] : [])));
            return (<ResultSubDepartment information={information} setIsDepClicked={setIsDepClicked}/>)
        }
    }

    return null;
};