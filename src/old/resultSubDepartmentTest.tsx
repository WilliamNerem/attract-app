import React from 'react';
/*
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {actionCreators, State, store} from "../redux";
import {Provider, useDispatch, useSelector} from "react-redux";
import {fireEvent, render} from "@testing-library/react";
import {ResultSubDepartment} from "./resultSubDepartment";
import {bindActionCreators} from "redux";

const WrapperStrategy = () => {
    const dispatch = useDispatch();
    const {allocateInteractive_DesignPoints, allocateInteractive_BuildPoints, allocateInteractive_CommunicationsPoints} = bindActionCreators(actionCreators, dispatch);
    const intSub = useSelector((state: State) => state.interactiveSubdivision);
    allocateInteractive_DesignPoints(5);
    allocateInteractive_BuildPoints(3);
    allocateInteractive_CommunicationsPoints(10);
    return(
        <ResultSubDepartment information={intSub} />
    );
};

describe('Result sub department render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Provider store={store}>
                <Router>
                    <WrapperStrategy />
                </Router>
            </Provider>
            , div
        );
    });

    it('should render first place info card in front', () => {
        const {getByTestId} = render(
            <Provider store={store}>
                <Router>
                    <WrapperStrategy />
                </Router>
            </Provider>
        );
        expect(getByTestId('carouselFront')).toHaveTextContent('Communications');
    });

    it('should move carousel when arrow is clicked', () => {
        const {getByTestId} = render(
            <Provider store={store}>
                <Router>
                    <WrapperStrategy />
                </Router>
            </Provider>
        );
        expect(getByTestId('carouselFront')).toHaveClass('middleCard middleCarouselItem');
        fireEvent.click(getByTestId('rightArrow'));
        expect(getByTestId('carouselFront')).toHaveClass('leftCard middleCarouselItem');
    });

});

 */