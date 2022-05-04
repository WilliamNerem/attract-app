import {InfoCard} from "../atoms/infoCard";
import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import i18n from "../../i18n";

interface showExplanationProps {
    questionType: string
}

export const ShowExplanation = ({questionType}: showExplanationProps) => {
    const { t } = useTranslation();
    const [imageLanguages, setImageLanguages] = useState({
        likert: 'likertScaleExampleImage',
        statementOrder: 'statementOrderExampleImage',
        result: 'resultExampleImage'
    });

    useEffect(() => {
        changeImageLanguage();
    }, [i18n.language]);

    const changeImageLanguage = () => {
        if (i18n.language === 'en'){
            setImageLanguages({
                likert: 'likertScaleExampleImageEnglish',
                statementOrder: 'statementOrderExampleImageEnglish',
                result: 'resultExampleImageEnglish'
            });
        } else {
            setImageLanguages({
                likert: 'likertScaleExampleImage',
                statementOrder: 'statementOrderExampleImage',
                result: 'resultExampleImage'
            });
        }
    };

    let heading;
    let text;
    let exampleImage;

    if (questionType === 'likertScale'){
        heading = t('explanationLikertHeading');
        text = t('explanationLikert');
        exampleImage = imageLanguages.likert;
    } else if (questionType === 'statementOrder') {
        heading = t('explanationStatementHeading');
        text = t('explanationStatement');
        exampleImage = imageLanguages.statementOrder;
    } else if (questionType === 'imageSelection') {
        heading = t('explanationImageHeading');
        text = t('explanationImage');
        exampleImage='imageSelectionExampleImage';
    } else {
        heading = t('explanationResultHeading');
        text = t('explanationResult');
        exampleImage = imageLanguages.result;
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