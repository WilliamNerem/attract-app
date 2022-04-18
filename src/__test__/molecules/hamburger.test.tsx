import React, {useState} from 'react';
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import {HamburgerMenu} from "../../components/molecule/hamburger";
import {Provider} from "react-redux";
import {store} from "../../redux";
import {BrowserRouter as Router} from "react-router-dom";

describe('Hamburger render', () => {

    it('should render without crashing', () => {
        const Wrapper = () => {
            const [toggle, setToggle] = useState(false);
            return <HamburgerMenu hamburgerToggled={toggle} setHamburgerToggled={setToggle} height={0}/>
        };
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
        const Wrapper = () => {
            const [toggle, setToggle] = useState(false);
            return <HamburgerMenu hamburgerToggled={toggle} setHamburgerToggled={setToggle} height={120}/>
        };
        const { container } = render(
            <Provider store={store}>
                <Router>
                    <Wrapper/>
                </Router>
            </Provider>
        );
        expect(container.getElementsByClassName('hamburgerItems')[0]).toHaveStyle('height: 120px');
    });
});