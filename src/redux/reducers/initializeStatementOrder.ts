import { InitializeStatementOrderAction, InitializeStatementOrderActionType} from '..';

export const initialState = {
    statementOrderArr: []
};

export const initializeStatementOrderReducer = (state: {number: number, isInitialized: boolean}[] = initialState.statementOrderArr, action: InitializeStatementOrderAction) => {
    switch (action.type) {
        case InitializeStatementOrderActionType.INITIALIZE:
            for (let i of state){
                if (i.number === action.payload.number){
                    return state;
                }
            }
            const init = {number: action.payload.number, isInitialized: action.payload.isInitialized};
            return [...state, init];
        default:
            return state;
    }
};