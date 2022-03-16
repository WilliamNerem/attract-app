import { ShowAlertDialogActionType } from "../actionTypes";

interface showAlertDialog {
    type: ShowAlertDialogActionType.SHOWALERTDIALOG
    payload: boolean
}

export type ShowAlertDialogAction = showAlertDialog;