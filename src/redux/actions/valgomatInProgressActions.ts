import { ValgomatInProgressActionType } from "../actionTypes";

interface valgomatInProgress {
    type: ValgomatInProgressActionType.VALGOMATINPROGRESS
    payload: boolean
}

export type ValgomatInProgressAction = valgomatInProgress;