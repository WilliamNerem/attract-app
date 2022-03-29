import React from 'react';
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import {Questions} from "../components/atoms/questions";

// mocking of component render - not necessary unless error with "found multiple element with data-testid"
afterEach(cleanup);

describe('Questions render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Questions questionTxt={'Test'}/>
            , div
        );
    });

    it('should render progressbar with correct value', () => {
        const { getByTestId } = render(
            <Questions questionTxt={'Question text'}/>
        );
        expect(getByTestId("questions")).toHaveTextContent('Question text');
    });
});