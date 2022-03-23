import {IsInfoClickedActionType} from '..';
import {IsInfoClickedAction} from "..";

const initialState = false;

export const isInfoClickedReducer = (state: boolean = initialState, action: IsInfoClickedAction) => {
    switch (action.type) {
        case IsInfoClickedActionType.ISINFOCLICKED:
            return action.payload;
        default:
            return state
    }
};