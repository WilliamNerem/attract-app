import { IsInfoClickedActionType } from "../actionTypes";

interface isInfoClicked {
    type: IsInfoClickedActionType.ISINFOCLICKED
    payload: boolean
}

export type IsInfoClickedAction = isInfoClicked;