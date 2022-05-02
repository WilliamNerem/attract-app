import React from 'react';
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import {ResultText} from "../../components/atoms/resultText";

// mocking of component render - not necessary unless error with "found multiple element with data-testid"
afterEach(cleanup);

describe('Result text render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <ResultText result={'Technology'} />
            , div
        );
    });

    it('should render correct text with department prop', () => {
        const { container } = render(
            <ResultText result={'Song'} />
        );
        const testText = container.getElementsByClassName('resultText');
        expect(testText[0]).toHaveTextContent("resultInteractive");
    })
});