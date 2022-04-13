import React from 'react';
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import {StatementItem} from "../../components/atoms/statementItem";
import {Provider} from "react-redux";
import {store} from "../../redux";

// mocking of component render - not necessary unless error with "found multiple element with data-testid"
afterEach(cleanup);

describe('Statement item render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Provider store={store}>
                <StatementItem
                    questionNumber={3}
                    transitionPx={0}
                    key={0}
                    index={0}
                    handleTransition={() => {}}
                    position={0}
                    positionInStatementOrder={0}
                    transitionValues={{transitionUp: -1, transitionDown: -1, startTransition: true}}
                />
            </Provider>
            , div
        );
    });

    it('should render statement item with correct values', () => {
        const { container, getByTestId } = render(
            <Provider store={store}>
                <StatementItem
                    questionNumber={4}
                    transitionPx={0}
                    key={0}
                    index={0}
                    handleTransition={() => {}}
                    position={0}
                    positionInStatementOrder={0}
                    transitionValues={{transitionUp: -1, transitionDown: -1, startTransition: true}}
                />
            </Provider>
        );
        expect(getByTestId("statementItemText")).toHaveTextContent('det virker spennende å komme opp med nye idéer og jobbe videre med de');
        expect(container.getElementsByClassName('buttonUpGray').length).toBe(1);
        expect(container.getElementsByClassName('buttonDown').length).toBe(1);
    });
});