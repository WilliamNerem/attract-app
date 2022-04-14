import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {actionCreators, State, store} from "../../redux";
import {Provider, useDispatch, useSelector} from "react-redux";
import {fireEvent, render} from "@testing-library/react";
import {ResultSubDepartment} from "../../components/organisms/resultSubDepartment";
import {bindActionCreators} from "redux";

const WrapperStrategy = () => {
    const dispatch = useDispatch();
    const {allocateStrat_ProductsPoints, allocateStrat_ResourcesPoints, allocateStrat_FinancePoints, allocateStrat_Health_PublicPoints} = bindActionCreators(actionCreators, dispatch);
    const stratSub = useSelector((state: State) => state.stratSubdivision);
    allocateStrat_ProductsPoints(5);
    allocateStrat_ResourcesPoints(3);
    allocateStrat_FinancePoints(10);
    allocateStrat_Health_PublicPoints(1);
    return(
        <ResultSubDepartment information={stratSub} />
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
        expect(getByTestId('carouselFront')).toHaveTextContent('Financial Services');
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