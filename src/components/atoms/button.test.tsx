import React from 'react';
import ReactDOM from "react-dom";
import { Button } from "./button";
import { render, cleanup } from "@testing-library/react";

// mocking of component render - not necessary unless error with "found multiple element with data-testid"
afterEach(cleanup);

describe('Button render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(<Button text={'test'} href={'test'}/>, div);
    });

    it('should render button with text', () => {
        const { getByTestId } = render(<Button text={'text test'} href={'href test'} />);
        expect(getByTestId("button")).toHaveTextContent('text test');
    });

    it('should render button with href', function () {
        const { getByTestId } = render(<Button text={'text test'} href={'href test'} />);
        expect(getByTestId("button")).toHaveAttribute('href', 'href test');
    });
});