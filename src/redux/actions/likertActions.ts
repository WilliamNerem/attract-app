import { LikertActionType } from "../actionTypes";

interface stronglyDisagreeAction {
    type: LikertActionType.STRONGLY_DISAGREE
    payload: number
    questionNumber: number
}

interface moderatlyDisagreeAction {
    type: LikertActionType.MODERATLY_DISAGREE
    payload: number
    questionNumber: number
}

interface neutralAction {
    type: LikertActionType.NEUTRAL
    payload: number
    questionNumber: number
}

interface moderatlyAgreeAction {
    type: LikertActionType.MODERATLY_AGREE
    payload: number
    questionNumber: number
}

interface stronglyAgreeAction {
    type: LikertActionType.STRONGLY_AGREE
    payload: number
    questionNumber: number
}

export type LikertAction = stronglyDisagreeAction | moderatlyDisagreeAction | neutralAction | moderatlyAgreeAction | stronglyAgreeAction;