import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from './redux'

export const QuestionsData = () => {
    const dispatch = useDispatch();
    const { social, creative, practical, strategyAndConsultingPoints, technologyPoints, interactivePoints } = bindActionCreators(actionCreators, dispatch);
    const statements1 = [
        {
            id: 1,
            title: 'S&C 1',
            department: strategyAndConsultingPoints,
            initDepartmentPoints: 6
        },
        {
            id: 2,
            title: 'Tech 1',
            department: technologyPoints,
            initDepartmentPoints: 5
        },
        {
            id: 3,
            title: 'Int 1',
            department: interactivePoints,
            initDepartmentPoints: 4
        },
        {
            id: 4,
            title: 'S&C 2',
            department: strategyAndConsultingPoints,
            initDepartmentPoints: 3
        },
        {
            id: 5,
            title: 'Tech 2',
            department: technologyPoints,
            initDepartmentPoints: 2
        },
        {
            id: 6,
            title: 'Int 2',
            department: interactivePoints,
            initDepartmentPoints: 1
        },
    ];
    return [
        {
            questionNumber: 1,
            questionTxt: "Sett påstandene i rekkefølge etter hva du mener er viktigst",
            progress: 14.3,
            characteristic: social,
            isStatement: true,
            statementArr: statements1,
            isReversed: false
        },
        {
            questionNumber: 2,
            questionTxt: "Jeg liker å planlegge godt når jeg jobber med oppgaver",
            progress: 28.3,
            characteristic: practical,
            isStatement: false,
            isReversed: true
        },
        {
            questionNumber: 3,
            questionTxt: "Jeg liker å skape ting og jobbe med et produkt jeg kan se",
            progress: 42.9,
            characteristic: practical,
            isStatement: false,
            isReversed: false
        },
        {
            questionNumber: 4,
            questionTxt: "Jeg jobber best med oppgaver alene",
            progress: 57.2,
            characteristic: social,
            isStatement: false,
            isReversed: true
        },
        {
            questionNumber: 5,
            questionTxt: "Jeg er flink til å tenke utenfor boksen og komme opp med nye løsninger",
            progress: 71.5,
            characteristic: creative,
            isStatement: false,
            isReversed: false
        },
        {
            questionNumber:6,
            questionTxt: "Jeg liker å jobbe innenfor klare rammer så jeg vet hva jeg skal gjøre",
            progress: 85.8,
            characteristic: creative,
            isStatement: false,
            isReversed: true
        },
        {
            questionNumber: 7,
            questionTxt: "Jeg er god til å prate for meg selv",
            progress: 100,
            characteristic: social,
            isStatement: false,
            isReversed: false
        },
    ];
};