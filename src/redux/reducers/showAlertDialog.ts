export enum ShowAlertDialogActionType {
    SHOWALERTDIALOG = 'showAlertDialog'
}
interface showAlertDialog {
    type: ShowAlertDialogActionType.SHOWALERTDIALOG
    payload: boolean
}

export type ShowAlertDialogAction = showAlertDialog;

const initialState = false;

export const showAlertDialogReducer = (state: boolean = initialState, action: ShowAlertDialogAction) => {
    switch (action.type) {
        case ShowAlertDialogActionType.SHOWALERTDIALOG:
            return action.payload;
        default:
            return state
    }
};