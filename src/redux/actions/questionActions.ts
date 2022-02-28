import { QuestionActionType } from "../actionTypes";

interface incrementAction {
    type: QuestionActionType.INCREASE
    payload: number
}

interface decrementAction {
    type: QuestionActionType.DECREASE
    payload: number
}

interface resetAction {
    type: QuestionActionType.RESET
    payload: number
}

export type QuestionAction = incrementAction | decrementAction | resetAction;