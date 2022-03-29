import React from 'react';
import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import {Pallet} from "../components/atoms/pallet";


// mocking of component render - not necessary unless error with "found multiple element with data-testid"
afterEach(cleanup);

describe('Pallet render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Pallet totalPointsArray={ [1 ,2 ,3] } />
        , div
        );
    });

})