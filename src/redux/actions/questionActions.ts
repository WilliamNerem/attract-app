import { QuestionActionType } from "../actionTypes";

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