export enum QuestionActionType {
    INCREASE = 'increase',
    DECREASE = 'decrease',
    SETCOUNTER = 'setCounter'
}

export enum LikertActionType {
    STRONGLY_DISAGREE = 'strongly_disagree',
    MODERATLY_DISAGREE = 'moderatly_disagree',
    NEUTRAL = 'neutral',
    MODERATLY_AGREE = 'moderatly_agree',
    STRONGLY_AGREE = 'strongly_agree'
}

export enum AlgorithmActionType {
    SOCIAL = 'social',
    CREATIVE = 'creative',
    PRACTICAL = 'practical'
}

export enum ResetStatesActionType {
    RESET_STATES = 'resetStates'
}

export enum StatementOrderActionType {
    INCREASE = 'increaseStatementOrder',
    DECREASE = 'decreaseStatementOrder',
    ADD = 'add'
}

export enum InitializeStatementOrderActionType {
    INITIALIZE = 'initialize'
}

export enum DepartmentsActionType {
    STRATEGYANDCONSULTING = 'strategyAndConsulting',
    TECHNOLOGY = 'technology',
    INTERACTIVE = 'interactive'
}

export enum ValgomatInProgressActionType {
    VALGOMATINPROGRESS = 'valgomatInProgress'
}

export enum ShowAlertDialogActionType {
    SHOWALERTDIALOG = 'showAlertDialog'
}