import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

export const FooterLinks = () => {
    const { t } = useTranslation();
    return(
        <div className='links'>
            <div>
                <div className='greaterThanDiv'>
                    <a href='https://www.accenture.com/no-en'>
                        <div className='greaterThan'/>
                    </a>
                </div>
                <div className={'linkWrapper'}>
                    <div className='pagelinkDiv'>
                        <Link to={'/'} className='pagelink'>{t('home')}</Link>
                        <Link to={'/info'} className='pagelink'>{t('information')}</Link>
                        <Link to={'/valgomat'} className='pagelink'>{t('valgomat')}</Link>
                    </div>
                    <div className='iconLinks'>
                        <a href={'https://www.linkedin.com/company/accenture-nordics/'} target={'_blank'} rel="noopener noreferrer" className='linkTag'>
                            <div className='iconWrapper'>
                                <div className='linkedIn'/>
                            </div>
                        </a>
                        <a href={'https://twitter.com/AccentureNO?lang=en'} target={'_blank'} rel="noopener noreferrer">
                            <div className='iconWrapper'>
                                <div className='twitter'/>
                            </div>
                        </a>
                        <a href={'https://www.facebook.com/AccentureNorge/'} target={'_blank'} rel="noopener noreferrer">
                            <div className='iconWrapper'>
                                <div className='facebook'/>
                            </div>
                        </a>
                        <a href={'https://www.instagram.com/accenturenorge/'} target={'_blank'} rel="noopener noreferrer">
                            <div className='iconWrapper'>
                                <div className='instagram'/>
                            </div>
                        </a>
                        <a href={'https://www.youtube.com/channel/UCoa5DuZsncLcHTnqzFLMlJA'} target={'_blank'} rel="noopener noreferrer">
                            <div className='iconWrapper'>
                                <div className='youtube'/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
