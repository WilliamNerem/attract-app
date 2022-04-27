import {TFunction} from "i18next";
export const SubDepartments = (t: TFunction) => {
    return [
        {
            id: 'resources',
            title: 'Resources',
            link: 'https://www.accenture.com/no-en',
            infoText: t('subDepResourcesText'),
            infoSubText: t('subDepResourcesSubText')
        },
        {
            id: 'health&publicServices',
            title: 'Health & Public Services',
            link: 'https://www.accenture.com/no-en',
            infoText: t('subDepH&PSText'),
            infoSubText: t('subDepH&PSSubText')
        },
        {
            id: 'communicationMediaTechnology',
            title: 'Communication Media Technology',
            link: 'https://www.accenture.com/no-en',
            infoText: t('subDepCMTText'),
            infoSubText: t('subDepCMTSubText')
        },
        {
            id: 'financialServices',
            title: 'Financial Services',
            link: 'https://www.accenture.com/no-en',
            infoText: t('subDepFRText'),
            infoSubText: t('subDepFRSubText')
        },
        {
            id: 'products',
            title: 'Products',
            link: 'https://www.accenture.com/no-en',
            infoText: t('subDepProductsText'),
            infoSubText: t('subDepProductsSubText')
        },
        {
            id: 'design',
            title: 'Design',
            link: 'https://www.accenture.com/no-en',
            infoText: t('subDepDesignText'),
            infoSubText: t('subDepDesignSubText')
        },
        {
            id: 'build',
            title: 'Build',
            link: 'https://www.accenture.com/no-en',
            infoText: t('subDepBuildText'),
            infoSubText: t('subDepBuildSubText')
        },
        {
            id: 'communications',
            title: 'Communications',
            link: 'https://www.accenture.com/no-en',
            infoText: t('subDepCommunicationsText'),
            infoSubText: t('subDepCommunicationsSubText')
        },
    ];
};