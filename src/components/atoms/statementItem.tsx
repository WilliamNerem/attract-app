import React from "react";
import '../../styles/statementItem.style.css';
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators, State} from "../../redux";
import {QuestionsData} from "../../questions";
import {useTransition, animated} from 'react-spring'

interface statementItemProps {
    key: number
    index: number
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

export const StatementItem = ({index, position, questionNumber, transitionPx, handleTransition, transitionValues}: statementItemProps) => {
    const statementArray = QuestionsData()[questionNumber].statementArr;
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
        const prev = statementOrder[position-1];
        if (statementArray !== undefined && position != 0) {
            statementArray[index].department(1);
            increaseStatementOrder(statementId);
            statementArray[prev-1].department(-1);
            handleTransition(position-1, position, !transitionValues.startTransition);
        }
    };

    const handleDown = (statementId: number) => {
        const next = statementOrder[position+1];
        if (statementArray !== undefined && position != 5) {
            statementArray[index].department(-1);
            decreaseStatementOrder(statementId);
            statementArray[next-1].department(1);
            handleTransition(position, position+1, !transitionValues.startTransition);
        }
    };

    let upArrow = 'buttonUp';
    let downArrow = 'buttonDown';

    if (position === 0){
        upArrow = 'buttonUpGray';
    } else if (position === 5){
        downArrow = 'buttonDownGray';
    }

    return(
        <div className={'container'}>
            <div className={'orderNumber'}>
                {position+1}.
            </div>
            {transition((style) =>
                <animated.div className='statement' style={style}>
                    <div className='textContainer'>
                        {title}
                    </div>
                    <div className={'buttonsContainer'}>
                        <a className={upArrow} onClick={() => handleUp(statementNumber)}/>
                        <a className={downArrow} onClick={() => handleDown(statementNumber)}/>
                    </div>
                </animated.div>
            )}
        </div >
    );
};