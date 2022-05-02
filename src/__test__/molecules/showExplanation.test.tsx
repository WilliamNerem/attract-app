import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {store} from "../../redux";
import {Provider} from "react-redux";
import {ShowExplanation} from "../../components/molecule/showExplanation";
import {render, screen} from "@testing-library/react";

describe('Show explanation render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Provider store={store}>
                <Router>
                    <ShowExplanation questionType={'likertScale'}/>
                </Router>
            </Provider>
            , div
        );
    });

    it('should render with the correct info', () => {
        render(
            <Provider store={store}>
                <Router>
                    <ShowExplanation questionType={'likertScale'}/>
                </Router>
            </Provider>
        );

        expect(screen.getByText('explanationLikertHeading')).toBeInTheDocument();
    });

});