import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import {fireEvent, render} from "@testing-library/react";
import Valgomat from "../../pages/valgomat";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "../../redux/reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const Wrapper = () => {
    return(
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
};

describe('Valgomat render', () => {

    jest.setTimeout(10000);

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Wrapper />
            , div
        );
    });

    it('should move component when next or last is clicked', async () => {
        const { container, getByTestId } = render(
            <Wrapper />
        );

        expect(getByTestId('valgomatComponent')).toHaveClass('initializeTransition');
        fireEvent.click(container.getElementsByClassName('valgomatButton')[1]);
        expect(getByTestId('valgomatComponent')).toHaveClass('animatedDivLeaveNext');
        await new Promise((resolve) => setTimeout(resolve, 300));
        fireEvent.click(container.getElementsByClassName('valgomatButton')[0]);
        expect(getByTestId('valgomatComponent')).toHaveClass('animatedDivLeaveLast');
    });

    it('should render correct question and component', async () => {

        const { container, getByTestId } = render(
            <Wrapper />
        );

        expect(getByTestId('valgomatComponent')).toHaveTextContent('questionPreText 1');
        expect(getByTestId('likertScale')).toBeInTheDocument();
        fireEvent.click(container.getElementsByClassName('valgomatButton')[1]);

        await new Promise((resolve) => setTimeout(resolve, 300));

        expect(getByTestId('valgomatComponent')).toHaveTextContent('questionPreText 2');
        expect(getByTestId('imageSelection')).toBeInTheDocument();
        fireEvent.click(container.getElementsByClassName('valgomatButton')[1]);

        await new Promise((resolve) => setTimeout(resolve, 300));

        fireEvent.click(container.getElementsByClassName('valgomatButton')[1]);

        await new Promise((resolve) => setTimeout(resolve, 300));

        expect(getByTestId('valgomatComponent')).toHaveTextContent('questionPreText 4');
        expect(getByTestId('statementOrder')).toBeInTheDocument();
    });

    it('should render dynamic question when there is no clear first place', async () => {
        const { container, getByTestId } = render(
            <Wrapper />
        );

        fireEvent.click(container.getElementsByClassName('valgomatButton')[1]);
        await new Promise((resolve) => setTimeout(resolve, 300));
        fireEvent.click(container.getElementsByClassName('valgomatButton')[1]);
        await new Promise((resolve) => setTimeout(resolve, 300));
        fireEvent.click(container.getElementsByClassName('valgomatButton')[1]);
        await new Promise((resolve) => setTimeout(resolve, 300));
        fireEvent.click(container.getElementsByClassName('buttonDown')[0]);
        fireEvent.click(container.getElementsByClassName('buttonDown')[1]);
        fireEvent.click(container.getElementsByClassName('valgomatButton')[1]);
        await new Promise((resolve) => setTimeout(resolve, 300));
        fireEvent.click(container.getElementsByClassName('valgomatButton')[1]);
        await new Promise((resolve) => setTimeout(resolve, 300));
        fireEvent.click(container.getElementsByClassName('valgomatButton')[1]);
        await new Promise((resolve) => setTimeout(resolve, 300));
        fireEvent.click(container.getElementsByClassName('valgomatButton')[1]);
        await new Promise((resolve) => setTimeout(resolve, 300));
        fireEvent.click(container.getElementsByClassName('valgomatButton')[1]);
        await new Promise((resolve) => setTimeout(resolve, 300));
        fireEvent.click(container.getElementsByClassName('buttonUp')[1]);
        fireEvent.click(container.getElementsByClassName('buttonUp')[0]);
        fireEvent.click(container.getElementsByClassName('valgomatButton')[1]);
        await new Promise((resolve) => setTimeout(resolve, 300));
        fireEvent.click(container.getElementsByClassName('valgomatButton')[1]);
        await new Promise((resolve) => setTimeout(resolve, 300));

        expect(getByTestId('dynamicQuestion'))
    });

    it('should display correct explanation when when info button is clicked', async () => {
        const { container, getByTestId } = render(
            <Wrapper />
        );

        expect(getByTestId('showExplanation')).toHaveStyle('opacity: 0');
        fireEvent.click(getByTestId('infoButton'));
        expect(getByTestId('showExplanation')).toHaveStyle('opacity: 1');
        expect(getByTestId('valgomat')).toHaveTextContent('explanationLikert');
        fireEvent.click(getByTestId('showExplanation'));
        fireEvent.click(container.getElementsByClassName('valgomatButton')[1]);

        await new Promise((resolve) => setTimeout(resolve, 300));

        expect(getByTestId('showExplanation')).toHaveStyle('opacity: 0');
        fireEvent.click(getByTestId('infoButton'));
        expect(getByTestId('showExplanation')).toHaveStyle('opacity: 1');
        expect(getByTestId('valgomat')).toHaveTextContent('explanationImage');
        fireEvent.click(getByTestId('showExplanation'));
        fireEvent.click(container.getElementsByClassName('valgomatButton')[1]);

        await new Promise((resolve) => setTimeout(resolve, 300));

        fireEvent.click(container.getElementsByClassName('valgomatButton')[1]);

        await new Promise((resolve) => setTimeout(resolve, 300));

        expect(getByTestId('showExplanation')).toHaveStyle('opacity: 0');
        fireEvent.click(getByTestId('infoButton'));
        expect(getByTestId('showExplanation')).toHaveStyle('opacity: 1');
        expect(getByTestId('valgomat')).toHaveTextContent('explanationStatement');
    });

});