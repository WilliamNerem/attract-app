import React, {useState} from 'react';
import ReactDOM from "react-dom";
import {fireEvent, render} from "@testing-library/react";
import {HamburgerMenu} from "../../components/molecule/hamburger";
import {Provider} from "react-redux";
import {store} from "../../redux";
import {BrowserRouter as Router} from "react-router-dom";
import Valgomat from "../../pages/valgomat";
import Home from "../../pages/home";

const Wrapper = () => {
    const [toggle, setToggle] = useState(false);
    return <HamburgerMenu hamburgerToggled={toggle} setHamburgerToggled={setToggle} height={120}/>
};

describe('Hamburger render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Provider store={store}>
                <Router>
                    <Wrapper/>
                </Router>
            </Provider>
            , div
        );
    });

    it('should render Hamburger with correct value', () => {
        const { container } = render(
            <Provider store={store}>
                <Router>
                    <Wrapper/>
                </Router>
            </Provider>
        );
        expect(container.getElementsByClassName('hamburgerItems')[0]).toHaveStyle('height: 120px');
    });

    it('should render alert dialog when clicking items in hamburger while in progress', () => {
        const { container, getByTestId } = render(
            <Provider store={store}>
                <Router>
                    <Valgomat />
                </Router>
            </Provider>
        );
        fireEvent.click(getByTestId('hamburger'));
        fireEvent.click(container.getElementsByClassName('hamburgerItemLink')[0]);
        expect(getByTestId('progressAlertDialog'));
    });

    it('should set new active page when item is clicked', async() => {
        const { container, getByTestId } = render(
            <Provider store={store}>
                <Router>
                    <Home />
                </Router>
            </Provider>
        );
        expect(container.getElementsByClassName('hamburgerItemLinkActive')[0]).toHaveTextContent('Hjem');
        fireEvent.click(getByTestId('hamburger'));
        fireEvent.click(container.getElementsByClassName('hamburgerItemLink')[1]);
        expect(container.getElementsByClassName('hamburgerItemLinkActive')[0]).toHaveTextContent('Informasjon');
    });
});