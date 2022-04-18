import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {store} from "../../redux";
import {Provider} from "react-redux";
import {fireEvent, render} from "@testing-library/react";
import {Result} from "../../components/organisms/result";

describe('Result render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Provider store={store}>
                <Router>
                    <Result totalPointsArray={[5, 6, 7]}/>
                </Router>
            </Provider>
            , div
        );
    });

    it('should render first place info card in front', () => {
        const {getByTestId} = render(
            <Provider store={store}>
                <Router>
                    <Result totalPointsArray={[5, 6, 7]}/>
                </Router>
            </Provider>
        );
        expect(getByTestId('carouselFront')).toHaveTextContent('Interactive');
    });

    it('should move carousel when arrow is clicked', () => {
        const {getByTestId} = render(
            <Provider store={store}>
                <Router>
                    <Result totalPointsArray={[5, 6, 7]}/>
                </Router>
            </Provider>
        );
        expect(getByTestId('carouselFront')).toHaveClass('middleCard middleCarouselItem');
        fireEvent.click(getByTestId('rightArrow'));
        expect(getByTestId('carouselFront')).toHaveClass('leftCard middleCarouselItem');
    });

    it('should display correct explanation when when info button is clicked', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <Router>
                    <Result totalPointsArray={[5, 6, 7]}/>
                </Router>
            </Provider>
        );

        expect(getByTestId('showExplanation')).toHaveStyle('opacity: 0');
        fireEvent.click(getByTestId('infoButton'));
        expect(getByTestId('showExplanation')).toHaveStyle('opacity: 1');
        expect(getByTestId('resultComponent')).toHaveTextContent('Resultatet viser din score');
    });

});