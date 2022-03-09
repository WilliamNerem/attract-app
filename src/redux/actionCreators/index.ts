import {
    AlgorithmActionType, InitializeStatementOrderActionType,
    LikertActionType,
    QuestionActionType,
    ResetStatesActionType,
    StatementOrderActionType
} from "../actionTypes";
import {Dispatch} from "redux";
import {AlgorithmAction, InitializeStatementOrderAction, LikertAction, QuestionAction} from "..";
import {ResetStatesAction} from "../actions/resetStatesAction";
import {StatementOrderAction} from "..";

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

export const social = (value: number, isReversed: boolean) => {
    return (dispatch: Dispatch<AlgorithmAction>) => {
        dispatch({
            type: AlgorithmActionType.SOCIAL,
            payload : {
                value,
                isReversed
            }
        })
    }
};

export const creative = (value: number, isReversed: boolean) => {
    return (dispatch: Dispatch<AlgorithmAction>) => {
        dispatch({
            type: AlgorithmActionType.CREATIVE,
            payload : {
                value,
                isReversed
            }
        })
    }
};

export const practical = (value: number, isReversed: boolean) => {
    return (dispatch: Dispatch<AlgorithmAction>) => {
        dispatch({
            type: AlgorithmActionType.CREATIVE,
            payload : {
                value,
                isReversed
            }
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

export const increaseStatementOrder = (id: number) => {
    return (dispatch: Dispatch<StatementOrderAction>) => {
        dispatch({
            type: StatementOrderActionType.INCREASE,
            payload: id
        })
    }
};

export const decreaseStatementOrder = (id: number) => {
    return (dispatch: Dispatch<StatementOrderAction>) => {
        dispatch({
            type: StatementOrderActionType.DECREASE,
            payload: id
        })
    }
};

export const initializeStatementOrder = (id: number) => {
    return (dispatch: Dispatch<InitializeStatementOrderAction>) => {
        dispatch({
            type: InitializeStatementOrderActionType.INITIALIZE,
            payload: {
                number: id,
                isInitialized: true
            }
        })
    }
};