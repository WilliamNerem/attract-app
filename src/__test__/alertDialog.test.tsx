import React from 'react';
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import {AlertDialog} from "../components/atoms/alertDialog";
import {Provider} from "react-redux";
import {store} from "../redux";

// mocking of component render - not necessary unless error with "found multiple element with data-testid"

describe('Alert Dialog render', () => {

afterEach(() => {
    cleanup()
})

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Provider store={store}>
                <AlertDialog end={true} totalPointsArray={[1, 2, 3]}/>
            </Provider>
            , div
        );
        div.remove();
    });

    it('should render alert dialog for when user clicks home while in progress ', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <AlertDialog end={false} />
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
