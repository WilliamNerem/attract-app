import React, {useEffect, useState} from "react";
import { Button } from "../atoms/button";
import '../../styles/result.style.css';
import {ResultText} from "../atoms/resultText";
import {Pallet} from "../atoms/pallet";
import {InfoCard} from "../atoms/infoCard";
import {Navbar} from "../molecule/navbar";
import {departments} from "../../departments";
import {useSelector} from "react-redux";
import {State} from "../../redux";
import {ValgomatPartTwo} from "./valgomatPartTwo";
import {QuestionsDataInteractive, QuestionsDataSC, QuestionsDataTech} from "../../questions";
import {AlertDialog} from "../atoms/alertDialog";

interface resultProps {
    totalPointsArray: any[]
}

export const Result = ({totalPointsArray

}: resultProps) => {
    const counterPartTwo = useSelector((state: State) => state.questionCounterPartTwo);
    const [carousel, setCarousel] = useState({first: 'leftCard', second: 'middleCard', third: 'rightCard'});
    const [disabledButtons, setDisabledButtons] = useState('');
    const maxVal = Math.max(...totalPointsArray);
    const valPos = totalPointsArray.indexOf(maxVal);
    const result = departments[valPos].name;
    const [isDepClicked, setIsDepClicked] = useState( { strat: false, interactive: false, tech: false});
    let link;
    let infoText;

    useEffect(() => {
        if (counterPartTwo === 0){
            setIsDepClicked({ strat: false, interactive: false, tech: false});
        }
    }, []);

    useEffect(() => {
        setDisabledButtons('disabledButtons');
        setTimeout(() => setDisabledButtons(''), 700)
    }, [carousel]);

    const information = [
        {
            title: 'Strategy & Consulting',
            link: 'https://www.accenture.com/no-en/about/consulting-index',
            infoText: 'I Strategy & Consulting vil du være med på å definere og implementere morgendagens teknologiske ' +
                'løsninger for private- og offentlige aktører. Du vil jobbe i store og små ' +
                'prosjektteam hvor man samarbeider på tvers av avdelinger for å løse problemstillinger innenfor et mangfold av ' +
                'industrier.',
            infoSubText: 'I følge valgomaten passer du ikke best i Strategy & Consulting, men dette betyr ikke at det ikke finnes muligheter for deg i denne avdelingen.'
        },
        {
            title: 'Technology',
            link: 'https://www.accenture.com/no-en/about/technology-index',
            infoText: 'I Technology blir du involvert i noen av Norges mest spennende og meningsfylte IT-prosjekter. Sammen ' +
                'med kunden leverer vi innovative løsninger som bidrar til verdiskaping både for bedrifter og samfunnet. Vi ' +
                'satser stort innenfor skyløsninger, digital infrastruktur, digitalisering og prosessautomatisering.',
            infoSubText: 'I følge valgomaten passer du ikke best i Technology, men dette betyr ikke at det ikke finnes muligheter for deg i denne avdelingen.'
        },
        {
            title: 'Interactive',
            link: 'https://www.accenture.com/no-en/about/accenture-interactive-index',
            infoText: 'Hos Interactive jobber designere og kreatørene. Vi skaper løsninger ved å kombinere kreativitet og fokus på sluttbruker med ' +
                'teknisk innsikt og gjennomføringsevne. Interactive-teamet bruker en kombinasjon av design, markedsføring, innhold og forretningsforståelse ' +
                'til å skape innovative og bransjeledende brukeropplevelser.',
            infoSubText: 'I følge valgomaten passer du ikke best i Interactive, men dette betyr ikke at det ikke finnes muligheter for deg i denne avdelingen.'
        }
    ];

    if (result === 'Strategy & Consulting') {
        link = information[0].link;
        infoText = information[0].infoText;
        information.splice(0, 1)
    } else if (result === 'Technology') {
        link = information[1].link;
        infoText = information[1].infoText;
        information.splice(1, 1)
    } else if (result === 'Interactive') {
        link = information[2].link;
        infoText = information[2].infoText;
        information.splice(2, 1)
    } else {
        link = 'https://www.accenture.com/no-en';
        infoText = 'Ingen info å finne';
    }

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

    const onButtonClick = (department: string) => {
        if(department === 'Strategy & Consulting') {
            setIsDepClicked({strat: true, interactive: false, tech: false});
        }
        if(department === 'Interactive') {
            setIsDepClicked({strat: false, interactive: true, tech: false});
        }
        if(department === 'Technology') {
            setIsDepClicked({strat: false, interactive: false, tech: true});
        }

    };

    if (counterPartTwo === 0){
        return (
            <>
                <AlertDialog end={true} totalPointsArray={totalPointsArray} setIsDepClicked={setIsDepClicked}/>
            </>
        )
    } else if (isDepClicked.tech) {
        return (
            <ValgomatPartTwo questionArray={QuestionsDataTech()} isTech={true}/>
        )
    }
    else if (isDepClicked.interactive) {
        return (
            <ValgomatPartTwo questionArray={QuestionsDataInteractive()} isInteractive={true}/>
        )
    }
    else if (isDepClicked.strat) {
        return (
            <ValgomatPartTwo questionArray={QuestionsDataSC()} isStrat={true}/>
        )
    }
    else {
        return (
            <div data-testid={'resultComponent'} className='wrapper'>
                <Navbar/>
                <div className='result'>
                    <div className='gradientDiv'>
                        <ResultText result={result}/>
                        <Pallet totalPointsArray={totalPointsArray}/>
                    </div>
                    <div className='carousel'>
                        <div className={carousel.first + ' leftCarouselItem'}>
                            <InfoCard
                                heading={information[0].title}
                                link={information[0].link}
                                text={information[0].infoText}
                                subHeading={'Veien videre'}
                                subText={information[0].infoSubText}
                                linkText={'Les mer om ' + information[0].title}
                                onButtonClick={() => onButtonClick(information[0].title)}
                            />
                        </div>
                        <div className={carousel.second + ' middleCarouselItem'} data-testid={'carouselFront'}>
                            <InfoCard
                                heading={result}
                                link={link}
                                text={infoText}
                                subHeading={'Veien videre'}
                                subText={'Neste steg er å bli kjent med ' + result + '.'}
                                linkText={'Les mer om ' + result}
                                onButtonClick={() => onButtonClick(result)}
                            />
                        </div>
                        <div className={carousel.third + ' rightCarouselItem'}>
                            <InfoCard
                                heading={information[1].title}
                                link={information[1].link}
                                text={information[1].infoText}
                                subHeading={'Veien videre'}
                                subText={information[1].infoSubText}
                                linkText={'Les mer om ' + information[1].title}
                                onButtonClick={() => onButtonClick(information[1].title)}
                            />
                        </div>
                        <a className={disabledButtons + ' leftArrow'} onClick={handleLeftArrow}/>
                        <a className={disabledButtons + ' rightArrow'} onClick={handleRightArrow} data-testid={'rightArrow'}/>
                    </div>
                    <div className='buttonDiv'>
                        <Button href='/' text='Tilbake til forsiden'/>
                    </div>
                </div>
            </div>
        );
    }
};