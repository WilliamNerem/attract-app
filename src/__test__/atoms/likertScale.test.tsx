import React from 'react';
import ReactDOM from "react-dom";
import { render, cleanup, fireEvent } from "@testing-library/react";
import {LikertScale} from "../../components/atoms/likertScale";
import {Provider} from "react-redux";
import {store} from "../../redux";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "../../redux/reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {BrowserRouter as Router} from "react-router-dom";

// mocking of component render - not necessary unless error with "found multiple element with data-testid"
afterEach(cleanup);

describe('Liker scale render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Provider store={store}>
                <LikertScale questionNumber={1} characteristic={() => {}} isReversed={false} />
            </Provider>
            , div

        );
    });

    it('should render likert scale with correct values', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <LikertScale questionNumber={1} characteristic={() => {}} isReversed={false} />
            </Provider>
        );
        expect(getByTestId("likertScale")).toHaveTextContent('Helt uenig');
        expect(getByTestId("likertScale")).toHaveTextContent('Nøytral');
        expect(getByTestId("likertScale")).toHaveTextContent('Helt enig');
    });

    it('should update state on click', () => {
        let points = 5;
        const func = (num: number, bool: boolean) => {
            if (bool){
                points = points - num;
            } else {
                points = points + num;
            }
        };

        const { getByTestId } = render(
            <Provider store={store}>
                <LikertScale questionNumber={1} characteristic={func} isReversed={false} />
            </Provider>
        );

        fireEvent.click(getByTestId('likertScaleStronglyDisagree'));
        expect(points).toBe(3);
        fireEvent.click(getByTestId('likertScaleModeratelyAgree'));
        expect(points).toBe(6);
    });

    it('should update state on click when isReversed is true', () => {
        let points = 5;
        const func = (num: number, bool: boolean) => {
            if (bool){
                points = points - num;
            } else {
                points = points + num;
            }
        };

        const { getByTestId } = render(

            <Provider store={
                createStore(
                    rootReducer,
                    composeWithDevTools(applyMiddleware(thunk))
                )
            }>
                <Router>
                    <LikertScale questionNumber={1} characteristic={func} isReversed={true} />
                </Router>
            </Provider>
        );

        fireEvent.click(getByTestId('likertScaleStronglyDisagree'));
        expect(points).toBe(7);
        fireEvent.click(getByTestId('likertScaleModeratelyAgree'));
        expect(points).toBe(4);
    });
});