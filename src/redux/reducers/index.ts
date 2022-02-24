import { combineReducers } from "redux";
import { questionCounterReducer } from './questions'

export const reducers = combineReducers({
    questionCounter: questionCounterReducer
});

export type State = ReturnType<typeof reducers>