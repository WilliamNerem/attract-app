import { StratSubDivisionActions, StratSubdivisionActionType } from '..';

export const initialState = {
    subdivisionArr: [
        {subdivision: StratSubdivisionActionType.CMT, points: 0},
        {subdivision: StratSubdivisionActionType.FINANCE, points: 0},
        {subdivision: StratSubdivisionActionType.HEALTH_PUBLIC, points: 0},
        {subdivision: StratSubdivisionActionType.PRODUCTS, points: 0},
        {subdivision: StratSubdivisionActionType.RESOURCES, points: 0},
    ]
};

export const stratSubdivisionReducer = (state: {subdivision: string, points: number}[] = initialState.subdivisionArr, action: StratSubDivisionActions) => {
    switch (action.type) {
        case StratSubdivisionActionType.CMT:
            state[0].points += action.payload;
            return state;
        case StratSubdivisionActionType.FINANCE:
            state[1].points += action.payload;
            return state;
        case StratSubdivisionActionType.HEALTH_PUBLIC:
            state[2].points += action.payload;
            return state;
        case StratSubdivisionActionType.PRODUCTS:
            state[3].points += action.payload;
            return state;
        case StratSubdivisionActionType.RESOURCES:
            state[4].points += action.payload;
            return state;
        default:
            return state
    }
};