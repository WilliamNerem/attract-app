import { ImageSelectorType } from "../actionTypes";

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