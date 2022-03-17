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
    const { initializeStatementOrder } = bindActionCreators(actionCreators, dispatch);
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

    if (initializeStatementOrderArray.length === 0){
        initDepartmentPoints();
    }

    initializeStatementOrderArray.map((i, index) => {
        if (i.number === counter){
            return
        }
        if (index+1 === initializeStatementOrderArray.length){
            initDepartmentPoints();
        }
    });

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

    statementList = statementOrder.map((statement, index) => {
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
                position={index}
                questionNumber={counter-1}
                transitionPx={transitionPx}
                transitionValues={transition}
                handleTransition={handleTransition}
            />
        )
    });

    return (
        <div className='statementOrderMargin'>
            {statementList}
        </div>
    );
};