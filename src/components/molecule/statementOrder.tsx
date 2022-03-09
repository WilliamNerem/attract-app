import React from 'react';
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
    const dispatch = useDispatch();
    const {
        initializeStatementOrder
    } = bindActionCreators(actionCreators, dispatch);

    let statementList;
    const statementArr = QuestionsData()[counter-1].statementArr;

    const initDepartmentPoints = () => {
        if (statementArr !== undefined){
            statementArr.map((statement) => {
                statement.department(statement.initDepartmentPoints)
            });
            initializeStatementOrder(counter);
        }
    };

    if (initializeStatementOrderArray.length === 0){
        initDepartmentPoints();
    }

    initializeStatementOrderArray.map((i, index) => {
        if (i.number === counter){
            return
        }
        if (index === initializeStatementOrderArray.length){
            initDepartmentPoints();
        }
    });

    statementList = statementOrder.map((statement, index) => {
        return (
            <StatementItem
                key={index}
                index={statement-1}
                position={index}
                questionNumber={counter-1}
            />
        )
    });

    return (
        <>
            {statementList}
        </>
    );
};