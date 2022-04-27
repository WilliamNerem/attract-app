import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {State} from "../../redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../redux";
import {StatementItem} from "../atoms/statementItem";
import {QuestionsPartOne, QuestionsDataInteractive, QuestionsDataSC, QuestionsDataTech} from "../../questions";
import {useTranslation} from "react-i18next";

interface statementOrderProps {
    questionArray?: any[]
    sharedWords: string
}

export const StatementOrder = ({questionArray, sharedWords}: statementOrderProps) => {
    const counter = useSelector((state: State) => state.questionCounter);
    const counterPartTwo = useSelector((state: State) => state.questionCounterPartTwo);
    const statementOrder = useSelector((state: State) => state.statementOrder);
    const initializeStatementOrderArray = useSelector((state: State) => state.initializeStatementOrder);
    const [transition, setTransition] = useState({
        transitionUp: -1,
        transitionDown: -1,
        startTransition: true
    });
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { initializeStatementOrder, addStatementOrder } = bindActionCreators(actionCreators, dispatch);

    let arrayLength = questionArray?.length;
    let statementArr = questionArray;   // Can put below code into a function since it's duplicate with statementItem
    let currentCounter = counterPartTwo; // Have to switch between counter and counterPartTwo
    if(counterPartTwo === 1) {
        statementArr = QuestionsPartOne(t)[counter - 1].statementArr;
        currentCounter = counter;
    }
    if(arrayLength === 7) { // Has to hardcode this and needs to be changed if size increases
        statementArr = QuestionsDataSC()[counterPartTwo - 1].statementArr;
    }
    else if(arrayLength === 5) { // Has to hardcode this and needs to be changed if size increases
        statementArr = QuestionsDataInteractive()[counterPartTwo - 1].statementArr;
    }
    else if(arrayLength === 4) { // Has to hardcode this and needs to be changed if size increases
        statementArr = QuestionsDataTech()[counterPartTwo - 1].statementArr;
    }
    let statementList;

    const initDepartmentPoints = () => {
        if (statementArr !== undefined){
            statementArr.map((statement) => {
                statement.department(statement.initDepartmentPoints)
            });
            initializeStatementOrder(currentCounter);
        }
    };

    let isIinitialized = false;
    initializeStatementOrderArray.map((object) => {
        if (object.number === currentCounter){
            isIinitialized = true;
        }
    });
    if (!isIinitialized){
        initDepartmentPoints();
    }

    if (initializeStatementOrderArray.length > statementOrder.length){
        addStatementOrder();
    }

    const handleTransition = (
        setTransitionUp: number,
        setTransitionDown: number,
        setStartTransition: boolean,
    ) => {
        setTransition({
            transitionUp: setTransitionUp,
            transitionDown: setTransitionDown,
            startTransition: setStartTransition
        });
    };

    statementList = statementOrder.map((statementArr, position) => {
        let statements;
        if (currentCounter === initializeStatementOrderArray[position].number){
            statements = statementArr.map((statement, index) => {
                let transitionPx = 0;
                if (transition.transitionUp === index){
                    transitionPx = 124;
                } else if (transition.transitionDown === index){
                    transitionPx = -124;
                }
                return (
                    <StatementItem
                        key={index}
                        index={statement-1}
                        positionInStatementOrder={position}
                        position={index}
                        questionNumber={currentCounter-1}
                        transitionPx={transitionPx}
                        transitionValues={transition}
                        handleTransition={handleTransition}
                        questionArray={questionArray}
                    />
                )
            });
        }
        return statements
    });

    return (
        <div className='statementOrderMargin' data-testid={'statementOrder'}>
            <p className='statementOrderSharedWords' data-testid={'sharedWords'}>{sharedWords}</p>
            {statementList}
        </div>
    );
};