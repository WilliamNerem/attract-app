import { AlgorithmActionType } from "../actionTypes";

interface socialAction {
    type: AlgorithmActionType.SOCIAL
    payload: {
        value: number
        isReversed: boolean
    }
}

interface creativeAction {
    type: AlgorithmActionType.CREATIVE
    payload: {
        value: number
        isReversed: boolean
    }
}

interface practicalAction {
    type: AlgorithmActionType.PRACTICAL
    payload: {
        value: number
        isReversed: boolean
    }
}

export type AlgorithmAction = socialAction | creativeAction | practicalAction;