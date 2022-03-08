import { InitializeStatementOrderActionType } from "../actionTypes";


interface initializePointsAction {
    type: InitializeStatementOrderActionType.INITIALIZE
    payload: {
        number: number,
        isInitialized: boolean
    }
}

export type InitializeStatementOrderAction = initializePointsAction