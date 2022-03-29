import React from 'react';
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import {ValgomatButton} from "../components/atoms/valgomatButton";

// mocking of component render - not necessary unless error with "found multiple element with data-testid"
afterEach(cleanup);

describe('Valgomat button render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <ValgomatButton nextTransition={() => {}}/>
            , div
        );
    })

    it('should render next and back buttons', () => {
        const { container } = render(
            <ValgomatButton nextTransition={() => {}} />
        )
        const testButton = container.getElementsByClassName('valgomatButton');

        expect(testButton[0]).toHaveTextContent("Forrige");
        expect(testButton[1]).toHaveTextContent("Neste");
    })
})