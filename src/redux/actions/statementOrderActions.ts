import {StatementOrderActionType} from "../actionTypes";

interface incrementAction {
    type: StatementOrderActionType.INCREASE
    payload: number
}

interface decrementAction {
    type: StatementOrderActionType.DECREASE
    payload: number
}

export type StatementOrderAction = incrementAction | decrementAction;