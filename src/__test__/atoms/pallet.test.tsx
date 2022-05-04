import React from 'react';
import ReactDOM from "react-dom";
import {cleanup, render} from "@testing-library/react";
import {Pallet} from "../../components/molecule/pallet";


// mocking of component render - not necessary unless error with "found multiple element with data-testid"
afterEach(cleanup);

describe('Pallet render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Pallet totalPointsArray={ [1 ,2 ,3] } />
        , div
        );
    });

    it('should render singlePallets', () => {
        const { container } = render(
            <Pallet totalPointsArray={ [1 ,2 ,3] } />
        );

        expect(container.getElementsByClassName('singlePallet').length).toBe(3);
    });

    it('should render correct values for every pallet',  () => {

        // departmentPoints - (characteristicPointsDifference * multiplier / totalDifference)
        const stratPoints = 6 - (10 * 3 / 20);
        const techPoints = 11 - (12 * 3 / 18);
        const intPoints = 9 - (14 * 3 / 20);
        const { container } = render(
            <Pallet totalPointsArray={ [stratPoints, techPoints, intPoints] } />
        );

        expect(container.getElementsByClassName('singlePallet')[1]).toHaveTextContent('Technology');
        expect(container.getElementsByClassName('singlePallet')[1]).toHaveTextContent('64%');
        expect(container.getElementsByClassName('singlePallet')[0]).toHaveTextContent('Song');
        expect(container.getElementsByClassName('singlePallet')[0]).toHaveTextContent('49%');
        expect(container.getElementsByClassName('singlePallet')[2]).toHaveTextContent('Strategy & Consulting');
        expect(container.getElementsByClassName('singlePallet')[2]).toHaveTextContent('32%');
    });

});