import { StratSubdivisionActionType } from "../actionTypes";

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