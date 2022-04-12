import React from 'react';
import {render, cleanup, fireEvent} from "@testing-library/react";
import {AlertDialog} from "../../components/atoms/alertDialog";
import {Provider} from "react-redux";
import {store} from "../../redux";
import {BrowserRouter as Router} from "react-router-dom";

// mocking of component render - not necessary unless error with "found multiple element with data-testid"
afterEach(cleanup);

describe('Alert Dialog render', () => {

    it('should render without crashing', () => {

        render(
            <Provider store={store}>
                <AlertDialog end={true} />
            </Provider>
        )

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

    it('should render result if totalPointArray is not undefined and yes button to go to result is clicked ', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <Router>
                    <AlertDialog end={true} totalPointsArray={[1, 2, 3]} />
                </Router>
            </Provider>
        );

        fireEvent.click(getByTestId('yesButton'));
        expect(getByTestId('resultComponent'));
    });


});
