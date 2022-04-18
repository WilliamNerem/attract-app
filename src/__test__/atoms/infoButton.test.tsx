import React from 'react';
import ReactDOM from "react-dom";
import {fireEvent, render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../redux";
import {InfoButton} from "../../components/atoms/infoButton";

describe('Info Button render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Provider store={store}>
                <InfoButton handleClick={() => {}}/>
            </Provider>
            , div
        );
    });

    it('should run function when button is clicked', () => {
        let test = 0;
        const handleClick = () => {
            test = 10;
        };

        const {getByTestId} = render(
            <InfoButton handleClick={handleClick}/>
        );

        fireEvent.click(getByTestId('infoButton'));
        expect(test).toBe(10);
    });
});