import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from './redux'

export const QuestionsData = () => {
    const dispatch = useDispatch();
    const { social, creative, practical } = bindActionCreators(actionCreators, dispatch);
    return [
        {
            questionNumber: 1,
            questionTxt: "Dette er spørsmål 1? SOSIAL",
            progress: 25,
            characteristic: social,
            isStatement: true,
        },
        {
            questionNumber: 2,
            questionTxt: "Dette er spørsmål 2? KREATIV",
            progress: 50,
            characteristic: creative,
            isStatement: false,
        },
        {
            questionNumber: 3,
            questionTxt: "Dette er spørsmål 3? PRAKTISK",
            progress: 75,
            characteristic: practical,
            isStatement: false,
        },
        {
            questionNumber: 4,
            questionTxt: "Dette er spørsmål 4? SOSIAL",
            progress: 100,
            characteristic: social,
            isStatement: false,
        },
    ];
};