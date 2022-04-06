import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {State} from "../../redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../redux";
import {StatementItem} from "../atoms/statementItem";
import {QuestionsData, QuestionsDataInteractive, QuestionsDataSC, QuestionsDataTech} from "../../questions";

interface statementOrderProps {
    questionArray?: any[]
}

export const StatementOrder = ({questionArray}: statementOrderProps) => {
    const counter = useSelector((state: State) => state.questionCounter);
    const statementOrder = useSelector((state: State) => state.statementOrder);
    const initializeStatementOrderArray = useSelector((state: State) => state.initializeStatementOrder);
    const [transition, setTransition] = useState({
        transitionUp: -1,
        transitionDown: -1,
        startTransition: true
    });

    let arrayLength = questionArray?.length;
    console.log(arrayLength);
    console.log(counter);
    const dispatch = useDispatch();
    const { initializeStatementOrder, addStatementOrder } = bindActionCreators(actionCreators, dispatch);
    let statementArr = questionArray;
    if(counter < 20) {
        statementArr = QuestionsData()[counter - 1].statementArr;
    }
    if(arrayLength === 7) { // Has to hardcode this and needs to be changed if size increases
        statementArr = QuestionsDataSC()[counter-20].statementArr;
    }
    else if(arrayLength === 5) { // Has to hardcode this and needs to be changed if size increases
        statementArr = QuestionsDataInteractive()[counter-20].statementArr;
    }
    else if(arrayLength === 4) { // Has to hardcode this and needs to be changed if size increases
        statementArr = QuestionsDataTech()[counter-20].statementArr;
    }
    let statementList;


    const initDepartmentPoints = () => {
        if (statementArr !== undefined){
            statementArr.map((statement) => {
                statement.department(statement.initDepartmentPoints)
            });
            initializeStatementOrder(counter);
        }
    };

    let isIinitialized = false;
    initializeStatementOrderArray.map((object) => {
        if (object.number === counter){
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
        if (counter === initializeStatementOrderArray[position].number){
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
                        questionNumber={counter-1}
                        transitionPx={transitionPx}
                        transitionValues={transition}
                        handleTransition={handleTransition}
                    />
                )
            });
        }
        return statements
    });

    return (
        <div className='statementOrderMargin'>
            {statementList}
        </div>
    );
};