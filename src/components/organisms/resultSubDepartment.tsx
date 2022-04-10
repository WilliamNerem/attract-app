import React, {useEffect, useState} from "react";
import '../../styles/result.style.css';
import {Navbar} from "../molecule/navbar";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../redux";
import {SubDepartments} from "../../subDepartments";
import {ResultText} from "../atoms/resultText";
import {InfoCard} from "../atoms/infoCard";
import { Button } from "../atoms/button";

interface resultSubDepProps {
    information: any[]
}

export const ResultSubDepartment = ({information

}: resultSubDepProps) => {
    const dispatch = useDispatch();
    const { valgomatIsInProgress } = bindActionCreators(actionCreators, dispatch);
    const [carousel, setCarousel] = useState({first: 'leftCard', second: 'middleCard', third: 'rightCard'});
    const [disabledButtons, setDisabledButtons] = useState('');
    const [topThreeDep, setTopThreeDep] = useState([0, 0, 0]);
    valgomatIsInProgress(false);
    const sortedArray = information.sort((a, b) => (a.points < b.points) ? 1 : -1); //sorts array that is sent in as prop, by points, finding the three with most points
    const subDepArray = SubDepartments();

    useEffect(() => {
        let arr: any[] | ((prevState: number[]) => number[]) = [];
        for (let subDep of subDepArray) {
            if (sortedArray[0].subdivision === subDep.id) {
                console.log('Første plass: ' + sortedArray[0].subdivision + subDep.id + subDepArray.indexOf(subDep))
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

    return(
        <div data-testid={'resultComponent'} className='wrapper'>
            <Navbar/>
            <div className='result'>
                <div className='gradientDiv'>
                    <ResultText result={''}/>
                    <p className={'sub-dep'}>{subDepArray[topThreeDep[0]].title+', '+subDepArray[topThreeDep[1]].title+', '+subDepArray[topThreeDep[2]].title}</p>
                </div>
                <div className='carousel'>
                    <div className={carousel.first+' leftCarouselItem'}>
                        <InfoCard
                            heading={subDepArray[topThreeDep[2]].title}
                            link={subDepArray[topThreeDep[2]].link}
                            text={subDepArray[topThreeDep[2]].infoText}
                            subHeading={'Veien videre'}
                            subText={subDepArray[topThreeDep[2]].infoSubText}
                            linkText={'Les mer om '+subDepArray[topThreeDep[2]].title}
                        />
                    </div>
                    <div className={carousel.second+' middleCarouselItem'}>
                        <InfoCard
                            heading={subDepArray[topThreeDep[0]].title}
                            link={subDepArray[topThreeDep[0]].link}
                            text={subDepArray[topThreeDep[0]].infoText}
                            subHeading={'Veien videre'}
                            subText={subDepArray[topThreeDep[0]].infoSubText}
                            linkText={'Les mer om '+subDepArray[topThreeDep[0]].title}
                        />
                    </div>
                    <div className={carousel.third+' rightCarouselItem'}>
                        <InfoCard
                            heading={subDepArray[topThreeDep[1]].title}
                            link={subDepArray[topThreeDep[1]].link}
                            text={subDepArray[topThreeDep[1]].infoText}
                            subHeading={'Veien videre'}
                            subText={subDepArray[topThreeDep[1]].infoSubText}
                            linkText={'Les mer om '+subDepArray[topThreeDep[1]].title}
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