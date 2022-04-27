import React, {useEffect, useState} from "react";
import { Button } from "../atoms/button";
import '../../styles/result.style.css';
import {ResultText} from "../atoms/resultText";
import {Pallet} from "../molecule/pallet";
import {InfoCard} from "../atoms/infoCard";
import {Navbar} from "../molecule/navbar";
import {departments} from "../../departments";
import {InfoButton} from "../atoms/infoButton";
import EmailDepSender from "../atoms/emailDepSender";
import {ShowExplanation} from "../molecule/showExplanation";
import Backdrop from "@mui/material/Backdrop";
import {useTranslation} from "react-i18next";
import {StrategyAndConsultingSubDepartments} from "./strategyAndConsultingSubdepartments";
import {TechnologySubDepartments} from "./technologySubdepartments";
import {InteractiveSubDepartments} from "./interactiveSubdepartments";

interface resultProps {
    totalPointsArray: any[]
}

export const Result = ({totalPointsArray

}: resultProps) => {
    const [carousel, setCarousel] = useState({first: 'leftCard', second: 'middleCard', third: 'rightCard'});
    const [disabledButtons, setDisabledButtons] = useState('');
    const maxVal = Math.max(...totalPointsArray);
    const { t } = useTranslation();
    const valPos = totalPointsArray.indexOf(maxVal);
    const result = departments(t)[valPos].name;
    const [open, setOpen] = useState(false);
    const [openSubDep, setOpenSubDep] = useState(false);
    const [classNameSubSC, setClassNameSubSC] = useState('subInfoClosed');
    const [classNameSubTech, setClassNameSubTech] = useState('subInfoClosed');
    const [classNameSubInt, setClassNameSubInt] = useState('subInfoClosed');
    const [wrapperHeight, setWrapperHeight] = useState('auto');

    useEffect(() => {
        setDisabledButtons('disabledButtons');
        setTimeout(() => setDisabledButtons(''), 700)
    }, [carousel]);


    const sortedArr = totalPointsArray.slice().sort((a, b) => b - a).slice(0,3);
    let depArr: number[] = [] ;
    depArr = [sortedArr.indexOf(totalPointsArray[0]), sortedArr.indexOf(totalPointsArray[1]), sortedArr.indexOf(totalPointsArray[2])]; //Index of strat, tech and inter

    if(sortedArr[1] === sortedArr[2]) {
        depArr[totalPointsArray.lastIndexOf(sortedArr[1])] = sortedArr.lastIndexOf(sortedArr[1]); // Differentiate indexes of the same value
    }

    const depAtPlacement = (position: number) => {
        return departments(t)[depArr.indexOf(position)];
    };

    const handleRightArrow = () => {
        const first = carousel.third;
        const second = carousel.first;
        const third = carousel.second;
        setCarousel({first: first, second: second, third: third})
    };

    const handleLeftArrow = () => {
        const first = carousel.second;
        const second = carousel.third;
        const third = carousel.first;
        setCarousel({first: first, second: second, third: third})
    };

    const handleClick = () => {
        setOpen(true);
    };

    const onButtonClick = (department: string) => {
        if(department === 'Strategy & Consulting') {
            setOpenSubDep(true);
            setClassNameSubSC('subInfoOpen');
            window.scrollTo({top: 0, behavior: "smooth"});
            setTimeout(() => {
                setWrapperHeight('100vh');
            }, 500);
        }
        if(department === 'Interactive') {
            setOpenSubDep(true);
            setClassNameSubInt('subInfoOpen');
            window.scrollTo({top: 0, behavior: "smooth"});
            setTimeout(() => {
                setWrapperHeight('100vh');
            }, 500);
        }
        if(department === 'Technology') {
            setOpenSubDep(true);
            setClassNameSubTech('subInfoOpen');
            window.scrollTo({top: 0, behavior: "smooth"});
            setTimeout(() => {
                setWrapperHeight('100vh');
            }, 500);
        }

    };

    return (
        <div data-testid={'resultComponent'} className='wrapper' style={{height: wrapperHeight}}>

            <Backdrop
                open={open}
                onClick={() => {
                    setOpen(false);
                }}
                style={{zIndex: 100}}
                data-testid='showExplanation'
            >
                <ShowExplanation questionType={'result'}/>
            </Backdrop>
            <Backdrop
                open={openSubDep}
                style={{zIndex: 8}}
            />
            <Navbar/>
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
            <div className='result'>
                <div className='gradientDiv'>
                    <InfoButton handleClick={handleClick} whiteIcon={true} data-testid='infoButton'/>
                    <ResultText result={result}/>
                    <Pallet totalPointsArray={totalPointsArray}/>
                </div>
                <div className='carousel'>
                    <div className={carousel.first + ' leftCarouselItem'}>
                        <InfoCard
                            heading={depAtPlacement(1).title}
                            link={depAtPlacement(1).link}
                            text={depAtPlacement(1).infoTextCard}
                            subHeading={t('resultSubHeading')}
                            subText={depAtPlacement(1).infoSubText}
                            linkText={t('resultSubText') + depAtPlacement(1).title}
                            onButtonClick={() => onButtonClick(depAtPlacement(1).title)}
                        />
                    </div>
                    <div className={carousel.second + ' middleCarouselItem'} data-testid={'carouselFront'}>
                        <InfoCard
                            heading={depAtPlacement(0).title}
                            link={depAtPlacement(0).link}
                            text={depAtPlacement(0).infoTextCard}
                            subHeading={t('resultSubHeading')}
                            subText={depAtPlacement(0).infoSubText}
                            linkText={t('resultSubText') + depAtPlacement(0).title}
                            onButtonClick={() => onButtonClick(depAtPlacement(0).title)}
                        />
                    </div>
                    <div className={carousel.third + ' rightCarouselItem'}>
                        <InfoCard
                            heading={depAtPlacement(2).title}
                            link={depAtPlacement(2).link}
                            text={depAtPlacement(2).infoTextCard}
                            subHeading={t('resultSubHeading')}
                            subText={depAtPlacement(2).infoSubText}
                            linkText={t('resultSubText') + depAtPlacement(2).title}
                            onButtonClick={() => onButtonClick(depAtPlacement(2).title)}
                        />
                    </div>
                    <a className={disabledButtons + ' leftArrow'} onClick={handleLeftArrow}/>
                    <a className={disabledButtons + ' rightArrow'} onClick={handleRightArrow} data-testid={'rightArrow'}/>
                </div>
                <EmailDepSender totalPointsArray={totalPointsArray}/>
                <div className='buttonDiv'>
                    <Button href='/' text={t('resultHome')}/>
                </div>
            </div>
        </div>
    );
};