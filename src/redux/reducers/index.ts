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
import {stratSubdivisionReducer, initialState as initStratSubdivisions} from "./stratSubdivision";
import {interactiveSubdivisionReducer, initialState as initInteractiveSubDivisions} from "./interactiveSubdivision";
import {questionCounterPartTwoReducer} from "./questionCounterPartTwo";
import {subValgomatInProgressReducer} from "./subValgomatInProgress";
import {technologySubdivisionReducer, initialState as initTechnologySubDivisions} from "./technologySubdivision";

const reducers = combineReducers({
    valgomatInProgress: valgomatInProgressReducer,
    subValgomatInProgress: subValgomatInProgressReducer,
    showAlertDialog: showAlertDialogReducer,
    isInfoClicked: isInfoClickedReducer,
    questionCounter: questionCounterReducer,
    questionCounterPartTwo: questionCounterPartTwoReducer,
    likertAnswer: likertAnswerReducer,
    characteristicPoints: algorithmReducer,
    statementOrder: statementOrderReducer,
    initializeStatementOrder: initializeStatementOrderReducer,
    departmentsAlgorithm: departmentsReducer,
    imageSelector: imageSelectorReducer,
    imageSelectorAnswer: imageSelectorAnswerReducer,
    stratSubdivision: stratSubdivisionReducer,
    interactiveSubdivision: interactiveSubdivisionReducer,
    technologySubdivision: technologySubdivisionReducer
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
        for (let i = 0; i < initStratSubdivisions.subdivisionArr.length; i++) {
            initStratSubdivisions.subdivisionArr[i].points = 0;
        }
        for (let i = 0; i < initInteractiveSubDivisions.subdivisionArr.length; i++) {
            initInteractiveSubDivisions.subdivisionArr[i].points = 0;
        }
        for (let i = 0; i < initTechnologySubDivisions.subdivisionArr.length; i++) {
            initTechnologySubDivisions.subdivisionArr[i].points = 0;
        }
        state = undefined;
    }

    if (action.type === ResetStatesActionType.RESET_STRAT_SUBDIVISON) {
        for (let i = 0; i < initStratSubdivisions.subdivisionArr.length; i++) {
            initStratSubdivisions.subdivisionArr[i].points = 0;
        }
    }

    if (action.type === ResetStatesActionType.RESET_INT_SUBDIVISON) {
        for (let i = 0; i < initInteractiveSubDivisions.subdivisionArr.length; i++) {
            initInteractiveSubDivisions.subdivisionArr[i].points = 0;
        }
    }

    if (action.type === ResetStatesActionType.RESET_TECH_SUBDIVISON) {
        for (let i = 0; i < initTechnologySubDivisions.subdivisionArr.length; i++) {
            initTechnologySubDivisions.subdivisionArr[i].points = 0;
        }
    }

    return reducers(state, action);
};

export type State = ReturnType<typeof reducers>
export default rootReducer;