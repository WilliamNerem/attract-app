import React from 'react';
import ReactDOM from "react-dom";
import { render, fireEvent } from "@testing-library/react";
import {LikertScale} from "../../components/atoms/likertScale";
import {Provider} from "react-redux";
import {store} from "../../redux";

describe('Liker scale render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Provider store={store}>
                <LikertScale questionNumber={1} characteristic={() => {}} />
            </Provider>
            , div

        );
    });

    it('should render likert scale with correct values', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <LikertScale questionNumber={1} characteristic={() => {}} />
            </Provider>
        );
        expect(getByTestId("likertScale")).toHaveTextContent('likertDisagree');
        expect(getByTestId("likertScale")).toHaveTextContent('likertNeutral');
        expect(getByTestId("likertScale")).toHaveTextContent('likertAgree');
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
                <LikertScale questionNumber={1} characteristic={func} />
            </Provider>
        );

        fireEvent.click(getByTestId('likertScaleStronglyDisagree'));
        expect(points).toBe(3);
        fireEvent.click(getByTestId('likertScaleModeratelyAgree'));
        expect(points).toBe(6);
    });
});