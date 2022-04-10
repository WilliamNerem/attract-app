export enum ImageSelectorAnswerType {
    CHECKED = 'checked',
}
interface checkedImageAction {
    type: ImageSelectorAnswerType.CHECKED
    questionNumber: number
    checked: number
}

export type ImageSelectorAnswerAction = checkedImageAction;

const initialState = {
    answers: []
};

export const imageSelectorAnswerReducer = (state: {questionNumber: number, checked: number}[] = initialState.answers, action: ImageSelectorAnswerAction) => {
    switch (action.type) {
        case ImageSelectorAnswerType.CHECKED:
            for (let i = 0; i < state.length; i++){
                if (state[i].questionNumber === action.questionNumber){
                    state[i].checked = action.checked;
                    return [...state]
                }
            }
            const object = {questionNumber: action.questionNumber, checked: action.checked};
            return [...state, object];
        default:
            return state
    }
};