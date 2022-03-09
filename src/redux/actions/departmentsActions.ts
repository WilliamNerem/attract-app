import { DepartmentsActionType } from "../actionTypes";

interface strategyAndConsultingAction {
    type: DepartmentsActionType.STRATEGYANDCONSULTING
    payload: number
}

interface technologyAction {
    type: DepartmentsActionType.TECHNOLOGY
    payload: number
}

interface interactiveAction {
    type: DepartmentsActionType.INTERACTIVE
    payload: number
}

export type DepartmentsAction = strategyAndConsultingAction | technologyAction | interactiveAction;