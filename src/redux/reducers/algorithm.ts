import {AlgorithmAction, AlgorithmActionType} from '..';

export const initialState = {
    algoritmArr: [
        {
            name: AlgorithmActionType.SOCIAL,
            points: 5
        },
        {
            name: AlgorithmActionType.CREATIVE,
            points: 5
        },
        {
            name: AlgorithmActionType.PRACTICAL,
            points: 5
        }
        ]
};

export const algorithmReducer = (state: {name: string, points: number}[] = initialState.algoritmArr, action: AlgorithmAction) => {
    switch (action.type) {
        case AlgorithmActionType.SOCIAL:
            state[0].points = state[0].points + action.payload;
            return [...state];
        case AlgorithmActionType.CREATIVE:
            state[1].points = state[1].points + action.payload;
            return [...state];
        case AlgorithmActionType.PRACTICAL:
            state[2].points = state[2].points + action.payload;
            return [...state];
        default:
            return state
    }
};