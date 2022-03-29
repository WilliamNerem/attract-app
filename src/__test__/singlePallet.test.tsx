import React from 'react';
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import {SinglePallet} from "../components/atoms/singlePallet";

// mocking of component render - not necessary unless error with "found multiple element with data-testid"
afterEach(cleanup);

describe('Single Pallet render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <SinglePallet id={'first'} placement={'1'} percent={85}/>
            , div
        );
    })

    it('should render correct palletPlacement when passed id', () => {
        const { container } = render(
            <SinglePallet id={'second'} placement={'0'} percent={60} />
        )
        const testPlacement = container.getElementsByClassName('palletPlacement');
        expect(testPlacement[0]).toHaveTextContent("2");

    })

    it('should render correct percent when passed percent', () => {
        const { container } = render(
            <SinglePallet id={'second'} placement={'0'} percent={60} />
        )
        const testPercent = container.getElementsByClassName('percent');
        expect(testPercent[0]).toHaveTextContent("60%");

    })

})
