import { InteractiveSubDivisionActions, InteractiveSubdivisionActionType } from '..';

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