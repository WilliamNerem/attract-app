import React from 'react';
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import {StatementItem} from "../../components/atoms/statementItem";
import {Provider, useDispatch} from "react-redux";
import {actionCreators, store} from "../../redux";
import {bindActionCreators} from "redux";

const Wrapper = () => {
    const dispatch = useDispatch();
    const { setCounter } = bindActionCreators(actionCreators, dispatch);
    setCounter(4);
    return(
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
    );
};
describe('Statement item render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Provider store={store}>
                <Wrapper />
            </Provider>
            , div
        );
    });

    it('should render statement item with correct values', async () => {
        const { container, getByTestId } = render(
            <Provider store={store}>
                <Wrapper />
            </Provider>
        );
        expect(getByTestId("statementItemText")).toHaveTextContent('det virker spennende å komme opp med nye idéer og jobbe videre med de');
        expect(container.getElementsByClassName('buttonUpGray').length).toBe(1);
        expect(container.getElementsByClassName('buttonDown').length).toBe(1);
    });
});