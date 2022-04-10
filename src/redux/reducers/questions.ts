export enum QuestionActionType {
    INCREASE = 'increase',
    DECREASE = 'decrease',
    SETCOUNTER = 'setCounter'
}
interface incrementAction {
    type: QuestionActionType.INCREASE
    payload: number
}

interface decrementAction {
    type: QuestionActionType.DECREASE
    payload: number
}

interface setCounterAction {
    type: QuestionActionType.SETCOUNTER
    payload: number
}

export type QuestionAction = incrementAction | decrementAction | setCounterAction;

const initialState = 1;

export const questionCounterReducer = (state: number = initialState, action: QuestionAction) => {
    switch (action.type) {
        case QuestionActionType.INCREASE:
            return state + action.payload;
        case QuestionActionType.DECREASE:
            return state - action.payload;
        case QuestionActionType.SETCOUNTER:
            return action.payload;
        default:
            return state
    }
};