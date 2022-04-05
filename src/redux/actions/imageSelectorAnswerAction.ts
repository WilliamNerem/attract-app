import {ImageSelectorType} from "../actionTypes";

interface checkedImageAction {
    type: ImageSelectorType.CHECKED
    questionNumber: number
    checked: number
}

export type ImageSelectorAnswerAction = checkedImageAction;