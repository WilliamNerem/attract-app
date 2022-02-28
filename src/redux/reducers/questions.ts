import {QuestionAction, QuestionActionType} from '..';

const initialState = 1;

export const questionCounterReducer = (state: number = initialState, action: QuestionAction) => {
    switch (action.type) {
        case QuestionActionType.INCREASE:
            return state + action.payload;
        case QuestionActionType.DECREASE:
            return state - action.payload;
        case QuestionActionType.RESET:
            return 1;
        default:
            return state
    }
};