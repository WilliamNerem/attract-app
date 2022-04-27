import {TFunction} from "i18next";
export const departments = (t: TFunction) => {
    return [
        {
            name: 'Strategy & Consulting',
            social: 7,
            creative: 5,
            practical: 2,
            possibleDifference: 17,
            title: 'Strategy & Consulting',
            link: 'https://www.accenture.com/no-en/about/consulting-index',
            infoTextEmail1: t('depSCInfoTextEmail1'),
            infoTextEmail2: t('depSCInfoTextEmail2'),
            infoTextCard: t('depSCInfoTextEmail1') + t('depSCInfoTextEmail2'),
            infoSubText: t('depSCInfoSubText')
        },
        {
            name: 'Technology',
            social: 7,
            creative: 7,
            practical: 5,
            possibleDifference: 16,
            title: 'Technology',
            link: 'https://www.accenture.com/no-en/about/technology-index',
            infoTextEmail1: t('depTechInfoTextEmail1'),
            infoTextEmail2: t('depTechInfoTextEmail2'),
            infoTextCard: t('depTechInfoTextEmail1') + t('depTechInfoTextEmail2'),
            infoSubText: t('depTechInfoSubText')
        },
        {
            name: 'Interactive',
            social: 8,
            creative: 8,
            practical: 7,
            possibleDifference: 20,
            title: 'Interactive',
            link: 'https://www.accenture.com/no-en/about/accenture-interactive-index',
            infoTextEmail1: t('depInteractiveInfoTextEmail1'),
            infoTextEmail2: t('depInteractiveInfoTextEmail2'),
            infoTextCard: t('depInteractiveInfoTextEmail1') + t('depInteractiveInfoTextEmail2'),
            infoSubText: t('depInteractiveInfoSubText')
        },
    ];
};