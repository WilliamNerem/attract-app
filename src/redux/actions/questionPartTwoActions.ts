import { QuestionPartTwoActionType } from "../actionTypes";

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