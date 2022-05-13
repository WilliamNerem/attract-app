import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {store} from "../../redux";
import {BrowserRouter as Router} from "react-router-dom";
import Info from "../../pages/info";
import {fireEvent, render} from "@testing-library/react";

describe('Info render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Provider store={store}>
                <Router>
                    <Info />
                </Router>
            </Provider>
            , div
        );
    });

    it('should expand info card when clicked',  () => {
        const { getAllByTestId } = render(
            <Provider store={store}>
                <Router>
                    <Info />
                </Router>
            </Provider>
        );
        expect(getAllByTestId('infoCard')[0]).toHaveClass('minimized infoCard');
        fireEvent.click(getAllByTestId('infoCardDropdown')[0]);
        expect(getAllByTestId('infoCard')[0]).toHaveClass('expanded infoCard');
    });

    it('should display Strategy & Consulting sub departments when button is clicked', async () => {
        const { getAllByTestId, getByTestId } = render(
            <Provider store={store}>
                <Router>
                    <Info />
                </Router>
            </Provider>
        );

        fireEvent.click(getAllByTestId('subdepartmentButton')[0]);
        expect(getByTestId('infoSubdepSC')).toHaveClass('subInfoOpen');
        await new Promise((resolve) => setTimeout(resolve, 500));
        expect(getByTestId('infoPage')).toHaveStyle('height: 95vh');
        expect(getByTestId('backSC')).toHaveAttribute('tabindex', "0");
    });

    it('should display Technology sub departments when button is clicked', async () => {
        const { getAllByTestId, getByTestId } = render(
            <Provider store={store}>
                <Router>
                    <Info />
                </Router>
            </Provider>
        );

        fireEvent.click(getAllByTestId('subdepartmentButton')[1]);
        expect(getByTestId('infoSubdepTech')).toHaveClass('subInfoOpen');
        await new Promise((resolve) => setTimeout(resolve, 500));
        expect(getByTestId('infoPage')).toHaveStyle('height: 95vh');
        expect(getByTestId('backTech')).toHaveAttribute('tabindex', "0");
    });

    it('should display Song sub departments when button is clicked', async () => {
        const { getAllByTestId, getByTestId } = render(
            <Provider store={store}>
                <Router>
                    <Info />
                </Router>
            </Provider>
        );

        fireEvent.click(getAllByTestId('subdepartmentButton')[2]);
        expect(getByTestId('infoSubdepInteractive')).toHaveClass('subInfoOpen');
        await new Promise((resolve) => setTimeout(resolve, 500));
        expect(getByTestId('infoPage')).toHaveStyle('height: 95vh');
        expect(getByTestId('backInteractive')).toHaveAttribute('tabindex', "0");
    });
});