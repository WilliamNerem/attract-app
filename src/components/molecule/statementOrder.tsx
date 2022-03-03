import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {State} from "../../redux/reducers";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../redux";
import {StatementItem} from "../atoms/statementItem";

export const StatementOrder = () => {

    const statementOrder = useSelector((state: State) => state.statementOrder);
    const dispatch = useDispatch();
    const {
        increaseStatementOrder,
        decreaseStatementOrder
    } = bindActionCreators(actionCreators, dispatch);



    const handleUp = (statementId: number) => {
        increaseStatementOrder(statementId);
    }

    const handleDown = (statementId: number) => {
        decreaseStatementOrder(statementId);
    }

    let statementList = statementOrder.map((statement, index) => {
        return (
            <div>
                <StatementItem
                    statementTitle={'Påstand ' + statement.toString()}
                    index={index+1}
                    handleUp={() => handleUp(statement)}
                    handleDown={() => handleDown(statement)} />
            </div>
            )
    })

    return (
        <>
            {statementList}
        </>
    );
};