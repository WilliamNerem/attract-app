import {AlgorithmActionType, LikertActionType, QuestionActionType, ResetStatesActionType} from "../actionTypes";
import {Dispatch} from "redux";
import {AlgorithmAction, LikertAction, QuestionAction} from "..";
import {ResetStatesAction} from "../actions/resetStatesAction";

export const increaseCounter = () => {
    return (dispatch: Dispatch<QuestionAction>) => {
        dispatch({
            type: QuestionActionType.INCREASE,
            payload: 1
        })
    }
};

export const decreaseCounter = () => {
    return (dispatch: Dispatch<QuestionAction>) => {
        dispatch({
            type: QuestionActionType.DECREASE,
            payload: 1
        })
    }
};

export const stronglyDisagree = (questionNumber: number) => {
    return (dispatch: Dispatch<LikertAction>) => {
        dispatch({
            type: LikertActionType.STRONGLY_DISAGREE,
            payload: 1,
            questionNumber: questionNumber
        })
    }
};

export const moderatlyDisagree = (questionNumber: number) => {
    return (dispatch: Dispatch<LikertAction>) => {
        dispatch({
            type: LikertActionType.MODERATLY_DISAGREE,
            payload: 2,
            questionNumber: questionNumber
        })
    }
};

export const neutral = (questionNumber: number) => {
    return (dispatch: Dispatch<LikertAction>) => {
        dispatch({
            type: LikertActionType.NEUTRAL,
            payload: 3,
            questionNumber: questionNumber
        })
    }
};

export const moderatlyAgree = (questionNumber: number) => {
    return (dispatch: Dispatch<LikertAction>) => {
        dispatch({
            type: LikertActionType.MODERATLY_AGREE,
            payload: 4,
            questionNumber: questionNumber
        })
    }
};

export const stronglyAgree = (questionNumber: number) => {
    return (dispatch: Dispatch<LikertAction>) => {
        dispatch({
            type: LikertActionType.STRONGLY_AGREE,
            payload: 5,
            questionNumber: questionNumber
        })
    }
};

export const social = (points: number) => {
    return (dispatch: Dispatch<AlgorithmAction>) => {
        dispatch({
            type: AlgorithmActionType.SOCIAL,
            payload: points
        })
    }
};

export const creative = (points: number) => {
    return (dispatch: Dispatch<AlgorithmAction>) => {
        dispatch({
            type: AlgorithmActionType.CREATIVE,
            payload: points
        })
    }
};

export const practical = (points: number) => {
    return (dispatch: Dispatch<AlgorithmAction>) => {
        dispatch({
            type: AlgorithmActionType.PRACTICAL,
            payload: points
        })
    }
};

export const resetStates = () => {
    return (dispatch: Dispatch<ResetStatesAction>) => {
        dispatch({
            type: ResetStatesActionType.RESET_STATES
        })
    }
};