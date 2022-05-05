import {Navbar} from "../components/molecule/navbar";
import {ResetStates} from "../resetStates";
import {InfoCard} from "../components/atoms/infoCard";
import React, {useEffect, useState} from "react";
import '../styles/info.style.css'
import {Footer} from "../components/molecule/footer";
import {useTranslation} from "react-i18next";
import Backdrop from "@mui/material/Backdrop";
import {StrategyAndConsultingSubDepartments} from "../components/organisms/strategyAndConsultingSubdepartments";
import {TechnologySubDepartments} from "../components/organisms/technologySubdepartments";
import {InteractiveSubDepartments} from "../components/organisms/interactiveSubdepartments";
import i18n from "../i18n";

const Info = () => {
    const [openSubDep, setOpenSubDep] = useState(false);
    const [classNameSubSC, setClassNameSubSC] = useState('subInfoClosed');
    const [classNameSubTech, setClassNameSubTech] = useState('subInfoClosed');
    const [classNameSubInt, setClassNameSubInt] = useState('subInfoClosed');
    const [wrapperHeight, setWrapperHeight] = useState('auto');
    const [tabIndexSC, setTabIndexSC] = useState(-1);
    const [tabIndexTech, setTabIndexTech] = useState(-1);
    const [tabIndexSong, setTabIndexSong] = useState(-1);
    const [tabIndex, setTabIndex] = useState(0);
    const [imageLanguage, setImageLanguage] = useState({
        likert: 'likertScaleExampleImage',
        statementOrder: 'statementOrderExampleImage',
        result: 'resultExampleImage'
    });
    ResetStates();
    const { t } = useTranslation();

    useEffect(() => {
        changeImageLanguage();
    }, [i18n.language]);

    const onButtonClick = (department: string) => {
        if(department === 'Strategy & Consulting') {
            window.scrollTo({top: 0, behavior: "smooth"});
            setOpenSubDep(true);
            setClassNameSubSC('subInfoOpen');
            setTimeout(() => {
                setWrapperHeight('95vh');
            }, 500);
            setTabIndexSC(0);
            setTabIndex(-1);
        }
        if(department === 'Song') {
            setOpenSubDep(true);
            setClassNameSubInt('subInfoOpen');
            window.scrollTo({top: 0, behavior: "smooth"});
            setTimeout(() => {
                setWrapperHeight('95vh');
            }, 500);
            setTabIndexSong(0);
            setTabIndex(-1);
        }
        if(department === 'Technology') {
            setOpenSubDep(true);
            setClassNameSubTech('subInfoOpen');
            window.scrollTo({top: 0, behavior: "smooth"});
            setTimeout(() => {
                setWrapperHeight('95vh');
            }, 500);
            setTabIndexTech(0);
            setTabIndex(-1);
        }

    };

    const changeImageLanguage = () => {
        if (i18n.language === 'en'){
            setImageLanguage({
                likert: 'likertScaleExampleImageEnglish',
                statementOrder: 'statementOrderExampleImageEnglish',
                result: 'resultExampleImageEnglish'
            });
        } else {
            setImageLanguage({
                likert: 'likertScaleExampleImage',
                statementOrder: 'statementOrderExampleImage',
                result: 'resultExampleImage'
            });
        }
    };

    return (
        <>
            <Navbar/>
            <div className='info' data-testid={'infoPage'} style={{height: wrapperHeight}}>
                <div className={classNameSubSC}>
                    <StrategyAndConsultingSubDepartments close={() => {
                        setClassNameSubSC('subInfoClosed');
                        setWrapperHeight('auto');
                        setTimeout(() => {
                            setOpenSubDep(false);
                        }, 300);
                        setTabIndexSC(-1);
                        setTabIndex(0);
                    }} tabIndex={tabIndexSC}/>
                </div>
                <div className={classNameSubTech}>
                    <TechnologySubDepartments close={() => {
                        setClassNameSubTech('subInfoClosed');
                        setWrapperHeight('auto');
                        setTimeout(() => {
                            setOpenSubDep(false);
                        }, 300);
                        setTabIndexTech(-1);
                        setTabIndex(0);
                    }} tabIndex={tabIndexTech}/>
                </div>
                <div className={classNameSubInt}>
                    <InteractiveSubDepartments close={() => {
                        setClassNameSubInt('subInfoClosed');
                        setWrapperHeight('auto');
                        setTimeout(() => {
                            setOpenSubDep(false);
                        }, 300);
                        setTabIndexSong(-1);
                        setTabIndex(0);
                    }} tabIndex={tabIndexSong}/>
                </div>
                <div className='gradientDiv'>
                    <h1 className='infoText'>{t('infoH1')}</h1>
                    <p className='infoSubText'>{t('infoH1Sub')}</p>
                </div>
                <div className={'info-wrapper'}>
                    <div className='infoCards firstValgomatCard'>
                        <InfoCard
                            heading='Strategy & Consulting'
                            text={t('infoCardTextSC')}
                            linkText={t('infoCardLinkSC')}
                            link='https://www.accenture.com/no-en/about/consulting-index'
                            isDropdown={true}
                            onButtonClick={() => onButtonClick('Strategy & Consulting')}
                            tabIndex={tabIndex}
                        />
                    </div>
                    <div className='infoCards'>
                        <InfoCard
                            heading='Technology'
                            text={t('infoCardTextTech')}
                            linkText={t('infoCardLinkTech')}
                            link='https://www.accenture.com/no-en/about/technology-index'
                            isDropdown={true}
                            onButtonClick={() => onButtonClick('Technology')}
                            tabIndex={tabIndex}
                        />
                    </div>
                    <div className='infoCards'>
                        <InfoCard
                            heading='Song'
                            text={t('infoCardTextInteractive')}
                            linkText={t('infoCardLinkInteractive')}
                            link='https://www.accenture.com/no-en/about/accenture-interactive-index'
                            isDropdown={true}
                            onButtonClick={() => onButtonClick('Song')}
                            tabIndex={tabIndex}
                        />
                    </div>
                </div>
                <div className='grayBackgroundInfo'>
                    <div className='headingValgomatInfo'>
                        <h1 className='infoText'>{t('infoH1Answer')}</h1>
                        <p className='infoSubText'>{t('infoH1AnswerSub')}</p>
                    </div>
                    <div className={'valgomatInfo-wrapper'}>
                        <div className='infoCards firstValgomatCard'>
                            <InfoCard
                                heading={t('explanationLikertHeading')}
                                text={t('explanationLikert')}
                                exampleImage={imageLanguage.likert}
                                subHeading={t('explanationExample')}
                                isDropdown={true}
                                tabIndex={tabIndex}
                            />
                        </div>
                        <div className='infoCards'>
                            <InfoCard
                                heading={t('explanationStatementHeading')}
                                text={t('explanationStatement')}
                                subHeading={t('explanationExample')}
                                exampleImage={imageLanguage.statementOrder}
                                isDropdown={true}
                                tabIndex={tabIndex}
                            />
                        </div>
                        <div className='infoCards'>
                            <InfoCard
                                heading={t('explanationImageHeading')}
                                text={t('explanationImage')}
                                subHeading={t('explanationExample')}
                                exampleImage='imageSelectionExampleImage'
                                isDropdown={true}
                                tabIndex={tabIndex}
                            />
                        </div>
                        <div className='infoCards'>
                            <InfoCard
                                heading={t('explanationResultHeading')}
                                text={t('explanationResult')}
                                subHeading={t('explanationExample')}
                                exampleImage={imageLanguage.result}
                                isDropdown={true}
                                tabIndex={tabIndex}
                            />
                        </div>
                    </div>
                    <Footer tabIndex={tabIndex}/>
                </div>
            </div>
            <Backdrop
                open={openSubDep}
                style={{zIndex: 8}}
            />
        </>
    )
};
export default Info;