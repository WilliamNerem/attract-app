import { InteractiveSubdivisionActionType } from "../actionTypes";

interface interactive_DesignAction {
    type: InteractiveSubdivisionActionType.DESIGN
    payload: number
}

interface interactive_BuildAction {
    type: InteractiveSubdivisionActionType.BUILD
    payload: number
}

interface interactive_CommunicationsAction {
    type: InteractiveSubdivisionActionType.COMMUNICATIONS
    payload: number
}

export type InteractiveSubDivisionActions = interactive_DesignAction | interactive_BuildAction | interactive_CommunicationsAction;