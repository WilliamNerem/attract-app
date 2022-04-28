import {Navbar} from "../components/molecule/navbar";
import {ResetStates} from "../resetStates";
import {InfoCard} from "../components/atoms/infoCard";
import React, {useState} from "react";
import '../styles/info.style.css'
import {Footer} from "../components/molecule/footer";
import {useTranslation} from "react-i18next";
import Backdrop from "@mui/material/Backdrop";
import {StrategyAndConsultingSubDepartments} from "../components/organisms/strategyAndConsultingSubdepartments";
import {TechnologySubDepartments} from "../components/organisms/technologySubdepartments";
import {InteractiveSubDepartments} from "../components/organisms/interactiveSubdepartments";

const Info = () => {
    const [openSubDep, setOpenSubDep] = useState(false);
    const [classNameSubSC, setClassNameSubSC] = useState('subInfoClosed');
    const [classNameSubTech, setClassNameSubTech] = useState('subInfoClosed');
    const [classNameSubInt, setClassNameSubInt] = useState('subInfoClosed');
    const [wrapperHeight, setWrapperHeight] = useState('auto');
    ResetStates();
    const { t } = useTranslation();

    const onButtonClick = (department: string) => {
        if(department === 'Strategy & Consulting') {
            window.scrollTo({top: 0, behavior: "smooth"});
            setOpenSubDep(true);
            setClassNameSubSC('subInfoOpen');
            setTimeout(() => {
                setWrapperHeight('95vh');
            }, 500);
        }
        if(department === 'Interactive') {
            setOpenSubDep(true);
            setClassNameSubInt('subInfoOpen');
            window.scrollTo({top: 0, behavior: "smooth"});
            setTimeout(() => {
                setWrapperHeight('95vh');
            }, 500);
        }
        if(department === 'Technology') {
            setOpenSubDep(true);
            setClassNameSubTech('subInfoOpen');
            window.scrollTo({top: 0, behavior: "smooth"});
            setTimeout(() => {
                setWrapperHeight('95vh');
            }, 500);
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
                    }}/>
                </div>
                <div className={classNameSubTech}>
                    <TechnologySubDepartments close={() => {
                        setClassNameSubTech('subInfoClosed');
                        setWrapperHeight('auto');
                        setTimeout(() => {
                            setOpenSubDep(false);
                        }, 300);
                    }}/>
                </div>
                <div className={classNameSubInt}>
                    <InteractiveSubDepartments close={() => {
                        setClassNameSubInt('subInfoClosed');
                        setWrapperHeight('auto');
                        setTimeout(() => {
                            setOpenSubDep(false);
                        }, 300);
                    }}/>
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
                        />
                    </div>
                    <div className='infoCards'>
                        <InfoCard
                            heading='Technology'
                            text={t('infoCardTextTech')}
                            linkText={t('infoCardLinkTect')}
                            link='https://www.accenture.com/no-en/about/technology-index'
                            isDropdown={true}
                            onButtonClick={() => onButtonClick('Technology')}
                        />
                    </div>
                    <div className='infoCards'>
                        <InfoCard
                            heading='Interactive'
                            text={t('infoCardTextInteractive')}
                            linkText={t('infoCardLinkInteractive')}
                            link='https://www.accenture.com/no-en/about/accenture-interactive-index'
                            isDropdown={true}
                            onButtonClick={() => onButtonClick('Interactive')}
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
                    <Footer/>
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