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

    let statement1 = '';
    let statement2 = '';
    let department1 = '';
    let department2 = '';

    const handleClick = (department: string) => {
        if (department === 'strategyAndConsulting'){
            strategyAndConsultingPoints(1);
        } else if(department === 'technology'){
            technologyPoints(1);
        } else {
            interactivePoints(1);
        }
        setUpdate(true);
    };

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

    if (firstDep + secondDep === 3) { //Then we know it's tech vs interactive
        statement1 = 'Det viktigste for meg er at produktet fungerer godt ved hjelp av en smart teknisk løsning';
        statement2 = 'Det er viktig for meg at et produkt ser bra ut';
        department1 = 'technology';
        department2 = 'interactive';
    } else if (firstDep + secondDep === 2) {
        statement1 = 'Jeg liker business';
        statement2 = 'Jeg liker design';
        department1 = 'strategyAndConsulting';
        department2 = 'interactive';
    } else if (firstDep + secondDep === 1) {
        statement1 = 'Jeg foretrekker å bytte arbeidsmiljø ofte';
        statement2 = 'Jeg jobber gjerne på et prosjekt i lang tid';
        department1 = 'strategyAndConsulting';
        department2 = 'technology';
    }

    return(
        <div className={'dynamicQuestion'}>
            Trykk på den påstanden som passer best
            <div className='infoCardDivider'/>
            <div className='dynamicButtonDiv'>
                <div className='dynamicButtonWrapper'>
                    <button className='dynamicButton' onClick={() => handleClick(department1)}>VELG</button>
                </div>
            </div>
            <div className='infoCardDivider'/>
            <div className='dynamicButtonDiv'>
                <button className='dynamicButton' onClick={() => handleClick(department2)}>VELG</button>
            </div>
        </div>
    );
};
