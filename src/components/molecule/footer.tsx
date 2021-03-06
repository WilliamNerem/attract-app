import {FooterLinks} from "../atoms/footerLinks";
import '../../styles/footer.style.css';
import React from "react";
import {useTranslation} from "react-i18next";

interface props {
    tabIndex?: number;
}

export const Footer = ({tabIndex}: props) => {
    const { t } = useTranslation();
    return(
        <div className='footerWrapper'>
            <div className='footer'>
                <FooterLinks tabIndex={tabIndex}/>
            </div>
            <div className={'smallLinkWrapper'}>
                <a href ={'https://www.accenture.com/no-en/support/terms-of-use'} target={'_blank'} rel="noopener noreferrer" className='pagelinkSmall' tabIndex={tabIndex ? tabIndex : 0}>{t('termsAndConditions')}</a>
                <a href ={'https://www.accenture.com/no-en/support/accessibility-statement'} target={'_blank'} rel="noopener noreferrer" className='pagelinkSmall' tabIndex={tabIndex ? tabIndex : 0}>{t('accessibility')}</a>
                <p className='copyright'>{t('copyright')}</p>
            </div>
        </div>
    );
};
