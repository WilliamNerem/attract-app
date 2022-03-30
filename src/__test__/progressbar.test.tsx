import React from 'react';
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import ProgressBar from "../components/atoms/progressbar";

// mocking of component render - not necessary unless error with "found multiple element with data-testid"
afterEach(cleanup);

describe('Progressbar render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <ProgressBar completed={0}/>
            , div
        );
    });

    it('should render progressbar with correct value', () => {
        const { container, getByTestId } = render(
            <ProgressBar completed={60}/>
        );
        expect(getByTestId("progressbar")).toHaveTextContent('60%');
        expect(container.getElementsByClassName('progressFiller')[0]).toHaveStyle({width: '60%'});
    });
});