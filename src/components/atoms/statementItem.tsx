import React from "react";
import '../../styles/statementItem.style.css';
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators, State} from "../../redux";
import {QuestionsPartOne} from "../../questions";
import {useTransition, animated} from 'react-spring'

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
}

export const StatementItem = ({index, positionInStatementOrder, position, questionNumber, transitionPx, handleTransition, transitionValues}: statementItemProps) => {
    const statementArray = QuestionsPartOne()[questionNumber].statementArr;
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
                    <div className='textContainer'>
                        {title}
                    </div>
                </animated.div>
            )}
            <div className={'buttonsContainer'}>
                <a className={upArrow} onClick={() => handleUp(statementNumber)}/>
                <a className={downArrow} onClick={() => handleDown(statementNumber)}/>
            </div>
        </div >
    );
};