import React from 'react';
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import {AlertDialog} from "../components/atoms/alertDialog";
import {Provider} from "react-redux";
import {store} from "../redux";
import {BrowserRouter as Router} from "react-router-dom";

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

    it('should render alert dialog for when user clicks home while in progress ', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <Router>
                    <AlertDialog end={false} />
                </Router>
            </Provider>
            );
        expect(getByTestId("progressAlertDialog"));
        expect(getByTestId("progressDialogText")).toHaveTextContent('Er du sikker på at du vil avslutte valgomaten?');
    });

    it('should render alert dialog for when user finishes valgomat ', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                    <AlertDialog end={true} />
            </Provider>
        );
        expect(getByTestId("endAlertDialog"));
        expect(getByTestId("endDialogText")).toHaveTextContent('Er du sikker på at du vil fullføre valgomaten?');
    });
});