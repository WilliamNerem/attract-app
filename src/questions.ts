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
            initDepartmentPoints: 4
        },
        {
            id: 3,
            title: 'Jeg synes design er spennende',
            department: interactivePoints,
            initDepartmentPoints: 2
        }
    ];

    const statements2 = [
        {
            id: 1,
            title: 'Jeg kunne tenkt meg å være med å lage et produkt ut ifra en idé',
            department: technologyPoints,
            initDepartmentPoints: 6
        },
        {
            id: 2,
            title: 'Jeg kunne tenkt meg å presentere og prøve å selge inn en idé til en kunde',
            department: strategyAndConsultingPoints,
            initDepartmentPoints: 4
        },
        {
            id: 3,
            title: 'Jeg kunne tenkt meg å jobbe med å forbedre brukeropplevelsen av et produkt',
            department: interactivePoints,
            initDepartmentPoints: 2
        },
    ];

    return [
        {
            questionNumber: 1,
            questionType: 'likertScale',
            questionTxt: "Jeg liker å planlegge godt når jeg jobber med oppgaver",
            progress: 13,
            characteristic: practical,
            isStatement: false,
            isReversed: true
        },
        {
            questionNumber: 2,
            questionType: 'likertScale',
            questionTxt: "Jeg liker å skape ting og jobbe med et produkt jeg kan se",
            progress: 25,
            characteristic: practical,
            isStatement: false,
            isReversed: false
        },
        {
            questionNumber: 3,
            questionType: 'statementOrder',
            questionTxt: "Sett påstandene i rekkefølge etter hva som passer best for deg",
            progress: 38,
            characteristic: social,
            isStatement: true,
            statementArr: statements1,
            isReversed: false
        },
        {
            questionNumber: 4,
            questionType: 'likertScale',
            questionTxt: "Jeg jobber best med oppgaver alene",
            progress: 50,
            characteristic: social,
            isStatement: false,
            isReversed: true
        },
        {
            questionNumber: 5,
            questionType: 'likertScale',
            questionTxt: "Jeg er flink til å tenke utenfor boksen og komme opp med nye løsninger",
            progress: 63,
            characteristic: creative,
            isStatement: false,
            isReversed: false
        },
        {
            questionNumber: 6,
            questionType: 'statementOrder',
            questionTxt: "Sett påstandene i rekkefølge etter hva som passer best for deg",
            progress: 75,
            characteristic: social,
            isStatement: true,
            statementArr: statements2,
            isReversed: false
        },
        {
            questionNumber: 7,
            questionType: 'likertScale',
            questionTxt: "Jeg liker å jobbe innenfor klare rammer så jeg vet hva jeg skal gjøre",
            progress: 88,
            characteristic: creative,
            isStatement: false,
            isReversed: true
        },
        {
            questionNumber: 8,
            questionType: 'likertScale',
            questionTxt: "Jeg er god til å prate for meg selv",
            progress: 100,
            characteristic: social,
            isStatement: false,
            isReversed: false
        },
    ];
};

export const QuestionsDataTech = () => {
    const dispatch = useDispatch();
    const { social, creative, practical, strategyAndConsultingPoints, technologyPoints, interactivePoints } = bindActionCreators(actionCreators, dispatch);
    const statements1 = [
        {
            id: 1,
            title: 'Jeg liker Communcations',
            department: strategyAndConsultingPoints,
            initDepartmentPoints: 6
        },
        {
            id: 2,
            title: 'Jeg liker Build',
            department: technologyPoints,
            initDepartmentPoints: 4
        },
        {
            id: 3,
            title: 'Jeg liker Design',
            department: interactivePoints,
            initDepartmentPoints: 2
        }
    ];

    return [
        {
            questionNumber: 21,
            questionType: 'likertScale',
            questionTxt: "Dette er om Tech sin første underavdeling",
            progress: 25,
            characteristic: social,
            isStatement: false,
            isReversed: true
        },
        {
            questionNumber: 22,
            questionType: 'likertScale',
            questionTxt: "Dette er om Tech sin andre underavdeling",
            progress: 50,
            characteristic: social,
            isStatement: false,
            isReversed: false
        },
        {
            questionNumber: 23,
            questionType: 'likertScale',
            questionTxt: "ett påstandene i rekkefølge etter hva som passer best for deg",
            progress: 75,
            characteristic: social,
            isStatement: true,
            statementArr: statements1,
            isReversed: false
        },
        {
            questionNumber: 24,
            questionType: 'likertScale',
            questionTxt: "Dette er om Tech sin tredje",
            progress: 100,
            characteristic: social,
            isStatement: false,
            isReversed: false
        },
    ];
};

