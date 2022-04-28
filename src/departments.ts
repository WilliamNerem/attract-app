import {TFunction} from "i18next";
export const departments = (t: TFunction) => {
    return [
        {
            name: 'Strategy & Consulting',
            social: 9,
            creative: 7,
            practical: 1,
            possibleDifference: 22,
            title: 'Strategy & Consulting',
            link: 'https://www.accenture.com/no-en/about/consulting-index',
            infoTextEmail1: t('depSCInfoTextEmail1'),
            infoTextEmail2: t('depSCInfoTextEmail2'),
            infoTextCard: t('depSCInfoTextEmail1') + t('depSCInfoTextEmail2'),
            infoSubText: t('depSCInfoSubText'),
            firstInfoSubText: t('depSCFirstInfoSubText')
        },
        {
            name: 'Technology',
            social: 5,
            creative: 6,
            practical: 7,
            possibleDifference: 15,
            title: 'Technology',
            link: 'https://www.accenture.com/no-en/about/technology-index',
            infoTextEmail1: t('depTechInfoTextEmail1'),
            infoTextEmail2: t('depTechInfoTextEmail2'),
            infoTextCard: t('depTechInfoTextEmail1') + t('depTechInfoTextEmail2'),
            infoSubText: t('depTechInfoSubText'),
            firstInfoSubText: t('sepTechFirstInfoSubText')
        },
        {
            name: 'Song',
            social: 7,
            creative: 8,
            practical: 6,
            possibleDifference: 18,
            title: 'Song',
            link: 'https://www.accenture.com/no-en/about/accenture-song-index',
            infoTextEmail1: t('depInteractiveInfoTextEmail1'),
            infoTextEmail2: t('depInteractiveInfoTextEmail2'),
            infoTextCard: t('depInteractiveInfoTextEmail1') + t('depInteractiveInfoTextEmail2'),
            infoSubText: t('depInteractiveInfoSubText'),
            firstInfoSubText: t('sepInteractiveFirstInfoSubText')
        },
    ];
};