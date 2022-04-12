import React from 'react';
import ReactDOM from "react-dom";
import {cleanup, render} from "@testing-library/react";
import {Pallet} from "../../components/atoms/pallet";


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

        //number before parenthesis corresponds to department points
        //number inside parenthesis corresponds to the calculation of characteristic points
        const stratPoints = 12 - (8 * 3 / 20);
        const techPoints = 8 - (6 * 3 / 18);
        const intPoints = 4 - (8 * 3 / 20);
        const { container } = render(
            <Pallet totalPointsArray={ [stratPoints, techPoints, intPoints] } />
        );

        expect(container.getElementsByClassName('singlePallet')[0]).toHaveTextContent('Technology');
        expect(container.getElementsByClassName('singlePallet')[0]).toHaveTextContent('58%');
        expect(container.getElementsByClassName('singlePallet')[1]).toHaveTextContent('Strategy & Consulting');
        expect(container.getElementsByClassName('singlePallet')[1]).toHaveTextContent('90%');
        expect(container.getElementsByClassName('singlePallet')[2]).toHaveTextContent('Interactive');
        expect(container.getElementsByClassName('singlePallet')[2]).toHaveTextContent('23%');
    });

});