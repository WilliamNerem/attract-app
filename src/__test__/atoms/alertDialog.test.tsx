import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import {AlertDialog} from "../../components/atoms/alertDialog";
import {Provider} from "react-redux";
import {store} from "../../redux";
import {BrowserRouter as Router} from "react-router-dom";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "../../redux/reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import Valgomat from "../../pages/valgomat";

describe('Alert Dialog render', () => {

    it('should render without crashing', () => {

        render(
            <Provider store={store}>
                <AlertDialog end={true} />
            </Provider>
        )

    });

    it('should render back to result alert dialog with correct information', () => {

        const {getByTestId} = render(
            <Provider store={store}>
                <AlertDialog end={false} backToResult={true} />
            </Provider>
        );

        expect(getByTestId('backToResultAlertDialogText')).toHaveTextContent('Er du sikker på at du vil gå tilbake til resultatsiden?')

    });

    it('should render alert dialog with correct information when end is false', () => {

        const {getByTestId} = render(
            <Provider store={store}>
                <AlertDialog end={false} />
            </Provider>
        );

        expect(getByTestId('progressDialogText')).toHaveTextContent('Er du sikker på at du vil avslutte valgomaten?')

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

    it('should close alert dialog when no is clicked', async () => {
        const { container, getByTestId } = render(
            <Provider store={
                createStore(
                    rootReducer,
                    composeWithDevTools(applyMiddleware(thunk))
                )
            }>
                <Router>
                    <Valgomat />
                </Router>
            </Provider>
        );
        fireEvent.click(container.getElementsByClassName('valgomatButton')[0]);
        await new Promise((resolve) => setTimeout(resolve, 300));
        expect(getByTestId('progressAlertDialog'));
        fireEvent.click(getByTestId('noButton'));
        expect(getByTestId('likertScale'));
    });

});
