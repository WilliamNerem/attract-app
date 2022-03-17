import {StatementOrderAction, StatementOrderActionType} from '..';

export const initialState = {
    statementOrderArr: []
};

export const statementOrderReducer = (state: number[][] = initialState.statementOrderArr, action: StatementOrderAction) => {
    let index;
    switch (action.type) {
        case StatementOrderActionType.INCREASE:
            index = state[action.payload.position].indexOf(action.payload.id);
            if (index === 0) {return state}
            let tempIncrease = state[action.payload.position][index-1];
            state[action.payload.position][index-1] = state[action.payload.position][index];
            state[action.payload.position][index] = tempIncrease;
            return [...state];
        case StatementOrderActionType.DECREASE:
            index = state[action.payload.position].indexOf(action.payload.id);
            if (index === 2) {return state}
            let tempDecrease = state[action.payload.position][index+1];
            state[action.payload.position][index+1] = state[action.payload.position][index];
            state[action.payload.position][index] = tempDecrease;
            return [...state];
        case StatementOrderActionType.ADD:
            return [...state, [1,2,3]];
        default:
            return state
    }
};