import { ShowAlertDialogActionType, ShowAlertDialogAction } from '..';

const initialState = false;

export const showAlertDialogReducer = (state: boolean = initialState, action: ShowAlertDialogAction) => {
    switch (action.type) {
        case ShowAlertDialogActionType.SHOWALERTDIALOG:
            return action.payload;
        default:
            return state
    }
};