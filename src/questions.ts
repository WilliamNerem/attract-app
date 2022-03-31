import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from './redux'

export const QuestionsData = () => {
    const dispatch = useDispatch();
    const {
        social,
        creative,
        practical,
        strategyAndConsultingPoints,
        technologyPoints,
        interactivePoints,
        imageSelectorStrategyAndConsulting,
        imageSelectorTechnology,
        imageSelectorInteractive,
        imageSelectorSocial,
        imageSelectorCreative,
        imageSelectorPractical
    } = bindActionCreators(actionCreators, dispatch);
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
            progress: 10,
            characteristic: practical,
            isStatement: false,
            isImageSelection: false,
            isReversed: true,
            allocatePoints: [imageSelectorStrategyAndConsulting, imageSelectorTechnology, imageSelectorInteractive],
            images: ['imgCity', 'imgLibrary', 'imgLogo']
        },
        {
            questionNumber: 2,
            questionType: 'imageSelection',
            questionTxt: "Velg det bilde som passer deg best",
            progress: 20,
            characteristic: practical,
            isStatement: false,
            isImageSelection: true,
            isReversed: true,
            allocatePoints: [imageSelectorStrategyAndConsulting, imageSelectorTechnology, imageSelectorInteractive],
            images: ['imgCar', 'imgBike', 'imgMetro']
        },
        {
            questionNumber: 3,
            questionType: 'likertScale',
            questionTxt: "Jeg liker å skape ting og jobbe med et produkt jeg kan se",
            progress: 30,
            characteristic: practical,
            isStatement: false,
            isImageSelection: false,
            isReversed: false,
            allocatePoints: [imageSelectorStrategyAndConsulting, imageSelectorTechnology, imageSelectorInteractive],
            images: ['imgCity', 'imgLibrary', 'imgLogo']
        },
        {
            questionNumber: 4,
            questionType: 'statementOrder',
            questionTxt: "Sett påstandene i rekkefølge etter hva som passer best for deg",
            progress: 40,
            characteristic: social,
            isStatement: true,
            isImageSelection: false,
            statementArr: statements1,
            isReversed: false,
            allocatePoints: [imageSelectorStrategyAndConsulting, imageSelectorTechnology, imageSelectorInteractive],
            images: ['imgCity', 'imgLibrary', 'imgLogo']
        },
        {
            questionNumber: 5,
            questionType: 'likertScale',
            questionTxt: "Jeg jobber best med oppgaver alene",
            progress: 50,
            characteristic: social,
            isStatement: false,
            isImageSelection: false,
            isReversed: true,
            allocatePoints: [imageSelectorStrategyAndConsulting, imageSelectorTechnology, imageSelectorInteractive],
            images: ['imgCity', 'imgLibrary', 'imgLogo']
        },
        {
            questionNumber: 6,
            questionType: 'likertScale',
            questionTxt: "Jeg er flink til å tenke utenfor boksen og komme opp med nye løsninger",
            progress: 60,
            characteristic: creative,
            isStatement: false,
            isImageSelection: false,
            isReversed: false,
            allocatePoints: [imageSelectorStrategyAndConsulting, imageSelectorTechnology, imageSelectorInteractive],
            images: ['imgCity', 'imgLibrary', 'imgLogo']
        },
        {
            questionNumber: 7,
            questionType: 'imageSelection',
            questionTxt: "Velg det bilde som passer deg best",
            progress: 70,
            characteristic: practical,
            isStatement: false,
            isImageSelection: true,
            isReversed: true,
            allocatePoints: [imageSelectorSocial, imageSelectorCreative, imageSelectorPractical],
            images: ['imgCity', 'imgLibrary', 'imgLogo']
        },
        {
            questionNumber: 8,
            questionType: 'likertScale',
            questionTxt: "Jeg liker å jobbe innenfor klare rammer så jeg vet hva jeg skal gjøre",
            progress: 80,
            characteristic: creative,
            isStatement: false,
            isImageSelection: false,
            isReversed: true,
            allocatePoints: [imageSelectorStrategyAndConsulting, imageSelectorTechnology, imageSelectorInteractive],
            images: ['imgCity', 'imgLibrary', 'imgLogo']
        },
        {
            questionNumber: 9,
            questionType: 'statementOrder',
            questionTxt: "Sett påstandene i rekkefølge etter hva som passer best for deg",
            progress: 90,
            characteristic: social,
            isStatement: true,
            isImageSelection: false,
            statementArr: statements2,
            isReversed: false,
            allocatePoints: [imageSelectorStrategyAndConsulting, imageSelectorTechnology, imageSelectorInteractive],
            images: ['imgCity', 'imgLibrary', 'imgLogo']
        },
        {
            questionNumber: 10,
            questionType: 'likertScale',
            questionTxt: "Jeg er god til å prate for meg selv",
            progress: 100,
            characteristic: social,
            isStatement: false,
            isImageSelection: false,
            isReversed: false,
            allocatePoints: [imageSelectorStrategyAndConsulting, imageSelectorTechnology, imageSelectorInteractive],
            images: ['imgCity', 'imgLibrary', 'imgLogo']
        },
    ];
};