import {QuestionPartTwoAction, QuestionPartTwoActionType} from '..';

const initialState = 1;

export const questionCounterPartTwoReducer = (state: number = initialState, action: QuestionPartTwoAction) => {
    switch (action.type) {
        case QuestionPartTwoActionType.INCREASE:
            return state + action.payload;
        case QuestionPartTwoActionType.DECREASE:
            return state - action.payload;
        case QuestionPartTwoActionType.SETCOUNTER:
            return action.payload;
        default:
            return state
    }
};