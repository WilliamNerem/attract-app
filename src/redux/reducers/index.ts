import { combineReducers } from "redux";
import { questionCounterReducer } from './questions'
import { likertAnswerReducer } from "./likert";
import { algorithmReducer } from "./algorithm";
import { ResetStatesActionType } from '../actionTypes';
import { statementOrderReducer, initialState as initStatementOrder } from "./statementOrder";
import { initializeStatementOrderReducer } from "./initializeStatementOrder";
import {departmentsReducer, initialState as initDepartments} from "./departments";
import {valgomatInProgressReducer} from "./valgomatInProgress";
import { showAlertDialogReducer } from "./showAlertDialog";
import {isInfoClickedReducer} from "./isInfoClicked";
import {stratSubdivisionReducer, initialState as initStratSubdivisions} from "./stratSubdivision";
import {interactiveSubdivisionReducer, initialState as initInteractiveSubDivisions} from "./interactiveSubdivision";

const reducers = combineReducers({
    valgomatInProgress: valgomatInProgressReducer,
    showAlertDialog: showAlertDialogReducer,
    isInfoClicked: isInfoClickedReducer,
    questionCounter: questionCounterReducer,
    likertAnswer: likertAnswerReducer,
    characteristicPoints: algorithmReducer,
    statementOrder: statementOrderReducer,
    initializeStatementOrder: initializeStatementOrderReducer,
    departmentsAlgorithm: departmentsReducer,
    stratSubdivision: stratSubdivisionReducer,
    interactiveSubdivision: interactiveSubdivisionReducer
});

const rootReducer = (state: any, action: any) => {
    if (action.type === ResetStatesActionType.RESET_STATES) {
        initDepartments.departmentArr[0].points = 0;
        initDepartments.departmentArr[1].points = 0;
        initDepartments.departmentArr[2].points = 0;
        initStatementOrder.statementOrderArr = [];
        state = undefined;
    }
    for (let i = 0; i < initStratSubdivisions.subdivisionArr.length; i++){
        initStratSubdivisions.subdivisionArr[i].points = 0;
    }
    for (let i = 0; i < initInteractiveSubDivisions.subdivisionArr.length; i++){
        initInteractiveSubDivisions.subdivisionArr[i].points = 0;
    }

    return reducers(state, action);
};

export type State = ReturnType<typeof reducers>
export default rootReducer;