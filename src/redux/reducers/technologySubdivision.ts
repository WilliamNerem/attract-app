export enum TechnologySubdivisionActionType {
    CIE = 'cie',
    IPS = 'ips',
    IPD = 'ipd',
    SECURITY = 'security'
}

interface interactive_CIEAction {
    type: TechnologySubdivisionActionType.CIE
    payload: number
}

interface interactive_IPSAction {
    type: TechnologySubdivisionActionType.IPS
    payload: number
}

interface interactive_IPDAction {
    type: TechnologySubdivisionActionType.IPD
    payload: number
}

interface interactive_SecurityAction {
    type: TechnologySubdivisionActionType.SECURITY
    payload: number
}

export type TechnologySubDivisionActions = interactive_CIEAction | interactive_IPSAction | interactive_IPDAction | interactive_SecurityAction;

export const initialState = {
    subdivisionArr: [
        {subdivision: TechnologySubdivisionActionType.CIE, points: 0},
        {subdivision: TechnologySubdivisionActionType.IPS, points: 0},
        {subdivision: TechnologySubdivisionActionType.IPD, points: 0},
        {subdivision: TechnologySubdivisionActionType.SECURITY, points: 0},
    ]
};

export const technologySubdivisionReducer = (state: {subdivision: string, points: number}[] = initialState.subdivisionArr, action: TechnologySubDivisionActions) => {
    switch (action.type) {
        case TechnologySubdivisionActionType.CIE:
            state[0].points += action.payload;
            return state;
        case TechnologySubdivisionActionType.IPS:
            state[1].points += action.payload;
            return state;
        case TechnologySubdivisionActionType.IPD:
            state[2].points += action.payload;
            return state;
        case TechnologySubdivisionActionType.SECURITY:
            state[3].points += action.payload;
            return state;
        default:
            return state
    }
};