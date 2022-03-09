import {
    AlgorithmActionType,
    DepartmentsActionType,
    InitializeStatementOrderActionType,
    LikertActionType,
    QuestionActionType,
    ResetStatesActionType,
    StatementOrderActionType
} from "../actionTypes";
import {Dispatch} from "redux";
import {
    AlgorithmAction,
    DepartmentsAction,
    InitializeStatementOrderAction,
    LikertAction,
    QuestionAction,
    StatementOrderAction
} from "..";
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

export const strategyAndConsultingPoints = (points: number) => {
    return (dispatch: Dispatch<DepartmentsAction>) => {
        dispatch({
            type: DepartmentsActionType.STRATEGYANDCONSULTING,
            payload: points
        })
    }
};

export const technologyPoints = (points: number) => {
    return (dispatch: Dispatch<DepartmentsAction>) => {
        dispatch({
            type: DepartmentsActionType.TECHNOLOGY,
            payload: points
        })
    }
};

export const interactivePoints = (points: number) => {
    return (dispatch: Dispatch<DepartmentsAction>) => {
        dispatch({
            type: DepartmentsActionType.INTERACTIVE,
            payload: points
        })
    }
};