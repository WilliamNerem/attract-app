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
        let points = 1;
        if (position === 3){
            points = 2;
        }
        if (statementArray !== undefined && position != 0) {
            statementArray[index].characteristic(+points);
            increaseStatementOrder(statementId);
            statementArray[prev-1].characteristic(-points);
        }
    };

    const handleDown = (statementId: number) => {
        const next = statementOrder[position+1];
        let points = 1;
        if (position === 2){
            points = 2;
        }
        if (statementArray !== undefined && position != 5) {
            statementArray[index].characteristic(-points);
            decreaseStatementOrder(statementId);
            statementArray[next-1].characteristic(+points);
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