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
        const { container } = render(
            <Provider store={store}>
                <DynamicQuestion firstDep={1} secondDep={2} />
            </Provider>
        );
        const buttons = container.querySelectorAll('button')

        expect(buttons[0].textContent).toBe("Det viktigste for meg er at produktet fungerer godt ved hjelp av en smart teknisk løsning");
        expect(buttons[1].textContent).toBe("Det er viktig for meg at et produkt ser bra ut");
        expect(buttons[2].textContent).toBe("Forrige spørsmål");
    });

    it('should render strat vs interactive when 0 + 2', () => {
        const { container } = render(
            <Provider store={store}>
                <DynamicQuestion firstDep={0} secondDep={2} />
            </Provider>
        );
        const buttons = container.querySelectorAll('button')

        expect(buttons[0].textContent).toBe("Jeg liker business");
        expect(buttons[1].textContent).toBe("Jeg liker design");
        expect(buttons[2].textContent).toBe("Forrige spørsmål");
    });

    it('should render strat vs tech when 0 + 1', () => {
        const { container } = render(
            <Provider store={store}>
                <DynamicQuestion firstDep={0} secondDep={1} />
            </Provider>
        );
        const buttons = container.querySelectorAll('button')

        expect(buttons[0].textContent).toBe("Jeg foretrekker å bytte arbeidsmiljø ofte");
        expect(buttons[1].textContent).toBe("Jeg jobber gjerne på et prosjekt i lang tid");
        expect(buttons[2].textContent).toBe("Forrige spørsmål");
    });

});