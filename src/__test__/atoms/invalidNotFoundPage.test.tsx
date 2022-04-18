import React from 'react';
import ReactDOM from "react-dom";
import NotFoundPage from "../../components/atoms/invalidNotFoundPage";
import {store} from "../../redux";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";

describe('Invalid page not found render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Provider store={store}>
                <Router>
                    <NotFoundPage />
                </Router>
            </Provider>
            , div
        );
    });
});