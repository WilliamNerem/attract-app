export enum InteractiveSubdivisionActionType {
    DESIGN = 'design',
    BUILD = 'build',
    COMMUNICATIONS = 'communications'
}

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

export const initialState = {
    subdivisionArr: [
        {subdivision: InteractiveSubdivisionActionType.DESIGN, points: 0},
        {subdivision: InteractiveSubdivisionActionType.BUILD, points: 0},
        {subdivision: InteractiveSubdivisionActionType.COMMUNICATIONS, points: 0},
    ]
};

export const interactiveSubdivisionReducer = (state: {subdivision: string, points: number}[] = initialState.subdivisionArr, action: InteractiveSubDivisionActions) => {
    switch (action.type) {
        case InteractiveSubdivisionActionType.DESIGN:
            state[0].points += action.payload;
            return state;
        case InteractiveSubdivisionActionType.BUILD:
            state[1].points += action.payload;
            return state;
        case InteractiveSubdivisionActionType.COMMUNICATIONS:
            state[2].points += action.payload;
            return state;
        default:
            return state
    }
};