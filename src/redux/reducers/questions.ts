import { QuestionAction } from '..';
import { QuestionActionType } from "../actionTypes";

const initialState = 1;

export const questionCounterReducer = (state: number = initialState, action: QuestionAction) => {
    switch (action.type) {
        case QuestionActionType.INCREASE:
            return state + action.payload;
        case QuestionActionType.DECREASE:
            return state - action.payload;
        default:
            return state
    }
};