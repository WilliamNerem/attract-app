import React from 'react';
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import {ValgomatButton} from "../../components/atoms/valgomatButton";
import {Provider, useDispatch} from "react-redux";
import {actionCreators, store} from "../../redux";
import {bindActionCreators} from "redux";

const Wrapper = () => {
    const dispatch = useDispatch();
    const { setCounter } = bindActionCreators(actionCreators, dispatch);
    setCounter(3);
    return(
        <ValgomatButton nextTransition={() => {}}/>
    );
};

describe('Valgomat button render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Provider store={store}>
                <ValgomatButton nextTransition={() => {}}/>
            </Provider>
            , div
        );
    });

    it('should render next and back buttons on first question', () => {
        const { container } = render(
            <Provider store={store}>
                <ValgomatButton nextTransition={() => {}}/>
            </Provider>
        );
        const testButton = container.getElementsByClassName('valgomatButton');

        expect(testButton[0]).toHaveTextContent("valgomatButtonHome");
        expect(testButton[1]).toHaveTextContent("valgomatButtonNext");
    });

    it('should render next and back buttons on other questions', () => {
        const { container } = render(
            <Provider store={store}>
                <Wrapper />
            </Provider>
        );
        const testButton = container.getElementsByClassName('valgomatButton');

        expect(testButton[0]).toHaveTextContent("valgomatButtonPrev");
        expect(testButton[1]).toHaveTextContent("valgomatButtonNext");
    });
});