import {StatementOrderActionType} from "../actionTypes";

interface incrementAction {
    type: StatementOrderActionType.INCREASE
    payload: {
        id: number
        position: number
    }
}

interface decrementAction {
    type: StatementOrderActionType.DECREASE
    payload: {
        id: number
        position: number
    }
}

interface addAction {
    type: StatementOrderActionType.ADD
}

export type StatementOrderAction = incrementAction | decrementAction | addAction;