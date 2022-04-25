import React from 'react';
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";
export const NotFoundPage = () => {
    const { t } = useTranslation();
    return(
        <div>
            <h2 style={{textAlign:"center"}}>
                {t('invalidPage1')} <Link to="/">{t('invalidPage2')}</Link> {t('invalidPage3')}
            </h2>
        </div>
    );
};

export default NotFoundPage;