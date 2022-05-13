import { Dispatch } from "redux";
import { AlgorithmAction, AlgorithmActionType } from '../reducers/algorithm';
import { DepartmentsAction, DepartmentsActionType } from '../reducers/departments';
import { ImageSelectorType, ImageSelectorAction } from '../reducers/imageSelector';
import { ImageSelectorAnswerType, ImageSelectorAnswerAction } from '../reducers/imageSelectorAnswers';
import { InitializeStatementOrderActionType, InitializeStatementOrderAction } from '../reducers/initializeStatementOrder';
import { IsInfoClickedActionType, IsInfoClickedAction } from '../reducers/isInfoClicked';
import { LikertActionType, LikertAction } from '../reducers/likert';
import { QuestionActionType, QuestionAction } from '../reducers/questions';
import { ShowAlertDialogActionType, ShowAlertDialogAction } from '../reducers/showAlertDialog';
import { StatementOrderActionType, StatementOrderAction } from '../reducers/statementOrder';
import { ValgomatInProgressActionType, ValgomatInProgressAction } from '../reducers/valgomatInProgress';
import { ResetStatesAction, ResetStatesActionType } from "../reducers";

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

export const setCounter = (counter: number) => {
    return (dispatch: Dispatch<QuestionAction>) => {
        dispatch({
            type: QuestionActionType.SETCOUNTER,
            payload: counter
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

export const reset = () => {
    return (dispatch: Dispatch<LikertAction>) => {
        dispatch({
            type: LikertActionType.RESET,
        })
    }
};

export const social = (value: number) => {
    return (dispatch: Dispatch<AlgorithmAction>) => {
        dispatch({
            type: AlgorithmActionType.SOCIAL,
            payload: value
        })
    }
};

export const creative = (value: number) => {
    return (dispatch: Dispatch<AlgorithmAction>) => {
        dispatch({
            type: AlgorithmActionType.CREATIVE,
            payload: value
        })
    }
};

export const practical = (value: number) => {
    return (dispatch: Dispatch<AlgorithmAction>) => {
        dispatch({
            type: AlgorithmActionType.PRACTICAL,
            payload: value
        })
    }
};

export const imageSelectorStrategyAndConsulting = (points: number) => {
    return (dispatch: Dispatch<ImageSelectorAction>) => {
        dispatch({
            type: ImageSelectorType.STRATEGYANDCONSULTING,
            payload: points
        })
    }
};

export const imageSelectorTechnology = (points: number) => {
    return (dispatch: Dispatch<ImageSelectorAction>) => {
        dispatch({
            type: ImageSelectorType.TECHNOLOGY,
            payload: points
        })
    }
};

export const imageSelectorInteractive = (points: number) => {
    return (dispatch: Dispatch<ImageSelectorAction>) => {
        dispatch({
            type: ImageSelectorType.INTERACTIVE,
            payload: points
        })
    }
};

export const imageSelectorSocial = (points: number) => {
    return (dispatch: Dispatch<ImageSelectorAction>) => {
        dispatch({
            type: ImageSelectorType.SOCIAL,
            payload: points
        })
    }
};

export const imageSelectorCreative = (points: number) => {
    return (dispatch: Dispatch<ImageSelectorAction>) => {
        dispatch({
            type: ImageSelectorType.CREATIVE,
            payload: points
        })
    }
};

export const imageSelectorPractical = (points: number) => {
    return (dispatch: Dispatch<ImageSelectorAction>) => {
        dispatch({
            type: ImageSelectorType.PRACTICAL,
            payload: points
        })
    }
};

export const imageSelectorChecked = (questionNumber: number, checked: number) => {
    return (dispatch: Dispatch<ImageSelectorAnswerAction>) => {
        dispatch({
            type: ImageSelectorAnswerType.CHECKED,
            questionNumber: questionNumber,
            checked: checked
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

export const resetStratSubDivision = () => {
    return (dispatch: Dispatch<ResetStatesAction>) => {
        dispatch({
            type: ResetStatesActionType.RESET_STRAT_SUBDIVISON
        })
    }
};

export const resetIntSubDivision = () => {
    return (dispatch: Dispatch<ResetStatesAction>) => {
        dispatch({
            type: ResetStatesActionType.RESET_INT_SUBDIVISON
        })
    }
};

export const increaseStatementOrder = (id: number, position: number) => {
    return (dispatch: Dispatch<StatementOrderAction>) => {
        dispatch({
            type: StatementOrderActionType.INCREASE,
            payload: {
                id,
                position
            }
        })
    }
};

export const decreaseStatementOrder = (id: number, position: number) => {
    return (dispatch: Dispatch<StatementOrderAction>) => {
        dispatch({
            type: StatementOrderActionType.DECREASE,
            payload: {
                id,
                position
            }
        })
    }
};

export const addStatementOrder = () => {
    return (dispatch: Dispatch<StatementOrderAction>) => {
        dispatch({
            type: StatementOrderActionType.ADD
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

export const valgomatIsInProgress = (inAction: boolean) => {
    return (dispatch: Dispatch<ValgomatInProgressAction>) => {
        dispatch({
            type: ValgomatInProgressActionType.VALGOMATINPROGRESS,
            payload: inAction
        })
    }
};

export const showAlertDialog = (inAction: boolean) => {
    return (dispatch: Dispatch<ShowAlertDialogAction>) => {
        dispatch({
            type: ShowAlertDialogActionType.SHOWALERTDIALOG,
            payload: inAction
        })
    }
};

export const isInfoClicked = (inAction: boolean) => {
    return (dispatch: Dispatch<IsInfoClickedAction>) => {
        dispatch({
            type: IsInfoClickedActionType.ISINFOCLICKED,
            payload: inAction
        })
    }
};
