import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {store} from "../../redux";
import Home from "../../pages/home";
import {BrowserRouter as Router} from "react-router-dom";

describe('Home render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Provider store={store}>
                <Router>
                    <Home />
                </Router>
            </Provider>
            , div
        );
    });
});