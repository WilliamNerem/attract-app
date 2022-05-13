export enum AlgorithmActionType {
    SOCIAL = 'social',
    CREATIVE = 'creative',
    PRACTICAL = 'practical'
}

interface socialAction {
    type: AlgorithmActionType.SOCIAL
    payload: number
}

interface creativeAction {
    type: AlgorithmActionType.CREATIVE
    payload: number
}

interface practicalAction {
    type: AlgorithmActionType.PRACTICAL
    payload: number
}

export type AlgorithmAction = socialAction | creativeAction | practicalAction;

const initialState = {
    algorithmArr: [5, 5, 5]
};

export const algorithmReducer = (state: number[] = initialState.algorithmArr, action: AlgorithmAction) => {
    switch (action.type) {
        case AlgorithmActionType.SOCIAL:
            state[0] = state[0] + action.payload;
            return [...state];
        case AlgorithmActionType.CREATIVE:
            state[1] = state[1] + action.payload;
            return [...state];
        case AlgorithmActionType.PRACTICAL:
            state[2] = state[2] + action.payload;
            return [...state];
        default:
            return state
    }
};