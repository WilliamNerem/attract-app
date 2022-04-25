import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from './redux'
import {useTranslation} from "react-i18next";


export const QuestionsPartOne = () => {
    const { t } = useTranslation();
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
    } = bindActionCreators(actionCreators, dispatch);
    const statements1 = [
        {
            id: 1,
            title: t('qS11'), // questionStatement1Question1
            department: strategyAndConsultingPoints,
            initDepartmentPoints: 6
        },
        {
            id: 2,
            title: t('qS12'),
            department: technologyPoints,
            initDepartmentPoints: 4
        },
        {
            id: 3,
            title: t('qS13'),
            department: interactivePoints,
            initDepartmentPoints: 2
        }
    ];

    const statements2 = [
        {
            id: 1,
            title: 'være med å lage et produkt ut ifra en idé',
            department: technologyPoints,
            initDepartmentPoints: 6
        },
        {
            id: 2,
            title: 'presentere og prøve å selge inn en idé til en kunde',
            department: strategyAndConsultingPoints,
            initDepartmentPoints: 4
        },
        {
            id: 3,
            title: 'jobbe med å forbedre brukeropplevelsen av et produkt',
            department: interactivePoints,
            initDepartmentPoints: 2
        },
    ];

    return [
        {
            questionNumber: 1,
            questionType: 'likertScale',
            questionTxt: t('q1'),
            progress: 10,
            characteristic: practical,
            isReversed: false
        },
        {
            questionNumber: 2,
            questionType: 'imageSelection',
            questionTxt: t('q2'),
            progress: 20,
            isImageSelection: true,
            allocatePoints: [imageSelectorStrategyAndConsulting, imageSelectorTechnology, imageSelectorInteractive],
            images: ['SC_work', 'Technology_work', 'Interactive_work']
        },
        {
            questionNumber: 3,
            questionType: 'likertScale',
            questionTxt: "Jeg har lyst til å være med på å bestemme hvordan et produkt skal se ut",
            progress: 30,
            characteristic: creative,
            isReversed: false
        },
        {
            questionNumber: 4,
            questionType: 'statementOrder',
            questionTxt: "Sett påstandene i rekkefølge etter hva som passer best for deg ved å trykke på pilene",
            progress: 40,
            sharedWords: '',
            isStatement: true,
            statementArr: statements1
        },
        {
            questionNumber: 5,
            questionType: 'likertScale',
            questionTxt: "Jeg har god formidlingsevne",
            progress: 50,
            characteristic: social,
            isReversed: false
        },
        {
            questionNumber: 6,
            questionType: 'likertScale',
            questionTxt: "Jeg er flink til å se forskjellige måter en oppgave kan løses på",
            progress: 60,
            characteristic: creative,
            isReversed: false
        },
        {
            questionNumber: 7,
            questionType: 'imageSelection',
            questionTxt: "Velg den klesstilen du ville foretrukket på jobb",
            progress: 70,
            isImageSelection: true,
            allocatePoints: [imageSelectorStrategyAndConsulting, imageSelectorTechnology, imageSelectorInteractive],
            images: ['SC_DC', 'Technology_DC', 'Interactive_DC']
        },
        {
            questionNumber: 8,
            questionType: 'likertScale',
            questionTxt: "Jeg ser viktigheten av å utføre gode brukertester",
            progress: 80,
            characteristic: practical,
            isReversed: false
        },
        {
            questionNumber: 9,
            questionType: 'statementOrder',
            questionTxt: "Sett påstandene i rekkefølge etter hva som passer best for deg ved å trykke på pilene",
            progress: 90,
            sharedWords: 'Jeg kunne tenkt meg å',
            isStatement: true,
            statementArr: statements2
        },
        {
            questionNumber: 10,
            questionType: 'likertScale',
            questionTxt: "Jeg har ikke problemer med at arbeidet mitt blir kvalitetssikret og at jeg får tilbakemeldinger om hva som kunne vært gjort bedre",
            progress: 100,
            characteristic: social,
            isReversed: false
        },
    ];
};

