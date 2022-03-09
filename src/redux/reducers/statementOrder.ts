import {StatementOrderAction, StatementOrderActionType} from '..';

export const initialState = {
    statementOrderArr: [1, 2, 3, 4, 5, 6]
};

export const statementOrderReducer = (state: number[] = initialState.statementOrderArr, action: StatementOrderAction) => {
    const index = state.indexOf(action.payload);
    switch (action.type) {
        case StatementOrderActionType.INCREASE:
            if (index === 0) {return state}
            let tempIncrease = state[index-1];
            state[index-1] = state[index];
            state[index] = tempIncrease;
            return [...state];
        case StatementOrderActionType.DECREASE:
            if (index === 5) {return state}
            let tempDecrease = state[index+1];
            state[index+1] = state[index];
            state[index] = tempDecrease;
            return [...state];
        default:
            return state
    }
};