import {Navbar} from "../molecule/navbar";
import {animated, useTransition} from "react-spring";
import {InfoButton} from "../molecule/infoButton";
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

interface valgoMatPartTwoProps {
    questionArray: any[]
}

export const ValgomatPartTwo = ({questionArray}: valgoMatPartTwoProps) => {
    const dispatch = useDispatch();
    const {
        increaseCounter,
        decreaseCounter
    } = bindActionCreators(actionCreators, dispatch);
    const counter = useSelector((state: State) => state.questionCounter);
    const [transitionValue, setTransitionValue] = useState({from: ''});
    const [transition, setTransition] = useState(true);
    const [className, setClassname] = useState('initializeTransition');
    const [open, setOpen] = useState(false);


    useEffect(() => {
        if (transition) {
            setTransition(!transition);
            setClassname('initializeTransition');
        }
    }, [counter]);

    const startTransition = useTransition(transition, {
        from: {transform: "translateX(" + transitionValue.from + ")"},
        enter: {transform: "translateX(0)"}
    });

    const handleTransition = (
        isNext: boolean
    ) => {
        if (!isNext) {
            setClassname('animatedDivLeaveNext');
            setTransition(!transition);
            setTimeout((decreaseCounter), 200);
            if (!transition) {
                setTransitionValue({from: '-100vw'});
            } else {
                setTransitionValue({from: '100vw'});
            }
        } else {
            setClassname('animatedDivLeaveLast');
            setTransition(!transition);
            setTimeout((increaseCounter), 200);
            if (!transition) {
                setTransitionValue({from: '100vw'});
            } else {
                setTransitionValue({from: '-100vw'});
            }
        }
    };

    const handleClick = () => {
        setOpen(true);
    };

    for (let questions of questionArray) {
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
                                {questions.isStatement ? <StatementOrder questionArray={questionArray}/> :
                                    <LikertScale questionNumber={questions.questionNumber}
                                                 characteristic={questions.characteristic}
                                                 isReversed={questions.isReversed}/>}
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
    }

    return null;
};