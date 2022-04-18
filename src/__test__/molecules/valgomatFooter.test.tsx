import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {store} from "../../redux";
import {Provider} from "react-redux";
import {ValgomatFooter} from "../../components/molecule/valgomatFooter";

describe('Valgomat footer render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Provider store={store}>
                <Router>
                    <ValgomatFooter completed={40} nextTransition={() => {}}/>
                </Router>
            </Provider>
            , div
        );
    });

});