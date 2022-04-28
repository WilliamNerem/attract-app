export enum ImageSelectorType {
    STRATEGYANDCONSULTING = 'strategyImgSelector',
    TECHNOLOGY = 'technologyImgSelector',
    INTERACTIVE = 'songImgSelector',
    SOCIAL = 'socialImgSelector',
    CREATIVE = 'creativeImgSelector',
    PRACTICAL = 'practicalImgSelector'
}

interface strategyAndConsultingImageAction {
    type: ImageSelectorType.STRATEGYANDCONSULTING
    payload: number
}

interface technologyImageAction {
    type: ImageSelectorType.TECHNOLOGY
    payload: number
}

interface interactiveImageAction {
    type: ImageSelectorType.INTERACTIVE
    payload: number
}

interface socialImageAction {
    type: ImageSelectorType.SOCIAL
    payload: number
}

interface creativeImageAction {
    type: ImageSelectorType.CREATIVE
    payload: number
}

interface practicalImageAction {
    type: ImageSelectorType.PRACTICAL
    payload: number
}

export type ImageSelectorAction = strategyAndConsultingImageAction | technologyImageAction | interactiveImageAction | socialImageAction | creativeImageAction | practicalImageAction;

export const initialState = {
    answers: [
        {
            allocatePoints: ImageSelectorType.STRATEGYANDCONSULTING,
            points: 0
        },
        {
            allocatePoints: ImageSelectorType.TECHNOLOGY,
            points: 0
        },
        {
            allocatePoints: ImageSelectorType.INTERACTIVE,
            points: 0
        },
        {
            allocatePoints: ImageSelectorType.SOCIAL,
            points: 0
        },
        {
            allocatePoints: ImageSelectorType.CREATIVE,
            points: 0
        },
        {
            allocatePoints: ImageSelectorType.PRACTICAL,
            points: 0
        },
    ]
};

export const imageSelectorReducer = (state: {allocatePoints: string, points: number}[] = initialState.answers, action: ImageSelectorAction) => {
    switch (action.type) {
        case ImageSelectorType.STRATEGYANDCONSULTING:
            state[0].points = state[0].points + action.payload;
            return [...state];

        case ImageSelectorType.TECHNOLOGY:
            state[1].points = state[1].points + action.payload;
            return [...state];

        case ImageSelectorType.INTERACTIVE:
            state[2].points = state[2].points + action.payload;
            return [...state];

        case ImageSelectorType.SOCIAL:
            state[3].points = state[3].points + action.payload;
            return [...state];

        case ImageSelectorType.CREATIVE:
            state[4].points = state[4].points + action.payload;
            return [...state];

        case ImageSelectorType.PRACTICAL:
            state[5].points = state[5].points + action.payload;
            return [...state];
        default:
            return state
    }
};