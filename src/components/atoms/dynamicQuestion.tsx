import React from 'react';
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
    const { decreaseCounter } = bindActionCreators(actionCreators, dispatch);
    let done = false;
    let pointsArray: number[] = [];

    const checkClicked = (chosenDepartment: number) => {
        departmentsArray.map((differenceCharacteristic, index) => {
            pointsArray[index] = departmentsArray[index].points;
        });

        pointsArray[chosenDepartment] += 1;
        decreaseCounter();
        done = true;

    }
    if(done) {
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
                <button className='valgomatButton' onClick={() => checkClicked(1)}>Det viktigste for meg er at produktet fungerer godt ved hjelp av en smart teknisk løsning</button>
                <button className='valgomatButton' onClick={() => checkClicked(2)}>Det er viktig for meg at et produkt ser bra ut</button>
                <button className='valgomatButton' onClick={() => decreaseCounter()}>Forrige spørsmål</button>
            </div>
        )
    } else if (firstDep + secondDep === 2) {
        return (
            <div className={'dynamicQuestion'}>
                <h4>Trykk på den påstanden som passer best</h4>
                <button className='valgomatButton' onClick={() => checkClicked(0)}>Jeg liker business</button>
                <button className='valgomatButton' onClick={() => checkClicked(2)}>Jeg liker design</button>
                <button className='valgomatButton' onClick={() => decreaseCounter()}>Forrige spørsmål</button>
            </div>
        )
    } else if (firstDep + secondDep === 1) {
        return (
            <div className={'dynamicQuestion'}>
                <h4>Trykk på den påstanden som passer best</h4>
                <button className='valgomatButton' onClick={() => checkClicked(0)}>Jeg foretrekker å bytte arbeidsmiljø ofte</button>
                <button className='valgomatButton' onClick={() => checkClicked(1)}>Jeg jobber gjerne på et prosjekt i lang tid</button>
                <button className='valgomatButton' onClick={() => decreaseCounter()}>Forrige spørsmål</button>
            </div>
        )
    }
    return null;
}
