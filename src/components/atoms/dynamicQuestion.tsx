import React, {useState} from 'react';
import '../../styles/valgomat.style.css'
import {useDispatch, useSelector} from "react-redux";
import {actionCreators, State} from "../../redux";
import {bindActionCreators} from "redux";
import {Result} from "../organisms/result";


interface DynamicQuestionProps {
    firstDep: number;
    secondDep: number;
}

export const DynamicQuestion = ({firstDep, secondDep}: DynamicQuestionProps) => {
    const dispatch = useDispatch();
    const departmentsArray = useSelector((state: State) => state.departmentsAlgorithm);
    const { technologyPoints, strategyAndConsultingPoints, interactivePoints, decreaseCounter } = bindActionCreators(actionCreators, dispatch);
    let pointsArray: number[] = [];
    const [update, setUpdate] = useState(false);

    if(update) { // Then one of the buttons has been pushed and we rerender DynamicQuestion
        departmentsArray.map((differenceCharacteristic, index) => {
            pointsArray[index] = departmentsArray[index].points;
        });
        return (
            <>
                <Result totalPointsArray={pointsArray}/>
            </>
        )
    }
    else if (firstDep + secondDep === 3) { //Then we know it's tech vs interactive
        return (
            <div className={'dynamicQuestion'}>
                <h4>Trykk på den påstanden som passer best</h4>
                <button className='valgomatButton' onClick={() => {technologyPoints(1); setUpdate(true)}}>Det viktigste for meg er at produktet fungerer godt ved hjelp av en smart teknisk løsning</button>
                <button className='valgomatButton' onClick={() => {interactivePoints(1); setUpdate(true)}}>Det er viktig for meg at et produkt ser bra ut</button>
                <button className='valgomatButton' onClick={() => decreaseCounter()}>Forrige spørsmål</button>
            </div>
        )
    } else if (firstDep + secondDep === 2) {
        return (
            <div className={'dynamicQuestion'}>
                <h4>Trykk på den påstanden som passer best</h4>
                <button className='valgomatButton' onClick={() => {strategyAndConsultingPoints(1); setUpdate(true)}}>Jeg liker business</button>
                <button className='valgomatButton' onClick={() => {interactivePoints(1); setUpdate(true)}}>Jeg liker design</button>
                <button className='valgomatButton' onClick={() => decreaseCounter()}>Forrige spørsmål</button>
            </div>
        )
    } else if (firstDep + secondDep === 1) {
        return (
            <div className={'dynamicQuestion'}>
                <h4>Trykk på den påstanden som passer best</h4>
                <button className='valgomatButton' onClick={() => {strategyAndConsultingPoints(1); setUpdate(true)}}>Jeg foretrekker å bytte arbeidsmiljø ofte</button>
                <button className='valgomatButton' onClick={() => {technologyPoints(1); setUpdate(true)}}>Jeg jobber gjerne på et prosjekt i lang tid</button>
                <button className='valgomatButton' onClick={() => decreaseCounter()}>Forrige spørsmål</button>
            </div>
        )
    }
    return null;
}
