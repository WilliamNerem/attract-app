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
        expect(getByTestId('carouselFront')).toHaveTextContent('Song');
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
        fireEvent.click(getByTestId('leftArrow'));
        expect(getByTestId('carouselFront')).toHaveClass('middleCard middleCarouselItem');
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
        expect(getByTestId('resultComponent')).toHaveTextContent('explanationResult');
    });

    it('should display Strategy & Consulting sub departments when button is clicked', async () => {
        const { getAllByTestId, getByTestId } = render(
            <Provider store={store}>
                <Router>
                    <Result totalPointsArray={[10, 5, 3]}/>
                </Router>
            </Provider>
        );

        fireEvent.click(getAllByTestId('subdepartmentButton')[1]);
        expect(getByTestId('resultSubdepSC')).toHaveClass('subInfoOpen');
        await new Promise((resolve) => setTimeout(resolve, 500));
        expect(getByTestId('resultComponent')).toHaveStyle('height: 100vh');
        expect(getByTestId('backSC')).toHaveAttribute('tabindex', "0");
    });

    it('should display Technology sub departments when button is clicked', async () => {
        const { getAllByTestId, getByTestId } = render(
            <Provider store={store}>
                <Router>
                    <Result totalPointsArray={[10, 5, 3]}/>
                </Router>
            </Provider>
        );

        fireEvent.click(getAllByTestId('subdepartmentButton')[0]);
        expect(getByTestId('resultSubdepTech')).toHaveClass('subInfoOpen');
        await new Promise((resolve) => setTimeout(resolve, 500));
        expect(getByTestId('resultComponent')).toHaveStyle('height: 100vh');
        expect(getByTestId('backTech')).toHaveAttribute('tabindex', "0");
    });

    it('should display Song sub departments when button is clicked', async () => {
        const { getAllByTestId, getByTestId } = render(
            <Provider store={store}>
                <Router>
                    <Result totalPointsArray={[10, 5, 3]}/>
                </Router>
            </Provider>
        );

        fireEvent.click(getAllByTestId('subdepartmentButton')[2]);
        expect(getByTestId('resultSubdepInteractive')).toHaveClass('subInfoOpen');
        await new Promise((resolve) => setTimeout(resolve, 500));
        expect(getByTestId('resultComponent')).toHaveStyle('height: 100vh');
        expect(getByTestId('backInteractive')).toHaveAttribute('tabindex', "0");
    });

});