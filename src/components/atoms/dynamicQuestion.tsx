import React from 'react';
import '../../styles/valgomat.style.css'


interface DynamicQuestionProps {
    firstDep: number;
    secondDep: number;
}

export const DynamicQuestion = ({firstDep, secondDep}: DynamicQuestionProps) => {
    if (firstDep + secondDep === 3) { //Then we know it's tech vs interactive
        return (
            <div className={'dynamicQuestion'}>
                <h4>Trykk på den påstanden som passer best</h4>
                <p>Det viktigste for meg er at produktet fungerer godt ved hjelp av en smart teknisk løsning</p>
                <p>Det er viktig for meg at et produkt ser bra ut</p>
            </div>
        )
    } else if (firstDep + secondDep === 2) {
        return (
            <div className={'dynamicQuestion'}>
                <h4>Trykk på den påstanden som passer best</h4>
                <p>Jeg liker business</p>
                <p>Jeg liker design</p>
            </div>
        )
    } else if (firstDep + secondDep === 1) {
        return (
            <div className={'dynamicQuestion'}>
                <h4>Trykk på den påstanden som passer best</h4>
                <p>Jeg jobber gjerne på et prosjekt i lang tid</p>
                <p>Jeg foretrekker å bytte arbeidsmiljø ofte</p>
            </div>
        )
    }
    return null;
}