export const QuestionsDataTech = () => {    // Not added new questions for part 2
    const dispatch = useDispatch();
    const { social, strategyAndConsultingPoints, technologyPoints, interactivePoints } = bindActionCreators(actionCreators, dispatch);
    const statements1 = [
        {
            id: 1,
            title: 'Jeg liker Tech sin første underavdeling',
            department: strategyAndConsultingPoints,
            initDepartmentPoints: 6
        },
        {
            id: 2,
            title: 'Jeg liker Tech sin andre underavdeling',
            department: technologyPoints,
            initDepartmentPoints: 4
        },
        {
            id: 3,
            title: 'Jeg liker Tech sin tredje underavdeling',
            department: interactivePoints,
            initDepartmentPoints: 2
        }
    ];

    return [
        {
            questionNumber: 1,
            questionType: 'likertScale',
            questionTxt: "Dette er om Tech sin første underavdeling",
            progress: 25,
            characteristic: social,
            isReversed: true
        },
        {
            questionNumber: 2,
            questionType: 'likertScale',
            questionTxt: "Dette er om Tech sin andre underavdeling",
            progress: 50,
            characteristic: social,
            isReversed: false
        },
        {
            questionNumber: 3,
            questionType: 'statementOrder',
            questionTxt: "Sett påstandene i rekkefølge etter hva som passer best for deg",
            sharedWords: '',
            progress: 75,
            isStatement: true,
            statementArr: statements1,
        },
        {
            questionNumber: 4,
            questionType: 'likertScale',
            questionTxt: "Dette er om Tech sin tredje",
            progress: 100,
            characteristic: social,
            isReversed: false
        },
    ];
};

export const QuestionsDataSC = () => {      // Not added new questions for part 2
    const dispatch = useDispatch();
    const { allocateStrat_CMTPoints, allocateStrat_Health_PublicPoints, allocateStrat_FinancePoints, allocateStrat_ProductsPoints, allocateStrat_ResourcesPoints } = bindActionCreators(actionCreators, dispatch);
    const statements1 = [
        {
            id: 1,
            title: 'Products',
            department: allocateStrat_ProductsPoints,
            initDepartmentPoints: 6
        },
        {
            id: 2,
            title: 'Health & Public Service',
            department: allocateStrat_Health_PublicPoints,
            initDepartmentPoints: 4
        },
        {
            id: 3,
            title: 'Resources',
            department: allocateStrat_ResourcesPoints,
            initDepartmentPoints: 2
        },
    ];

    const statements2 = [
        {
            id: 1,
            title: 'Financial Services',
            department: allocateStrat_FinancePoints,
            initDepartmentPoints: 6
        },
        {
            id: 2,
            title: 'Communciation Media & Technology',
            department: allocateStrat_CMTPoints,
            initDepartmentPoints: 4
        },
        {
            id: 3,
            title: 'Transport (subindustri under Products)',
            department: allocateStrat_ProductsPoints,
            initDepartmentPoints: 2
        },
    ];


    return [
        {
            questionNumber: 1,
            questionType: 'likertScale',
            questionTxt: "Dette er om Products",
            progress: 14,
            characteristic: allocateStrat_ProductsPoints,
            isReversed: true
        },
        {
            questionNumber: 2,
            questionType: 'statementOrder',
            questionTxt: "Sett påstandene i rekkefølge etter hva som passer best for deg",
            sharedWords: 'Jeg liker',
            progress: 29,
            isStatement: true,
            statementArr: statements1,
        },
        {
            questionNumber: 3,
            questionType: 'likertScale',
            questionTxt: "Dette er om Resources",
            progress: 43,
            characteristic: allocateStrat_ResourcesPoints,
            isReversed: true
        },
        {
            questionNumber: 4,
            questionType: 'likertScale',
            questionTxt: "Dette er om Health & Public Service",
            progress: 58,
            characteristic: allocateStrat_Health_PublicPoints,
            isReversed: false
        },
        {
            questionNumber: 5,
            questionType: 'likertScale',
            questionTxt: "Dette er om Financial Services",
            progress: 72,
            characteristic: allocateStrat_FinancePoints,
            isReversed: true
        },
        {
            questionNumber: 6,
            questionType: 'statementOrder',
            questionTxt: "Sett påstandene i rekkefølge etter hva som passer best for deg",
            sharedWords: 'Jeg liker',
            progress: 87,
            isStatement: true,
            statementArr: statements2,
        },
        {
            questionNumber: 7,
            questionType: 'likertScale',
            questionTxt: "Dette er om Communcation Media & Technology",
            progress: 100,
            characteristic: allocateStrat_CMTPoints,
            isReversed: false
        },
    ];
};

