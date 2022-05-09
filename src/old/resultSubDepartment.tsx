import React from "react";
/*
import React, {useEffect, useState} from "react";
import '../styles/result.style.css';
import {Navbar} from "../molecule/navbar";
import {SubDepartments} from "../../subDepartments";
import {ResultText} from "../atoms/resultText";
import {InfoCard} from "../atoms/infoCard";
import {AlertDialog} from "../atoms/alertDialog";
import {useTranslation} from "react-i18next";

interface resultSubDepProps {
    information: any[]
    setIsDepClicked?: React.Dispatch<React.SetStateAction<{ strat: boolean; interactive: boolean; tech: boolean; }>>
}

export const ResultSubDepartment = ({information, setIsDepClicked

}: resultSubDepProps) => {
    const [carousel, setCarousel] = useState({first: 'leftCard', second: 'middleCard', third: 'rightCard'});
    const [disabledButtons, setDisabledButtons] = useState('');
    const [topThreeDep, setTopThreeDep] = useState([0, 0, 0]);
    const [backToResult, setBackToResult] = useState(false);
    const sortedArray = information.sort((a, b) => (a.points < b.points) ? 1 : -1); //sorts array that is sent in as prop, by points, finding the three with most points
    const { t } = useTranslation();
    const subDepArray = SubDepartments(t);

    useEffect(() => {
        let arr: any[] | ((prevState: number[]) => number[]) = [];
        for (let subDep of subDepArray) {
            if (sortedArray[0].subdivision === subDep.id) {
                arr.splice(0, 0, subDepArray.indexOf(subDep))
            }
            if (sortedArray[1].subdivision === subDep.id) {
                arr.splice(1, 0, subDepArray.indexOf(subDep))
            }
            if (sortedArray[2].subdivision === subDep.id) {
                arr.splice(2, 0, subDepArray.indexOf(subDep))
            }
        }
        setTopThreeDep(arr);
    }, []);

    useEffect(() => {
        setDisabledButtons('disabledButtons');
        setTimeout(() => setDisabledButtons(''), 700)
    }, [carousel]);

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
        setBackToResult(true);
    };

    if(backToResult) {
        return (
            <AlertDialog end={false} backToResult={true} setBackToResult={setBackToResult} setIsDepClicked={setIsDepClicked}/>
        )
    }
    return(
        <div data-testid={'resultComponent'} className='wrapper'>
            <Navbar/>
            <div className='result'>
                <div className='gradientDiv'>
                    <ResultText result={''}/>
                    <div className={'sub-dep'}>
                    <p>{t('subDivisionFit')}</p>
                        <ul>
                            <li>{subDepArray[topThreeDep[0]].title}</li>
                            <li>{subDepArray[topThreeDep[1]].title}</li>
                            <li>{subDepArray[topThreeDep[2]].title}</li>
                        </ul>
                    </div>
                </div>
                <div className='subCarousel'>
                    <div className={carousel.first+' leftCarouselItem'}>
                        <InfoCard
                            heading={subDepArray[topThreeDep[2]].title}
                            link={subDepArray[topThreeDep[2]].link}
                            text={subDepArray[topThreeDep[2]].infoText}
                            subHeading={t('resultSubHeading')}
                            subText={subDepArray[topThreeDep[2]].infoSubText}
                            linkText={t('resultSubText') + subDepArray[topThreeDep[2]].title}
                        />
                    </div>
                    <div className={carousel.second+' middleCarouselItem'} data-testid='carouselFront'>
                        <InfoCard
                            heading={subDepArray[topThreeDep[0]].title}
                            link={subDepArray[topThreeDep[0]].link}
                            text={subDepArray[topThreeDep[0]].infoText}
                            subHeading={t('resultSubHeading')}
                            subText={subDepArray[topThreeDep[0]].infoSubText}
                            linkText={t('resultSubText') + subDepArray[topThreeDep[0]].title}
                        />
                    </div>
                    <div className={carousel.third+' rightCarouselItem'}>
                        <InfoCard
                            heading={subDepArray[topThreeDep[1]].title}
                            link={subDepArray[topThreeDep[1]].link}
                            text={subDepArray[topThreeDep[1]].infoText}
                            subHeading={t('resultSubHeading')}
                            subText={subDepArray[topThreeDep[1]].infoSubText}
                            linkText={t('resultSubText') + subDepArray[topThreeDep[1]].title}
                        />
                    </div>
                    <a className={disabledButtons+' leftArrow'} onClick={handleLeftArrow} />
                    <a className={disabledButtons+' rightArrow'} onClick={handleRightArrow} data-testid='rightArrow'/>
                </div>
                <div className='buttonDiv'>
                    <button className={'btn-goToSubDep'} onClick={handleClick}>{t('subResultHome')}</button>
                </div>
            </div>
        </div>
    );
};

 */