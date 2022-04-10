import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from './redux'


export const QuestionsPartOne = () => {
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
            title: 'det virker spennende å komme opp med nye idéer og jobbe videre med de',
            department: strategyAndConsultingPoints,
            initDepartmentPoints: 6
        },
        {
            id: 2,
            title: 'det er spennende å sette meg inn i nye teknologier',
            department: technologyPoints,
            initDepartmentPoints: 4
        },
        {
            id: 3,
            title: 'design er spennende',
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
            questionTxt: "Jeg liker å planlegge godt når jeg jobber med oppgaver",
            progress: 10,
            characteristic: practical,
            isReversed: true
        },
        {
            questionNumber: 2,
            questionType: 'imageSelection',
            questionTxt: "Velg den jobbsituasjonen du helst ville vært i",
            progress: 20,
            isImageSelection: true,
            allocatePoints: [imageSelectorStrategyAndConsulting, imageSelectorTechnology, imageSelectorInteractive],
            images: ['SC_work', 'Technology_work', 'Interactive_work']
        },
        {
            questionNumber: 3,
            questionType: 'likertScale',
            questionTxt: "Jeg liker å skape ting og jobbe med et produkt jeg kan se",
            progress: 30,
            characteristic: practical,
            isReversed: false
        },
        {
            questionNumber: 4,
            questionType: 'statementOrder',
            questionTxt: "Sett påstandene i rekkefølge etter hva som passer best for deg ved å trykke på pilene",
            progress: 40,
            sharedWords: 'Jeg synes',
            isStatement: true,
            statementArr: statements1
        },
        {
            questionNumber: 5,
            questionType: 'likertScale',
            questionTxt: "Jeg jobber best med oppgaver alene",
            progress: 50,
            characteristic: social,
            isReversed: true
        },
        {
            questionNumber: 6,
            questionType: 'likertScale',
            questionTxt: "Jeg er flink til å tenke utenfor boksen og komme opp med nye løsninger",
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
            questionTxt: "Jeg liker å jobbe innenfor klare rammer så jeg vet hva jeg skal gjøre",
            progress: 80,
            characteristic: creative,
            isReversed: true
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
            questionTxt: "Jeg er god til å prate for meg selv",
            progress: 100,
            characteristic: social,
            isReversed: false
        },
    ];
};

export const QuestionsDataTech = () => {
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

export const QuestionsDataSC = () => {
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

export const QuestionsDataInteractive = () => {
    const dispatch = useDispatch();
    const { allocateInteractive_DesignPoints, allocateInteractive_BuildPoints, allocateInteractive_CommunicationsPoints } = bindActionCreators(actionCreators, dispatch);
    const statements1 = [
        {
            id: 1,
            title: 'Communcations',
            department: allocateInteractive_CommunicationsPoints,
            initDepartmentPoints: 6
        },
        {
            id: 2,
            title: 'Build',
            department: allocateInteractive_BuildPoints,
            initDepartmentPoints: 4
        },
        {
            id: 3,
            title: 'Design',
            department: allocateInteractive_DesignPoints,
            initDepartmentPoints: 2
        }
    ];

    return [
        {
            questionNumber: 1,
            questionType: 'likertScale',
            questionTxt: "Dette er om Build",
            progress: 20,
            characteristic: allocateInteractive_BuildPoints,
            isReversed: true
        },
        {
            questionNumber: 2,
            questionType: 'likertScale',
            questionTxt: "Dette er om Design",
            progress: 40,
            characteristic: allocateInteractive_DesignPoints,
            isReversed: false
        },
        {
            questionNumber: 3,
            questionType: 'statementOrder',
            questionTxt: "Sett påstandene i rekkefølge etter hva som passer best for deg",
            sharedWords: 'Jeg liker',
            progress: 60,
            isStatement: true,
            statementArr: statements1,
        },
        {
            questionNumber: 4,
            questionType: 'likertScale',
            questionTxt: "Dette er om Communcations",
            progress: 80,
            characteristic: allocateInteractive_CommunicationsPoints,
            isReversed: false
        },
        {
            questionNumber: 5, // Had to increase to one more question so that statementOrder can check for questionlength
            questionType: 'likertScale',
            questionTxt: "Dette er om Fjords",
            progress: 100,
            characteristic: allocateInteractive_DesignPoints,
            isReversed: false
        },
    ];
};