export const QuestionsDataInteractive = () => {  // Questions ok for now
    const dispatch = useDispatch();
    const { allocateInteractive_DesignPoints, allocateInteractive_BuildPoints, allocateInteractive_CommunicationsPoints } = bindActionCreators(actionCreators, dispatch);
    const statements1 = [
        {
            id: 1,
            title: 'Et produkt blir aldri bedre enn markedsføringen sin',
            department: allocateInteractive_CommunicationsPoints,
            initDepartmentPoints: 6
        },
        {
            id: 2,
            title: 'Det må mer enn reklame til for å bygge opp en merkevare',
            department: allocateInteractive_BuildPoints,
            initDepartmentPoints: 4
        },
        {
            id: 3,
            title: 'Noe av det aller viktigste til et produkt er hvordan det ser ut',
            department: allocateInteractive_DesignPoints,
            initDepartmentPoints: 2
        }
    ];

    const statements2 = [
        {
            id: 1,
            title: 'brukertesting',
            department: allocateInteractive_CommunicationsPoints,
            initDepartmentPoints: 6
        },
        {
            id: 2,
            title: 'å forvandle produkter og tjenester til noe nytt',
            department: allocateInteractive_BuildPoints,
            initDepartmentPoints: 4
        },
        {
            id: 3,
            title: 'å lage brukervennlige grensesnitt',
            department: allocateInteractive_DesignPoints,
            initDepartmentPoints: 2
        }
    ];

    return [
        {
            questionNumber: 1,
            questionType: 'likertScale',
            questionTxt: "eg synes det er spennende å innhente innsikt om mennesker og bedrifter",
            progress: 20,
            characteristic: allocateInteractive_BuildPoints,
            isReversed: false
        },
        {
            questionNumber: 2,
            questionType: 'likertScale',
            questionTxt: "Jeg jobber gjerne tett opp med kunden for å forbedre kundeopplevelsen",
            progress: 40,
            characteristic: allocateInteractive_DesignPoints,
            isReversed: false
        },
        {
            questionNumber: 3,
            questionType: 'statementOrder',
            questionTxt: "Sett påstandene i rekkefølge etter hva som passer best for deg ved å trykke på pilene",
            sharedWords: 'Jeg mener at',
            progress: 60,
            isStatement: true,
            statementArr: statements1,
        },
        {
            questionNumber: 4,
            questionType: 'likertScale',
            questionTxt: "Jeg har lyst å jobbe med utvikling av kundereiser",
            progress: 80,
            characteristic: allocateInteractive_CommunicationsPoints,
            isReversed: false
        },
        {
            questionNumber: 5,
            questionType: 'statementOrder',
            questionTxt: "Sett påstandene i rekkefølge etter hva som passer best for deg ved å trykke på pilene",
            sharedWords: 'Jeg kunne tenkt meg å jobbe med',
            progress: 100,
            isStatement: true,
            statementArr: statements2,
        },
    ];
};
