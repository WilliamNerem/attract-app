export enum SubValgomatInProgressActionType {
    SUBVALGOMATINPROGRESS = 'subValgomatInProgress'
}

interface subValgomatInProgress {
    type: SubValgomatInProgressActionType.SUBVALGOMATINPROGRESS
    payload: boolean
}

export type SubValgomatInProgressAction = subValgomatInProgress;

const initialState = false;

export const subValgomatInProgressReducer = (state: boolean = initialState, action: SubValgomatInProgressAction) => {
    switch (action.type) {
        case SubValgomatInProgressActionType.SUBVALGOMATINPROGRESS:
            return action.payload;
        default:
            return state
    }
};