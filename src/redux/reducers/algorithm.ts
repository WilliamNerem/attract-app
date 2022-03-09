import {AlgorithmAction, AlgorithmActionType} from '..';

export const initialState = {
    algorithmArr: [5, 5, 5]
};

export const algorithmReducer = (state: number[] = initialState.algorithmArr, action: AlgorithmAction) => {
    switch (action.type) {
        case AlgorithmActionType.SOCIAL:
            if(action.payload.isReversed) {
                state[0] = state[0] - action.payload.value;
            }
            else {
                state[0] = state[0] + action.payload.value;
            }
            return [...state];
        case AlgorithmActionType.CREATIVE:
            if(action.payload.isReversed) {
                state[1] = state[1] - action.payload.value;
            }
            else {
                state[1] = state[1] + action.payload.value;
            }
            return [...state];
        case AlgorithmActionType.PRACTICAL:
            if(action.payload.isReversed) {
                state[2] = state[2] - action.payload.value;
            }
            else {
                state[2] = state[2] + action.payload.value;
            }
            return [...state];
        default:
            return state
    }
};