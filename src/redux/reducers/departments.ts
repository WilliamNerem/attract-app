import { DepartmentsAction, DepartmentsActionType } from '..';

export const initialState = {
    departmentArr: [
        {department: DepartmentsActionType.STRATEGYANDCONSULTING, points: 0},
        {department: DepartmentsActionType.TECHNOLOGY, points: 0},
        {department: DepartmentsActionType.INTERACTIVE, points: 0},
    ]
};

export const departmentsReducer = (state: {department: string, points: number}[] = initialState.departmentArr, action: DepartmentsAction) => {
    switch (action.type) {
        case DepartmentsActionType.STRATEGYANDCONSULTING:
            state[0].points += action.payload;
            return state;
        case DepartmentsActionType.TECHNOLOGY:
            state[1].points += action.payload;
            return state;
        case DepartmentsActionType.INTERACTIVE:
            state[2].points += action.payload;
            return state;
        default:
            return state
    }
};