import React from 'react';
import ReactDOM from "react-dom";
import {Navbar} from "../../components/molecule/navbar";
import {BrowserRouter as Router} from "react-router-dom";
import {store} from "../../redux";
import {Provider} from "react-redux";

describe('Navbar render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Provider store={store}>
                <Router>
                    <Navbar/>
                </Router>
            </Provider>
            , div
        );
    });

});