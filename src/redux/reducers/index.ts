import { combineReducers } from "redux";
import { questionCounterReducer } from './questions'
import { likertAnswerReducer } from "./likert";
import { algorithmReducer } from "./algorithm";
import { ResetStatesActionType } from '../actionTypes';

const reducers = combineReducers({
    questionCounter: questionCounterReducer,
    likertAnswer: likertAnswerReducer,
    algorithm: algorithmReducer
});

const rootReducer = (state: any, action: any) => {
    if (action.type === ResetStatesActionType.RESET_STATES) {
        state = undefined;
    }

    return reducers(state, action);
};

export type State = ReturnType<typeof reducers>
export default rootReducer;