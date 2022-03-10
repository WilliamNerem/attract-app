import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from './redux'

export const QuestionsData = () => {
    const dispatch = useDispatch();
    const { social, creative, practical, strategyAndConsultingPoints, technologyPoints, interactivePoints } = bindActionCreators(actionCreators, dispatch);
    const statements1 = [
        {
            id: 1,
            title: 'Jeg synes det virker spennende å komme opp med nye idéer og jobbe videre med de',
            department: strategyAndConsultingPoints,
            initDepartmentPoints: 6
        },
        {
            id: 2,
            title: 'Jeg synes det er spennende å sette meg inn i nye teknologier',
            department: technologyPoints,
            initDepartmentPoints: 5
        },
        {
            id: 3,
            title: 'Jeg synes design er spennende',
            department: interactivePoints,
            initDepartmentPoints: 4
        },
        {
            id: 4,
            title: 'Jeg kunne tenkt meg å presentere og prøve å selge inn en idé til en kunde',
            department: strategyAndConsultingPoints,
            initDepartmentPoints: 3
        },
        {
            id: 5,
            title: 'Jeg kunne tenkt meg å være med å lage et produkt ut ifra en idé',
            department: technologyPoints,
            initDepartmentPoints: 2
        },
        {
            id: 6,
            title: 'Jeg kunne tenkt meg å jobbe med å forbedre brukeropplevelsen av et produkt',
            department: interactivePoints,
            initDepartmentPoints: 1
        },
    ];
    return [
        {
            questionNumber: 1,
            questionTxt: "Sett påstandene i rekkefølge etter hva som passer best for deg",
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