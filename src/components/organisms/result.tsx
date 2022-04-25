import React, {useEffect, useState} from "react";
import { Button } from "../atoms/button";
import '../../styles/result.style.css';
import {ResultText} from "../atoms/resultText";
import {Pallet} from "../molecule/pallet";
import {InfoCard} from "../atoms/infoCard";
import {Navbar} from "../molecule/navbar";
import {departments} from "../../departments";
import {useDispatch, useSelector} from "react-redux";
import {actionCreators, State} from "../../redux";
import {ValgomatPartTwo} from "./valgomatPartTwo";
import {QuestionsDataInteractive, QuestionsDataSC, QuestionsDataTech} from "../../questions";
import {AlertDialog} from "../atoms/alertDialog";
import {InfoButton} from "../atoms/infoButton";
import EmailDepSender from "../atoms/emailDepSender";
import {ShowExplanation} from "../molecule/showExplanation";
import Backdrop from "@mui/material/Backdrop";
import {bindActionCreators} from "redux";

interface resultProps {
    totalPointsArray: any[]
}

export const Result = ({totalPointsArray

}: resultProps) => {
    const dispatch = useDispatch();
    const { subValgomatIsInProgress } = bindActionCreators(actionCreators, dispatch);
    const counterPartTwo = useSelector((state: State) => state.questionCounterPartTwo);
    const showAlertDialog = useSelector((state: State) => state.showAlertDialog);
    const subValgomatInProgress = useSelector((state: State) => state.subValgomatInProgress);
    const interactiveSub = useSelector((state: State) => state.interactiveSubdivision);
    const techSub = useSelector((state: State) => state.technologySubdivision);
    const stratSub = useSelector((state: State) => state.stratSubdivision);
    const [carousel, setCarousel] = useState({first: 'leftCard', second: 'middleCard', third: 'rightCard'});
    const [disabledButtons, setDisabledButtons] = useState('');
    const [currentDep, setCurrentDep] = useState('null');
    const maxVal = Math.max(...totalPointsArray);
    const valPos = totalPointsArray.indexOf(maxVal);
    const result = departments[valPos].name;
    const [isDepClicked, setIsDepClicked] = useState( { strat: false, interactive: false, tech: false});
    const [open, setOpen] = useState(false);


    useEffect(() => {
        if (counterPartTwo === 0){
            setIsDepClicked({ strat: false, interactive: false, tech: false});
        }
    }, []);


    const setSubDep = (name: string) => {  // Set sub departmentarray so that the result can be shown on infocards later
        if(name === 'Strategy & Consulting') {
            return stratSub;
        }
        else if(name === 'Technology') {
            return techSub;
        }
        else {
            return interactiveSub;
        }
    };

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
        return departments[depArr.indexOf(position)];
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
            setIsDepClicked({strat: true, interactive: false, tech: false});
            subValgomatIsInProgress(true);
            setCurrentDep('strat');
        }
        if(department === 'Interactive') {
            setIsDepClicked({strat: false, interactive: true, tech: false});
            subValgomatIsInProgress(true);
            setCurrentDep('int');
        }
        if(department === 'Technology') {
            setIsDepClicked({strat: false, interactive: false, tech: true});
            subValgomatIsInProgress(true);
            setCurrentDep('tech');
        }

    };

    if (counterPartTwo === 0){
        return (
            <AlertDialog end={false} backToResult={true} totalPointsArray={totalPointsArray} setIsDepClicked={setIsDepClicked} currentDep={currentDep}/>
        )
    }else if (showAlertDialog && subValgomatInProgress) {
        return (
            <AlertDialog end={false} setIsDepClicked={setIsDepClicked} />
        )
    } else if (isDepClicked.tech) {
        return (
            <ValgomatPartTwo questionArray={QuestionsDataTech()} isTech={true} setIsDepClicked={setIsDepClicked}/>
        )
    }
    else if (isDepClicked.interactive) {
        return (
            <ValgomatPartTwo questionArray={QuestionsDataInteractive()} isInteractive={true} setIsDepClicked={setIsDepClicked}/>
        )
    }
    else if (isDepClicked.strat) {
        return (
            <ValgomatPartTwo questionArray={QuestionsDataSC()} isStrat={true} setIsDepClicked={setIsDepClicked}/>
        )
    }
    else {
        return (
            <div data-testid={'resultComponent'} className='wrapper'>
                <Navbar/>
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
                                subHeading={'Veien videre'}
                                subText={depAtPlacement(1).infoSubText}
                                linkText={'Les mer om ' + depAtPlacement(1).title}
                                onButtonClick={() => onButtonClick(depAtPlacement(1).title)}
                                subDepArr={setSubDep(depAtPlacement(1).title)}
                            />
                        </div>
                        <div className={carousel.second + ' middleCarouselItem'} data-testid={'carouselFront'}>
                            <InfoCard
                                heading={depAtPlacement(0).title}
                                link={depAtPlacement(0).link}
                                text={depAtPlacement(0).infoTextCard}
                                subHeading={'Veien videre'}
                                subText={depAtPlacement(0).infoSubText}
                                linkText={'Les mer om ' + depAtPlacement(0).title}
                                onButtonClick={() => onButtonClick(depAtPlacement(0).title)}
                                subDepArr={setSubDep(depAtPlacement(0).title)}
                            />
                        </div>
                        <div className={carousel.third + ' rightCarouselItem'}>
                            <InfoCard
                                heading={depAtPlacement(2).title}
                                link={depAtPlacement(2).link}
                                text={depAtPlacement(2).infoTextCard}
                                subHeading={'Veien videre'}
                                subText={depAtPlacement(2).infoSubText}
                                linkText={'Les mer om ' + depAtPlacement(2).title}
                                onButtonClick={() => onButtonClick(depAtPlacement(2).title)}
                                subDepArr={setSubDep(depAtPlacement(2).title)}
                            />
                        </div>
                        <a className={disabledButtons + ' leftArrow'} onClick={handleLeftArrow}/>
                        <a className={disabledButtons + ' rightArrow'} onClick={handleRightArrow} data-testid={'rightArrow'}/>
                    </div>
                    <EmailDepSender totalPointsArray={totalPointsArray}/>
                    <div className='buttonDiv'>
                        <Button href='/' text='Tilbake til forsiden'/>
                    </div>
                </div>
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
            </div>
        );
    }
};