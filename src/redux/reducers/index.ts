import {combineReducers} from "redux";
import { questionCounterReducer } from './questions'
import { likertAnswerReducer } from "./likert";
import { algorithmReducer } from "./algorithm";
import { statementOrderReducer } from "./statementOrder";
import { initializeStatementOrderReducer } from "./initializeStatementOrder";
import {departmentsReducer, initialState as initDepartments} from "./departments";
import {valgomatInProgressReducer} from "./valgomatInProgress";
import { showAlertDialogReducer } from "./showAlertDialog";
import {isInfoClickedReducer} from "./isInfoClicked";
import {imageSelectorReducer, initialState as initImageSelector} from "./imageSelector";
import {imageSelectorAnswerReducer} from "./imageSelectorAnswers";

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
    imageSelector: imageSelectorReducer,
    imageSelectorAnswer: imageSelectorAnswerReducer,
});

export enum ResetStatesActionType {
    RESET_STATES = 'resetStates',
    RESET_STRAT_SUBDIVISON = 'resetStratSubDivision',
    RESET_INT_SUBDIVISON = 'resetIntSubDivision',
    RESET_TECH_SUBDIVISON = 'resetTechSubDivision'
}

interface resetStatesAction {
    type: ResetStatesActionType.RESET_STATES
}

interface resetStratSubDivisionAction {
    type: ResetStatesActionType.RESET_STRAT_SUBDIVISON
}

interface resetIntSubDivisionAction {
    type: ResetStatesActionType.RESET_INT_SUBDIVISON
}

interface resetTechSubDivisionAction {
    type: ResetStatesActionType.RESET_TECH_SUBDIVISON
}

export type ResetStatesAction = resetStatesAction | resetStratSubDivisionAction | resetIntSubDivisionAction | resetTechSubDivisionAction

const rootReducer = (state: any, action: any) => {
    if (action.type === ResetStatesActionType.RESET_STATES) {
        for (let i = 0; i < initDepartments.departmentArr.length; i++) {
            initDepartments.departmentArr[i].points = 0;
        }
        for (let i = 0; i < initImageSelector.answers.length; i++) {
            initImageSelector.answers[i].points = 0;
        }
        state = undefined;
    }

    return reducers(state, action);
};

export type State = ReturnType<typeof reducers>
export default rootReducer;