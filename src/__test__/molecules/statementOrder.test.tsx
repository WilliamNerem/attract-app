import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {store} from "../../redux";
import {Provider} from "react-redux";
import {render} from "@testing-library/react";
import {StatementOrder} from "../../components/molecule/statementOrder";

describe('Statement order render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Provider store={store}>
                <Router>
                    <StatementOrder sharedWords={''}/>
                </Router>
            </Provider>
            , div
        );
    });

    it('should render with the correct info', () => {
        const {getByTestId} = render(
            <Provider store={store}>
                <Router>
                    <StatementOrder sharedWords={'test data'}/>
                </Router>
            </Provider>
        );
        expect(getByTestId('sharedWords')).toHaveTextContent('test data');
    });

});