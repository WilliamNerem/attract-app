import {LikertAction, LikertActionType} from '..';

export const initialState = {
    answers: []
};

export const likertAnswerReducer = (state: number[] = initialState.answers, action: LikertAction) => {
    switch (action.type) {
        case LikertActionType.STRONGLY_DISAGREE:
            if (action.questionNumber <= state.length){
                state[action.questionNumber-1] = action.payload;
                return [...state]
            }
            return [...state, action.payload];
        case LikertActionType.MODERATLY_DISAGREE:
            if (action.questionNumber <= state.length){
                state[action.questionNumber-1] = action.payload;
                return [...state]
            }
            return [...state, action.payload];
        case LikertActionType.NEUTRAL:
            if (action.questionNumber <= state.length){
                state[action.questionNumber-1] = action.payload;
                return [...state]
            }
            return [...state, action.payload];
        case LikertActionType.MODERATLY_AGREE:
            if (action.questionNumber <= state.length){
                state[action.questionNumber-1] = action.payload;
                return [...state]
            }
            return [...state, action.payload];
        case LikertActionType.STRONGLY_AGREE:
            if (action.questionNumber <= state.length){
                state[action.questionNumber-1] = action.payload;
                return [...state]
            }
            return [...state, action.payload];
        default:
            return state
    }
};