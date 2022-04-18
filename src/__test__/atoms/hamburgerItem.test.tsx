import React from 'react';
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import {HamburgerItem} from "../../components/atoms/hamburgerItem";
import {Provider} from "react-redux";
import {store} from "../../redux";
import {BrowserRouter as Router} from "react-router-dom";

// mocking of component render - not necessary unless error with "found multiple element with data-testid"
afterEach(cleanup);

describe('Hamburger item render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Provider store={store}>
                <Router>
                    <HamburgerItem link={''} itemText={'Test'}/>
                </Router>
            </Provider>
            , div
        );
    });

    it('should render hamburger item with correct values', () => {
        const { container, getByTestId } = render(
            <Provider store={store}>
                <Router>
                    <HamburgerItem link={'link'} itemText={'Item text'}/>
                </Router>
            </Provider>
        );
        expect(getByTestId("hamburgerItem")).toHaveTextContent('Item text');
        expect(container.getElementsByClassName('hamburgerItemLink')[0]).toHaveAttribute('href', '/link');
    });
});