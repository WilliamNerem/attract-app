import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {State} from "../../redux/reducers";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../redux";
import {StatementItem} from "../atoms/statementItem";
import {QuestionsData} from "../../questions";

export const StatementOrder = () => {
    const counter = useSelector((state: State) => state.questionCounter);
    const statementOrder = useSelector((state: State) => state.statementOrder);
    const initializeStatementOrderArray = useSelector((state: State) => state.initializeStatementOrder);
    const [transition, setTransition] = useState({
        transitionUp: -1,
        transitionDown: -1,
        startTransition: true
    });

    const dispatch = useDispatch();
    const { initializeStatementOrder, addStatementOrder } = bindActionCreators(actionCreators, dispatch);
    const statementArr = QuestionsData()[counter-1].statementArr;
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