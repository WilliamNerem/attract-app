import { QuestionActionType } from "../actionTypes";
import { Dispatch } from "redux";
import { QuestionAction } from "..";

export const increaseCounter = () => {
    return (dispatch: Dispatch<QuestionAction>) => {
        dispatch({
            type: QuestionActionType.INCREASE,
            payload: 1
        })
    }
};

export const decreaseCounter = () => {
    return (dispatch: Dispatch<QuestionAction>) => {
        dispatch({
            type: QuestionActionType.DECREASE,
            payload: 1
        })
    }
};