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

    it('should open S&C subdepartments on button click',  () => {
        const { getAllByTestId } = render(
            <Provider store={store}>
                <Router>
                    <Info />
                </Router>
            </Provider>
        );
        expect(getAllByTestId('subdepartmentWrapper')[0]).toHaveClass('subInfoClosed');
        fireEvent.click(getAllByTestId('subdepartmentButton')[0]);
        expect(getAllByTestId('subdepartmentWrapper')[0]).toHaveClass('subInfoOpen');
    });

    it('should open technology subdepartments on button click',  () => {
        const { getAllByTestId } = render(
            <Provider store={store}>
                <Router>
                    <Info />
                </Router>
            </Provider>
        );
        expect(getAllByTestId('subdepartmentWrapper')[1]).toHaveClass('subInfoClosed');
        fireEvent.click(getAllByTestId('subdepartmentButton')[1]);
        expect(getAllByTestId('subdepartmentWrapper')[1]).toHaveClass('subInfoOpen');
    });

    it('should open interactive subdepartments on button click',  () => {
        const { getAllByTestId } = render(
            <Provider store={store}>
                <Router>
                    <Info />
                </Router>
            </Provider>
        );
        expect(getAllByTestId('subdepartmentWrapper')[2]).toHaveClass('subInfoClosed');
        fireEvent.click(getAllByTestId('subdepartmentButton')[2]);
        expect(getAllByTestId('subdepartmentWrapper')[2]).toHaveClass('subInfoOpen');
    });
});