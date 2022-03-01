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
            return state[0].points = state[0].points + action.payload;
        case AlgorithmActionType.CREATIVE:
            return state[1].points = state[1].points + action.payload;
        case AlgorithmActionType.PRACTICAL:
            return state[2].points = state[2].points + action.payload;
    }
};