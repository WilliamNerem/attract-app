import React, {useEffect, useState} from "react";
import { Button } from "../atoms/button";
import '../../styles/result.style.css';
import {ResultText} from "../atoms/resultText";
import {InfoCard} from "../atoms/infoCard";
import {Navbar} from "../molecule/navbar";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../redux";

interface resultSubDepProps {
    information: any[]
}

export const ResultSubDepartment = ({information

}: resultSubDepProps) => {
    const dispatch = useDispatch();
    const { valgomatIsInProgress } = bindActionCreators(actionCreators, dispatch);
    const [carousel, setCarousel] = useState({first: 'leftCard', second: 'middleCard', third: 'rightCard'});
    const [disabledButtons, setDisabledButtons] = useState('');
    valgomatIsInProgress(false);

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

    // const exampleArray = [
    //     {
    //         title: 'Sub department 1',
    //         link: 'https://www.accenture.com/no-en/',
    //         infoText: 'Info tekst om sub department 1',
    //         infoSubText: 'Noe info subtext om denne'
    //     },
    //     {
    //         title: 'Sub department 2',
    //         link: 'https://www.accenture.com/no-en/',
    //         infoText: 'Info tekst om sub department 2',
    //         infoSubText: 'Noe info subtext om denne'
    //     },
    //     {
    //         title: 'Sub department 3',
    //         link: 'https://www.accenture.com/no-en/',
    //         infoText: 'Info tekst om sub department 3',
    //         infoSubText: 'Noe info subtext om denne'
    //     },
    // ]

    return(
        <div data-testid={'resultComponent'} className='wrapper'>
            <Navbar/>
            <div className='result'>
                <div className='gradientDiv'>
                    <ResultText result={''}/>
                    <p className={'sub-dep'}>{information[0].title+', '+information[1].title+', '+information[2].title}</p>
                </div>
                <div className='carousel'>
                    <div className={carousel.first+' leftCarouselItem'}>
                        <InfoCard
                            heading={information[0].title}
                            link={information[0].link}
                            text={information[0].infoText}
                            subHeading={'Veien videre'}
                            subText={information[0].infoSubText}
                            linkText={'Les mer om '+information[0].title}
                        />
                    </div>
                    <div className={carousel.second+' middleCarouselItem'}>
                        <InfoCard
                            heading={information[1].title}
                            link={information[1].link}
                            text={information[1].infoText}
                            subHeading={'Veien videre'}
                            subText={information[1].infoSubText}
                            linkText={'Les mer om '+information[1].title}
                        />
                    </div>
                    <div className={carousel.third+' rightCarouselItem'}>
                        <InfoCard
                            heading={information[2].title}
                            link={information[2].link}
                            text={information[2].infoText}
                            subHeading={'Veien videre'}
                            subText={information[2].infoSubText}
                            linkText={'Les mer om '+information[2].title}
                        />
                    </div>
                    <a className={disabledButtons+' leftArrow'} onClick={handleLeftArrow} />
                    <a className={disabledButtons+' rightArrow'} onClick={handleRightArrow}/>
                </div>
                <div className='buttonDiv'>
                    <Button href='/' text='Tilbake til forsiden'/>
                </div>
            </div>
        </div>
    );
};