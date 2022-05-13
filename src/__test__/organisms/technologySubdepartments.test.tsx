import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {store} from "../../redux";
import {BrowserRouter as Router} from "react-router-dom";
import {fireEvent, render} from "@testing-library/react";
import {TechnologySubDepartments} from "../../components/organisms/technologySubdepartments";

describe('Technology Subdepartments render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Provider store={store}>
                <Router>
                    <TechnologySubDepartments close={() => {}} tabIndex={0} />
                </Router>
            </Provider>
            , div
        );
    });

    it('should expand info card when clicked',  () => {
        const { getAllByTestId } = render(
            <Provider store={store}>
                <Router>
                    <TechnologySubDepartments close={() => {}} tabIndex={0} />
                </Router>
            </Provider>
        );
        expect(getAllByTestId('infoCard')[0]).toHaveClass('minimizedLongText infoCard');
        fireEvent.click(getAllByTestId('infoCardDropdown')[0]);
        expect(getAllByTestId('infoCard')[0]).toHaveClass('expanded infoCard');
    });
});