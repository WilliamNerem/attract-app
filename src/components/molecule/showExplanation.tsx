import {InfoCard} from "../atoms/infoCard";
import React from "react";
import {useTranslation} from "react-i18next";

interface showExplanationProps {
    questionType: string
}

export const ShowExplanation = ({questionType}: showExplanationProps) => {
    const { t } = useTranslation();

    let heading;
    let text;
    let exampleImage;

    if (questionType === 'likertScale'){
        heading = t('explanationLikertHeading');
        text = t('explanationLikert');
        exampleImage = 'likertScaleExampleImage';
    } else if (questionType === 'statementOrder') {
        heading = t('explanationStatementHeading');
        text = t('explanationStatement');
        exampleImage = 'statementOrderExampleImage';
    } else if (questionType === 'imageSelection') {
        heading = t('explanationImageHeading');
        text = t('explanationImageHeading');
        exampleImage='imageSelectionExampleImage';
    } else {
        heading = t('explanationResultHeading');
        text = t('explanationResult');
        exampleImage = 'resultExampleImage';
    }


    return(
        <InfoCard
            heading={heading}
            text={text}
            subHeading={t('explanationExample')}
            exampleImage={exampleImage}
        />
    );
};