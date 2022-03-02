import { combineReducers } from "redux";
import { questionCounterReducer } from './questions'
import { likertAnswerReducer } from "./likert";
import { algorithmReducer } from "./algorithm";

export const reducers = combineReducers({
    questionCounter: questionCounterReducer,
    likertAnswer: likertAnswerReducer,
    algorithm: algorithmReducer
});

export type State = ReturnType<typeof reducers>