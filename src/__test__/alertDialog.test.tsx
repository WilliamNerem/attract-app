import React from 'react';
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import {AlertDialog} from "../components/atoms/alertDialog";
import {Provider} from "react-redux";
import {store} from "../redux";

// mocking of component render - not necessary unless error with "found multiple element with data-testid"
afterEach(cleanup);

describe('Alert Dialog render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Provider store={store}>
                <AlertDialog end={false} totalPointsArray={[1, 2, 3]}/>
            </Provider>
            , div
        );
    });

    it('should render button with text', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <AlertDialog end={false} />
            </Provider>
            );
        expect(getByTestId("progressAlertDialog"));
    });
});