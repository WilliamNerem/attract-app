import React from "react";
import {useTranslation} from "react-i18next";

interface resultTextProps {
    result: string
}

export const ResultText = ({result}: resultTextProps) => {
    const { t } = useTranslation();

    if (result === 'Strategy & Consulting') {
        return(
            <h2 className='resultText'>{t('resultSC')}</h2>
        );
    }
    else if (result === 'Technology') {
        return(
            <h2 className='resultText'>{t('resultTech')}</h2>
        );
    }
    else if (result === 'Song') {
        return(
            <h2 className='resultText'>{t('resultInteractive')}</h2>
        );
    }

    return(
        <h2 className='resultText'>{t('resultUnique')}</h2>
    );
};