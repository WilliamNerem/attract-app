export enum IsInfoClickedActionType {
    ISINFOCLICKED = 'isInfoClicked'
}

interface isInfoClicked {
    type: IsInfoClickedActionType.ISINFOCLICKED
    payload: boolean
}

export type IsInfoClickedAction = isInfoClicked;

const initialState = false;

export const isInfoClickedReducer = (state: boolean = initialState, action: IsInfoClickedAction) => {
    switch (action.type) {
        case IsInfoClickedActionType.ISINFOCLICKED:
            return action.payload;
        default:
            return state
    }
};