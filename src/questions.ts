import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from './redux'
import {TFunction} from "i18next";
import TechWork from "./images/Technology_work.jpg";
import TechTask from "./images/Technology_task.jpg";
import SCWork from "./images/SC_work.jpg";
import SCTask from "./images/SC_task.jpg";
import InteractiveWork from "./images/Interactive_work.jpg";
import InteractiveTask from "./images/Song_task.jpg";


export const QuestionsPartOne = (t: TFunction) => {
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
            title: t('qS21'),
            department: technologyPoints,
            initDepartmentPoints: 6
        },
        {
            id: 2,
            title: t('qS22'),
            department: strategyAndConsultingPoints,
            initDepartmentPoints: 4
        },
        {
            id: 3,
            title: t('qS23'),
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
            characteristic: practical
        },
        {
            questionNumber: 2,
            questionType: 'imageSelection',
            questionTxt: t('q2'),
            progress: 20,
            isImageSelection: true,
            allocatePoints: [imageSelectorStrategyAndConsulting, imageSelectorTechnology, imageSelectorInteractive],
            images: [SCWork, TechWork, InteractiveWork]
        },
        {
            questionNumber: 3,
            questionType: 'likertScale',
            questionTxt: t('q3'),
            progress: 30,
            characteristic: creative
        },
        {
            questionNumber: 4,
            questionType: 'statementOrder',
            questionTxt: t('q4'),
            progress: 40,
            sharedWords: t('q4Shared'),
            isStatement: true,
            statementArr: statements1
        },
        {
            questionNumber: 5,
            questionType: 'likertScale',
            questionTxt: t('q5'),
            progress: 50,
            characteristic: social
        },
        {
            questionNumber: 6,
            questionType: 'likertScale',
            questionTxt: t('q6'),
            progress: 60,
            characteristic: creative
        },
        {
            questionNumber: 7,
            questionType: 'imageSelection',
            questionTxt: t('q7'),
            progress: 70,
            isImageSelection: true,
            allocatePoints: [imageSelectorStrategyAndConsulting, imageSelectorTechnology, imageSelectorInteractive],
            images: [SCTask, TechTask, InteractiveTask]
        },
        {
            questionNumber: 8,
            questionType: 'likertScale',
            questionTxt: t('q8'),
            progress: 80,
            characteristic: practical
        },
        {
            questionNumber: 9,
            questionType: 'statementOrder',
            questionTxt: t('q9'),
            progress: 90,
            sharedWords: t('q9Shared'),
            isStatement: true,
            statementArr: statements2
        },
        {
            questionNumber: 10,
            questionType: 'likertScale',
            questionTxt: t('q10'),
            progress: 100,
            characteristic: social
        },
    ];
};