export const QuestionsDataSC = () => {
    const dispatch = useDispatch();
    const { social, creative, practical, strategyAndConsultingPoints, technologyPoints, interactivePoints } = bindActionCreators(actionCreators, dispatch);
    const statements1 = [
        {
            id: 1,
            title: 'Jeg liker Products',
            department: technologyPoints,
            initDepartmentPoints: 6
        },
        {
            id: 2,
            title: 'Jeg liker Health & Public Service',
            department: strategyAndConsultingPoints,
            initDepartmentPoints: 4
        },
        {
            id: 3,
            title: 'Jeg liker Resources',
            department: interactivePoints,
            initDepartmentPoints: 2
        },
    ];

    const statements2 = [
        {
            id: 1,
            title: 'Jeg liker Financial Services',
            department: technologyPoints,
            initDepartmentPoints: 6
        },
        {
            id: 2,
            title: 'Jeg liker Communciation Media & Technology',
            department: strategyAndConsultingPoints,
            initDepartmentPoints: 4
        },
        {
            id: 3,
            title: 'Jeg liker Transport (subindustri under Products)',
            department: interactivePoints,
            initDepartmentPoints: 2
        },
    ];


    return [
        {
            questionNumber: 21,
            questionType: 'likertScale',
            questionTxt: "Dette er om Products",
            progress: 14,
            characteristic: social,
            isStatement: false,
            isReversed: true
        },
        {
            questionNumber: 22,
            questionType: 'statementOrder',
            questionTxt: "Sett påstandene i rekkefølge etter hva som passer best for deg",
            progress: 29,
            characteristic: social,
            isStatement: true,
            statementArr: statements1,
            isReversed: false
        },
        {
            questionNumber: 23,
            questionType: 'likertScale',
            questionTxt: "Dette er om Resources",
            progress: 43,
            characteristic: social,
            isStatement: false,
            isReversed: true
        },
        {
            questionNumber: 24,
            questionType: 'likertScale',
            questionTxt: "Dette er om Health & Public Service",
            progress: 58,
            characteristic: social,
            isStatement: false,
            isReversed: false
        },
        {
            questionNumber: 25,
            questionType: 'likertScale',
            questionTxt: "Dette er om Financial Services",
            progress: 72,
            characteristic: social,
            isStatement: false,
            isReversed: true
        },
        {
            questionNumber: 26,
            questionType: 'statementOrder',
            questionTxt: "Sett påstandene i rekkefølge etter hva som passer best for deg",
            progress: 87,
            characteristic: social,
            isStatement: true,
            statementArr: statements2,
            isReversed: false
        },
        {
            questionNumber: 27,
            questionType: 'likertScale',
            questionTxt: "Dette er om Communcation Media & Technology",
            progress: 100,
            characteristic: social,
            isStatement: false,
            isReversed: false
        },
    ];
};

export const QuestionsDataInteractive = () => {
    const dispatch = useDispatch();
    const { social, creative, practical, strategyAndConsultingPoints, technologyPoints, interactivePoints } = bindActionCreators(actionCreators, dispatch);
    const statements1 = [
        {
            id: 1,
            title: 'Jeg liker Communcations',
            department: strategyAndConsultingPoints,
            initDepartmentPoints: 6
        },
        {
            id: 2,
            title: 'Jeg liker Build',
            department: technologyPoints,
            initDepartmentPoints: 4
        },
        {
            id: 3,
            title: 'Jeg liker Design',
            department: interactivePoints,
            initDepartmentPoints: 2
        }
    ];

    return [
        {
            questionNumber: 21,
            questionType: 'likertScale',
            questionTxt: "Dette er om Build",
            progress: 25,
            characteristic: social,
            isStatement: false,
            isReversed: true
        },
        {
            questionNumber: 22,
            questionType: 'likertScale',
            questionTxt: "Dette er om Design",
            progress: 50,
            characteristic: social,
            isStatement: false,
            isReversed: false
        },
        {
            questionNumber: 23,
            questionType: 'likertScale',
            questionTxt: "Sett påstandene i rekkefølge etter hva som passer best for deg",
            progress: 75,
            characteristic: social,
            isStatement: true,
            statementArr: statements1,
            isReversed: false
        },
        {
            questionNumber: 24,
            questionType: 'likertScale',
            questionTxt: "Dette er om Communcations",
            progress: 100,
            characteristic: social,
            isStatement: false,
            isReversed: false
        },
    ];
};
