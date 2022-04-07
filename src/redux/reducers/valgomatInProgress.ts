export enum ValgomatInProgressActionType {
    VALGOMATINPROGRESS = 'valgomatInProgress'
}

interface valgomatInProgress {
    type: ValgomatInProgressActionType.VALGOMATINPROGRESS
    payload: boolean
}

export type ValgomatInProgressAction = valgomatInProgress;

const initialState = false;

export const valgomatInProgressReducer = (state: boolean = initialState, action: ValgomatInProgressAction) => {
    switch (action.type) {
        case ValgomatInProgressActionType.VALGOMATINPROGRESS:
            return action.payload;
        default:
            return state
    }
};