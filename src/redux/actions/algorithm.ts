import { AlgorithmActionType } from "../actionTypes";

interface socialAction {
    type: AlgorithmActionType.SOCIAL
    payload: number
}

interface creativeAction {
    type: AlgorithmActionType.CREATIVE
    payload: number
}

interface practicalAction {
    type: AlgorithmActionType.PRACTICAL
    payload: number
}

export type AlgorithmAction = socialAction | creativeAction | practicalAction;