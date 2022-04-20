import React from 'react';
import ReactDOM from "react-dom";
import {Provider, useDispatch} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import {fireEvent, render} from "@testing-library/react";
import Valgomat from "../../pages/valgomat";
import {applyMiddleware, bindActionCreators, createStore} from "redux";
import rootReducer from "../../redux/reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {actionCreators} from "../../redux";

interface wrapperProps {
    counter?: number
}

const Wrapper = ({counter}: wrapperProps) => {
    const dispatch = useDispatch();
    const { setCounter } = bindActionCreators(actionCreators, dispatch);
    if (counter){
        setCounter(counter);
    }
    if (counter === 11){

    }
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

        expect(getByTestId('valgomatComponent')).toHaveTextContent('Spørsmål 1');
        expect(getByTestId('likertScale')).toBeInTheDocument();
        fireEvent.click(container.getElementsByClassName('valgomatButton')[1]);

        await new Promise((resolve) => setTimeout(resolve, 300));

        expect(getByTestId('valgomatComponent')).toHaveTextContent('Spørsmål 2');
        expect(getByTestId('imageSelection')).toBeInTheDocument();
        fireEvent.click(container.getElementsByClassName('valgomatButton')[1]);

        await new Promise((resolve) => setTimeout(resolve, 300));

        fireEvent.click(container.getElementsByClassName('valgomatButton')[1]);

        await new Promise((resolve) => setTimeout(resolve, 300));

        expect(getByTestId('valgomatComponent')).toHaveTextContent('Spørsmål 4');
        expect(getByTestId('statementOrder')).toBeInTheDocument();
    });

    it('should display correct explanation when when info button is clicked', async () => {
        const { container, getByTestId } = render(
            <Wrapper />
        );

        expect(getByTestId('showExplanation')).toHaveStyle('opacity: 0');
        fireEvent.click(getByTestId('infoButton'));
        expect(getByTestId('showExplanation')).toHaveStyle('opacity: 1');
        expect(getByTestId('valgomat')).toHaveTextContent('Likert-skalaen består av 5 knapper');
        fireEvent.click(getByTestId('showExplanation'));
        fireEvent.click(container.getElementsByClassName('valgomatButton')[1]);

        await new Promise((resolve) => setTimeout(resolve, 300));

        expect(getByTestId('showExplanation')).toHaveStyle('opacity: 0');
        fireEvent.click(getByTestId('infoButton'));
        expect(getByTestId('showExplanation')).toHaveStyle('opacity: 1');
        expect(getByTestId('valgomat')).toHaveTextContent('Bildevalg består av 3 bilder');
        fireEvent.click(getByTestId('showExplanation'));
        fireEvent.click(container.getElementsByClassName('valgomatButton')[1]);

        await new Promise((resolve) => setTimeout(resolve, 300));

        fireEvent.click(container.getElementsByClassName('valgomatButton')[1]);

        await new Promise((resolve) => setTimeout(resolve, 300));

        expect(getByTestId('showExplanation')).toHaveStyle('opacity: 0');
        fireEvent.click(getByTestId('infoButton'));
        expect(getByTestId('showExplanation')).toHaveStyle('opacity: 1');
        expect(getByTestId('valgomat')).toHaveTextContent('Rangering består av 3 påstander');
    });

    it('should render dynamic question when there is no clear first place', () => {
        const { container, getByTestId } = render(
            <Wrapper counter={11}/>
        );
    });

});