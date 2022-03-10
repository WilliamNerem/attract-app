import {ValgomatInProgressAction, ValgomatInProgressActionType} from '..';

const initialState = false;

export const valgomatInProgressReducer = (state: boolean = initialState, action: ValgomatInProgressAction) => {
    switch (action.type) {
        case ValgomatInProgressActionType.VALGOMATINPROGRESS:
            return action.payload;
        default:
            return state
    }
};