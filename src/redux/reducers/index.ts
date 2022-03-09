import { combineReducers } from "redux";
import { questionCounterReducer } from './questions'
import { likertAnswerReducer } from "./likert";
import { algorithmReducer } from "./algorithm";
import { ResetStatesActionType } from '../actionTypes';
import { statementOrderReducer } from "./statementOrder";
import { initializeStatementOrderReducer } from "./initializeStatementOrder";
import {departmentsReducer, initialState as initDep} from "./departments";

const reducers = combineReducers({
    questionCounter: questionCounterReducer,
    likertAnswer: likertAnswerReducer,
    characteristicPoints: algorithmReducer,
    statementOrder: statementOrderReducer,
    initializeStatementOrder: initializeStatementOrderReducer,
    departmentsAlgorithm: departmentsReducer,
});

const rootReducer = (state: any, action: any) => {
    if (action.type === ResetStatesActionType.RESET_STATES) {
        initDep.departmentArr[0].points = 0;
        initDep.departmentArr[1].points = 0;
        initDep.departmentArr[2].points = 0;
        state = undefined;
    }

    return reducers(state, action);
};

export type State = ReturnType<typeof reducers>
export default rootReducer;