import React from "react";
import '../../styles/statementItem.style.css';
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators, State} from "../../redux";
import {QuestionsData} from "../../questions";

interface statementItemProps {
    key: number,
    index: number,
    position: number,
    questionNumber: number
}

export const StatementItem = ({index, position, questionNumber}: statementItemProps) => {
    const statementArray = QuestionsData()[questionNumber].statementArr;
    const statementOrder = useSelector((state: State) => state.statementOrder);
    const dispatch = useDispatch();
    const {
        increaseStatementOrder,
        decreaseStatementOrder
    } = bindActionCreators(actionCreators, dispatch);

    let title = '';
    let statementNumber = -1;

    if (statementArray !== undefined){
        title = statementArray[index].title;
        statementNumber = statementArray[index].id;
    }

    const handleUp = (statementId: number) => {
        const prev = statementOrder[position-1];
        if (statementArray !== undefined && position != 0) {
            statementArray[index].department(1);
            increaseStatementOrder(statementId);
            statementArray[prev-1].department(-1);
        }
    };

    const handleDown = (statementId: number) => {
        const next = statementOrder[position+1];
        if (statementArray !== undefined && position != 5) {
            statementArray[index].department(-1);
            decreaseStatementOrder(statementId);
            statementArray[next-1].department(1);
        }
    };

    return(
        <div className={'container'}>
            <div className={'orderNumber'}>
                {position+1}.
            </div>
            <div className={'statement'} >
                {title}
                <div className={'buttonsContainer'}>
                    <button onClick={() => handleUp(statementNumber)}>up</button>
                    <button onClick={() => handleDown(statementNumber)}>down</button>
                </div>
            </div>
        </div >
    );
};