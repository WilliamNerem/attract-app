export enum LikertActionType {
    STRONGLY_DISAGREE = 'strongly_disagree',
    MODERATLY_DISAGREE = 'moderatly_disagree',
    NEUTRAL = 'neutral',
    MODERATLY_AGREE = 'moderatly_agree',
    STRONGLY_AGREE = 'strongly_agree',
    RESET = 'reset'
}

interface stronglyDisagreeAction {
    type: LikertActionType.STRONGLY_DISAGREE
    payload: number
    questionNumber: number
}

interface moderatlyDisagreeAction {
    type: LikertActionType.MODERATLY_DISAGREE
    payload: number
    questionNumber: number
}

interface neutralAction {
    type: LikertActionType.NEUTRAL
    payload: number
    questionNumber: number
}

interface moderatlyAgreeAction {
    type: LikertActionType.MODERATLY_AGREE
    payload: number
    questionNumber: number
}

interface stronglyAgreeAction {
    type: LikertActionType.STRONGLY_AGREE
    payload: number
    questionNumber: number
}

interface reset {
    type: LikertActionType.RESET
}

export type LikertAction = stronglyDisagreeAction | moderatlyDisagreeAction | neutralAction | moderatlyAgreeAction | stronglyAgreeAction | reset;

const initialState = {
    answers: []
};

export const likertAnswerReducer = (state: number[] = initialState.answers, action: LikertAction) => {
    switch (action.type) {
        case LikertActionType.STRONGLY_DISAGREE:
            if (action.questionNumber <= state.length) {
                state[action.questionNumber - 1] = action.payload;
                return [...state]
            }
            return [...state, action.payload];
        case LikertActionType.MODERATLY_DISAGREE:
            if (action.questionNumber <= state.length) {
                state[action.questionNumber - 1] = action.payload;
                return [...state]
            }
            return [...state, action.payload];
        case LikertActionType.NEUTRAL:
            if (action.questionNumber <= state.length) {
                state[action.questionNumber - 1] = action.payload;
                return [...state]
            }
            return [...state, action.payload];
        case LikertActionType.MODERATLY_AGREE:
            if (action.questionNumber <= state.length) {
                state[action.questionNumber - 1] = action.payload;
                return [...state]
            }
            return [...state, action.payload];
        case LikertActionType.STRONGLY_AGREE:
            if (action.questionNumber <= state.length) {
                state[action.questionNumber - 1] = action.payload;
                return [...state]
            }
            return [...state, action.payload];
        case LikertActionType.RESET:
            return [];
        default:
            return state
    }
};