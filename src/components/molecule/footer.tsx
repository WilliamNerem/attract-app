import {FooterLinks} from "../atoms/footerLinks";
import '../../styles/footer.style.css';
import {Link} from "react-router-dom";
import React from "react";
import {useTranslation} from "react-i18next";

export const Footer = () => {
    const { t } = useTranslation();
    return(
        <div className='footerWrapper'>
            <div className='footer'>
                <FooterLinks/>
            </div>
            <div className={'smallLinkWrapper'}>
                <Link to={'https://www.accenture.com/no-en/support/terms-of-use'} className='pagelinkSmall'>{t('termsAndConditions')}</Link>
                <Link to={'https://www.accenture.com/no-en/support/accessibility-statement'} className='pagelinkSmall'>{t('accessibility')}</Link>
                <p className='copyright'>{t('copyright')}</p>
            </div>
        </div>
    );
};
