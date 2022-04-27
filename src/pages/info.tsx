import {Navbar} from "../components/molecule/navbar";
import {ResetStates} from "../resetStates";
import {InfoCard} from "../components/atoms/infoCard";
import React from "react";
import '../styles/info.style.css'
import {Footer} from "../components/molecule/footer";
import {useTranslation} from "react-i18next";

const Info = () => {
    ResetStates();
    const { t } = useTranslation();

    return (
        <>
            <Navbar/>
            <div className='info' data-testid={'infoPage'}>
                <div className='gradientDiv'>
                    <h1 className='infoText'>{t('infoH1')}</h1>
                    <p className='infoSubText'>{t('infoH1Sub')}</p>
                </div>
                <InfoCard heading='Strategy & Consulting' text={t('infoCardTextSC')}
                    linkText={t('infoCardLinkSC')}
                    link='https://www.accenture.com/no-en/about/consulting-index'
                    isDropdown={true}
                />
                <div className='infoCards'>
                    <InfoCard heading='Technology' text={t('infoCardTextTech')}
                        linkText={t('infoCardLinkTect')}
                        link='https://www.accenture.com/no-en/about/technology-index'
                        isDropdown={true}
                    />
                </div>
                <div className='infoCards'>
                    <InfoCard heading='Interactive' text={t('infoCardTextInteractive')}
                        linkText={t('infoCardLinkInteractive')}
                        link='https://www.accenture.com/no-en/about/accenture-interactive-index'
                        isDropdown={true}
                    />
                </div>
                <div className='grayBackgroundInfo'>
                    <div className='headingValgomatInfo'>
                        <h1 className='infoText'>{t('infoH1Answer')}</h1>
                        <p className='infoSubText'>{t('infoH1AnswerSub')}</p>
                    </div>
                    <div className='infoCards firstValgomatCard'>
                        <InfoCard
                            heading={t('explanationLikertHeading')}
                            text={t('explanationLikert')}
                            exampleImage={'likertScaleExampleImage'}
                            subHeading={t('explanationExample')}
                            isDropdown={true}
                        />
                    </div>
                    <div className='infoCards'>
                        <InfoCard
                            heading={t('explanationStatementHeading')}
                            text={t('explanationStatement')}
                            subHeading={t('explanationExample')}
                            exampleImage='statementOrderExampleImage'
                            isDropdown={true}
                        />
                    </div>
                    <div className='infoCards'>
                        <InfoCard
                            heading={t('explanationImageHeading')}
                            text={t('explanationImage')}
                            subHeading={t('explanationExample')}
                            exampleImage='imageSelectionExampleImage'
                            isDropdown={true}
                        />
                    </div>
                    <div className='infoCards'>
                        <InfoCard
                            heading={t('explanationResultHeading')}
                            text={t('explanationResult')}
                            subHeading={t('explanationExample')}
                            exampleImage='resultExampleImage'
                            isDropdown={true}
                        />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};
export default Info;