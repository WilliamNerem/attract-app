export enum QuestionPartTwoActionType {
    INCREASE = 'increasePartTwo',
    DECREASE = 'decreasePartTwo',
    SETCOUNTER = 'setCounterPartTwo'
}

interface incrementAction {
    type: QuestionPartTwoActionType.INCREASE
    payload: number
}

interface decrementAction {
    type: QuestionPartTwoActionType.DECREASE
    payload: number
}

interface setCounterAction {
    type: QuestionPartTwoActionType.SETCOUNTER
    payload: number
}

export type QuestionPartTwoAction = incrementAction | decrementAction | setCounterAction;

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