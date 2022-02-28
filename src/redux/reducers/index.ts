import { combineReducers } from "redux";
import { questionCounterReducer } from './questions'
import { likertAnswerReducer } from "./likert";

export const reducers = combineReducers({
    questionCounter: questionCounterReducer,
    likertAnswer: likertAnswerReducer
});

export type State = ReturnType<typeof reducers>