import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from './redux'

export const QuestionsData = () => {
    const dispatch = useDispatch();
    const { social, creative, practical } = bindActionCreators(actionCreators, dispatch);
    const statements1 = [
        {
            id: 1,
            title: 'Sosial',
            characteristic: social,
            initCharacteristicPoints: 3
        },
        {
            id: 2,
            title: 'Praktisk',
            characteristic: practical,
            initCharacteristicPoints: 2
        },
        {
            id: 3,
            title: 'Kreativ',
            characteristic: creative,
            initCharacteristicPoints: 1
        },
        {
            id: 4,
            title: 'Sosial',
            characteristic: social,
            initCharacteristicPoints: -1
        },
        {
            id: 5,
            title: 'Praktisk',
            characteristic: practical,
            initCharacteristicPoints: -2
        },
        {
            id: 6,
            title: 'Kreativ',
            characteristic: creative,
            initCharacteristicPoints: -3
        },
    ];
    return [
        {
            questionNumber: 1,
            questionTxt: "Sett påstandene i rekkefølge etter hva du mener er viktigst",
            progress: 14.3,
            characteristic: social,
            isStatement: true,
            statementArr: statements1
        },
        {
            questionNumber: 2,
            questionTxt: "Jeg er flink til å tenke utenfor boksen og komme opp med nye løsninger",
            progress: 28.6,
            characteristic: creative,
            isStatement: false,
        },
        {
            questionNumber: 3,
            questionTxt: "Jeg liker å skape ting og jobbe med et produkt jeg kan se",
            progress: 42.9,
            characteristic: practical,
            isStatement: false,
        },
        {
            questionNumber: 4,
            questionTxt: "Jeg er god til å prate for meg selv",
            progress: 57.2,
            characteristic: social,
            isStatement: false,
        },
        {
            questionNumber: 5,
            questionTxt: "Jeg liker å planlegge godt når jeg jobber med oppgaver",
            progress: 71.5,
            characteristic: practical,
            isStatement: false,
        },
        {
            questionNumber: 6,
            questionTxt: "Jeg jobber best med oppgaver alene",
            progress: 85.8,
            characteristic: social,
            isStatement: false,
        },
        {
            questionNumber:7,
            questionTxt: "Jeg liker å jobbe innenfor klare rammer så jeg vet hva jeg skal gjøre",
            progress: 100,
            characteristic: creative,
            isStatement: false,
        },
    ];
};