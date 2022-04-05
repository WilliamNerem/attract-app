import {
    AlgorithmActionType,
    DepartmentsActionType,
    ImageSelectorType,
    InitializeStatementOrderActionType,
    InteractiveSubdivisionActionType,
    IsInfoClickedActionType,
    LikertActionType,
    QuestionActionType,
    ResetStatesActionType,
    ShowAlertDialogActionType,
    StatementOrderActionType,
    StratSubdivisionActionType,
    ValgomatInProgressActionType
} from "../actionTypes";
import {Dispatch} from "redux";
import {
    AlgorithmAction,
    DepartmentsAction,
    ImageSelectorAction,
    ImageSelectorAnswerAction,
    InitializeStatementOrderAction,
    InteractiveSubDivisionActions,
    IsInfoClickedAction,
    LikertAction,
    QuestionAction,
    ShowAlertDialogAction,
    StatementOrderAction,
    StratSubDivisionActions,
    ValgomatInProgressAction
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
            type: AlgorithmActionType.PRACTICAL,
            payload : {
                value,
                isReversed
            }
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
            type: ImageSelectorType.CHECKED,
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

export const allocateStrat_CMTPoints = (points: number) => {
    return (dispatch: Dispatch<StratSubDivisionActions>) => {
        dispatch({
            type: StratSubdivisionActionType.CMT,
            payload: points
        })
    }
};

export const allocateStrat_FinancePoints = (points: number) => {
    return (dispatch: Dispatch<StratSubDivisionActions>) => {
        dispatch({
            type: StratSubdivisionActionType.FINANCE,
            payload: points
        })
    }
};

export const allocateStrat_Health_PublicPoints = (points: number) => {
    return (dispatch: Dispatch<StratSubDivisionActions>) => {
        dispatch({
            type: StratSubdivisionActionType.HEALTH_PUBLIC,
            payload: points
        })
    }
};

export const allocateStrat_ProductsPoints = (points: number) => {
    return (dispatch: Dispatch<StratSubDivisionActions>) => {
        dispatch({
            type: StratSubdivisionActionType.PRODUCTS,
            payload: points
        })
    }
};

export const allocateStrat_ResourcesPoints = (points: number) => {
    return (dispatch: Dispatch<StratSubDivisionActions>) => {
        dispatch({
            type: StratSubdivisionActionType.RESOURCES,
            payload: points
        })
    }
};

export const allocateInteractive_DesignPoints = (points: number) => {
    return (dispatch: Dispatch<InteractiveSubDivisionActions>) => {
        dispatch({
            type: InteractiveSubdivisionActionType.DESIGN,
            payload: points
        })
    }
};

export const allocateInteractive_BuildPoints = (points: number) => {
    return (dispatch: Dispatch<InteractiveSubDivisionActions>) => {
        dispatch({
            type: InteractiveSubdivisionActionType.BUILD,
            payload: points
        })
    }
};

export const allocateInteractive_CommunicationsPoints = (points: number) => {
    return (dispatch: Dispatch<InteractiveSubDivisionActions>) => {
        dispatch({
            type: InteractiveSubdivisionActionType.COMMUNICATIONS,
            payload: points
        })
    }
};