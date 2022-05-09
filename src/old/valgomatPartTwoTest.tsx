import React from 'react';
/*
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import {fireEvent, render} from "@testing-library/react";
import {applyMiddleware, createStore} from "redux";
import {ValgomatPartTwo} from "../../components/organisms/valgomatPartTwo";
import rootReducer from "../redux/reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const Wrapper = () => {
    return(
        <ValgomatPartTwo  questionArray={QuestionsDataSC()}/>
    );
};

describe('Valgomat part two render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Provider store={
                createStore(
                    rootReducer,
                    composeWithDevTools(applyMiddleware(thunk))
                )
            }>
                <Router>
                    <Wrapper />
                </Router>
            </Provider>
            , div
        );
    });

    it('should move component when next or last is clicked', async () => {
        const { container, getByTestId } = render(
            <Provider store={
                createStore(
                    rootReducer,
                    composeWithDevTools(applyMiddleware(thunk))
                )
            }>
                <Router>
                    <Wrapper />
                </Router>
            </Provider>
        );

        expect(getByTestId('valgomatPartTwoComponent')).toHaveClass('initializeTransition');
        fireEvent.click(container.getElementsByClassName('valgomatButton')[1]);
        expect(getByTestId('valgomatPartTwoComponent')).toHaveClass('animatedDivLeaveNext');
        await new Promise((resolve) => setTimeout(resolve, 300));
        fireEvent.click(container.getElementsByClassName('valgomatButton')[0]);
        expect(getByTestId('valgomatPartTwoComponent')).toHaveClass('animatedDivLeaveLast');
    });

    it('should render correct question and component', async () => {

        const { container, getByTestId } = render(
            <Provider store={
                createStore(
                    rootReducer,
                    composeWithDevTools(applyMiddleware(thunk))
                )
            }>
                <Router>
                    <Wrapper />
                </Router>
            </Provider>
        );

        expect(getByTestId('valgomatPartTwoComponent')).toHaveTextContent('questionPreText 1');
        expect(getByTestId('likertScale')).toBeInTheDocument();
        fireEvent.click(container.getElementsByClassName('valgomatButton')[1]);

        await new Promise((resolve) => setTimeout(resolve, 300));

        expect(getByTestId('valgomatPartTwoComponent')).toHaveTextContent('questionPreText 2');
        expect(getByTestId('statementOrder')).toBeInTheDocument();
    });

    it('should display correct explanation when when info button is clicked', async () => {
        const { container, getByTestId } = render(
            <Provider store={
                createStore(
                    rootReducer,
                    composeWithDevTools(applyMiddleware(thunk))
                )
            }>
                <Router>
                    <Wrapper />
                </Router>
            </Provider>
        );

        expect(getByTestId('showExplanation')).toHaveStyle('opacity: 0');
        fireEvent.click(getByTestId('infoButton'));
        expect(getByTestId('showExplanation')).toHaveStyle('opacity: 1');
        expect(getByTestId('valgomatPartTwo')).toHaveTextContent('explanationLikert');
        fireEvent.click(getByTestId('showExplanation'));
        fireEvent.click(container.getElementsByClassName('valgomatButton')[1]);

        await new Promise((resolve) => setTimeout(resolve, 300));

        expect(getByTestId('showExplanation')).toHaveStyle('opacity: 0');
        fireEvent.click(getByTestId('infoButton'));
        expect(getByTestId('showExplanation')).toHaveStyle('opacity: 1');
        expect(getByTestId('valgomatPartTwo')).toHaveTextContent('explanationStatement');
    });

});

 */