import React from "react";
import '../../styles/statementItem.style.css';
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators, State} from "../../redux";
import {QuestionsDataInteractive, QuestionsDataSC, QuestionsDataTech, QuestionsPartOne} from "../../questions";
import {useTransition, animated} from 'react-spring'
import {useTranslation} from "react-i18next";

interface statementItemProps {
    key: number
    index: number
    positionInStatementOrder: number
    position: number
    questionNumber: number
    transitionPx: number
    handleTransition: Function
    transitionValues: {
        transitionUp: number,
        transitionDown: number,
        startTransition: boolean
    }
    questionArray?: any[]
}

export const StatementItem = ({index, positionInStatementOrder, position, transitionPx, handleTransition, transitionValues, questionArray}: statementItemProps) => {
    const counter = useSelector((state: State) => state.questionCounter);
    const counterPartTwo = useSelector((state: State) => state.questionCounterPartTwo);
    const { t } = useTranslation();

    let arrayLength = questionArray?.length;
    let statementArray = questionArray;
    if(counterPartTwo === 1) {
        statementArray = QuestionsPartOne(t)[counter - 1].statementArr;
    }
    if(arrayLength === 7) { // Has to hardcode this and needs to be changed if size increases
        statementArray = QuestionsDataSC()[counterPartTwo - 1].statementArr;
    }
    else if(arrayLength === 5) { // Has to hardcode this and needs to be changed if size increases
        statementArray = QuestionsDataInteractive()[counterPartTwo - 1].statementArr;
    }
    else if(arrayLength === 4) { // Has to hardcode this and needs to be changed if size increases
        statementArray = QuestionsDataTech()[counterPartTwo - 1].statementArr;
    }

    const statementOrder = useSelector((state: State) => state.statementOrder);
    const dispatch = useDispatch();
    const {
        increaseStatementOrder,
        decreaseStatementOrder
    } = bindActionCreators(actionCreators, dispatch);

    const transition = useTransition(transitionValues.startTransition, {
        from: {x: 0, y: transitionPx},
        enter: {x: 0, y: 0}
    });

    let title = '';
    let statementNumber = -1;

    if (statementArray !== undefined){
        title = statementArray[index].title;
        statementNumber = statementArray[index].id;
    }

    const handleUp = (statementId: number) => {
        const prev = statementOrder[positionInStatementOrder][position-1];
        if (statementArray !== undefined && position != 0) {
            statementArray[index].department(2);
            increaseStatementOrder(statementId, positionInStatementOrder);
            statementArray[prev-1].department(-2);
            handleTransition(position-1, position, !transitionValues.startTransition);
        }
    };

    const handleDown = (statementId: number) => {
        const next = statementOrder[positionInStatementOrder][position+1];
        if (statementArray !== undefined && position != 2) {
            statementArray[index].department(-2);
            decreaseStatementOrder(statementId, positionInStatementOrder);
            statementArray[next-1].department(2);
            handleTransition(position, position+1, !transitionValues.startTransition);
        }
    };

    // Function for key press down for tab index
    const handleKeyPressUp = (e: React.KeyboardEvent<HTMLAnchorElement>, statementId: number) => {
        if (e.key === "Enter" || e.key === "Space") {
            const prev = statementOrder[positionInStatementOrder][position-1];
            if (statementArray !== undefined && position != 0) {
                statementArray[index].department(2);
                increaseStatementOrder(statementId, positionInStatementOrder);
                statementArray[prev-1].department(-2);
                handleTransition(position-1, position, !transitionValues.startTransition);
            }
        }
    };

    // Function for key press down for tab index
    const handleKeyPressDown = (e: React.KeyboardEvent<HTMLAnchorElement>, statementId: number) => {
        if (e.key === "Enter" || e.key === "Space") {
            const next = statementOrder[positionInStatementOrder][position+1];
            if (statementArray !== undefined && position != 2) {
                statementArray[index].department(-2);
                decreaseStatementOrder(statementId, positionInStatementOrder);
                statementArray[next-1].department(2);
                handleTransition(position, position+1, !transitionValues.startTransition);
            }
        }
    };


    let upArrow = 'buttonUp';
    let downArrow = 'buttonDown';

    if (position === 0){
        upArrow = 'buttonUpGray';
    } else if (position === 2){
        downArrow = 'buttonDownGray';
    }

    return(
        <div className={'container'} data-testid={'statementItem'}>
            <div className={'orderNumber'}>
                {position+1}.
            </div>
            {transition((style) =>
                <animated.div className='statement' style={style}>
                    <div className='textContainer' data-testid={'statementItemText'}>
                        {title}
                    </div>
                </animated.div>
            )}
            <div className={'buttonsContainer'}>
                <a
                    className={upArrow}
                    onClick={() => handleUp(statementNumber)}
                    onKeyPress={key => {handleKeyPressUp(key, statementNumber)}}
                    tabIndex={0}
                />
                <a
                    className={downArrow}
                    onClick={() => handleDown(statementNumber)}
                    onKeyPress={key => {handleKeyPressDown(key, statementNumber)}}
                    tabIndex={0}
                />
            </div>
        </div >
    );
};