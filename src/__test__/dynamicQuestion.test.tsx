import React from 'react';
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../redux";
import {DynamicQuestion} from "../components/atoms/dynamicQuestion";

// mocking of component render - not necessary unless error with "found multiple element with data-testid"
afterEach(cleanup);

describe('Dynamic Question render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Provider store={store}>
                <DynamicQuestion firstDep={0} secondDep={1} />
            </Provider>
            , div
        );
    });

    it('should render tech vs interactive when 1 + 2', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <DynamicQuestion firstDep={1} secondDep={2} />
            </Provider>
        );

        expect(getByTestId("dynamicQuestionOne")).toHaveTextContent("Det viktigste for meg er at produktet fungerer godt ved hjelp av en smart teknisk løsning");
        expect(getByTestId("dynamicQuestionTwo")).toHaveTextContent("Det er viktig for meg at et produkt ser bra ut");
    });

    it('should render strat vs interactive when 0 + 2', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <DynamicQuestion firstDep={0} secondDep={2} />
            </Provider>
        );

        expect(getByTestId("dynamicQuestionOne")).toHaveTextContent("Jeg liker business");
        expect(getByTestId("dynamicQuestionTwo")).toHaveTextContent("Jeg liker design");
    });

    it('should render strat vs tech when 0 + 1', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <DynamicQuestion firstDep={0} secondDep={1} />
            </Provider>
        );

        expect(getByTestId("dynamicQuestionOne")).toHaveTextContent("Jeg foretrekker å bytte arbeidsmiljø ofte");
        expect(getByTestId("dynamicQuestionTwo")).toHaveTextContent("Jeg jobber gjerne på et prosjekt i lang tid");
    });

});