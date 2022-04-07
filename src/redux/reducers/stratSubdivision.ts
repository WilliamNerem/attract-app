export enum StratSubdivisionActionType {
    CMT = 'communicationMediaTechnology',
    FINANCE = 'financialServices',
    HEALTH_PUBLIC = 'health&publicServices',
    PRODUCTS = 'products',
    RESOURCES = 'resources'
}

interface strategy_CMTAction {
    type: StratSubdivisionActionType.CMT
    payload: number
}

interface strategy_financeAction {
    type: StratSubdivisionActionType.FINANCE
    payload: number
}

interface strategy_Health_PublicAction {
    type: StratSubdivisionActionType.HEALTH_PUBLIC
    payload: number
}

interface strategy_ProductsAction {
    type: StratSubdivisionActionType.PRODUCTS
    payload: number
}

interface strategy_ResourcesAction {
    type: StratSubdivisionActionType.RESOURCES
    payload: number
}

export type StratSubDivisionActions = strategy_CMTAction | strategy_financeAction | strategy_Health_PublicAction | strategy_ProductsAction | strategy_ResourcesAction;

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