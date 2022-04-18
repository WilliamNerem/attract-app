import React from 'react';
import ReactDOM from "react-dom";
import {render, fireEvent} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../redux";
import {ImageSelection} from "../../components/atoms/imageSelection";

describe('Image selection render', () => {

    it('should update state on click', () => {
        let one = 0;
        let two = 0;
        let three = 0;
        const funcOne = (num: number) => {
            one += num;
        };
        const funcTwo = (num: number) => {
            two += num;
        };
        const funcThree = (num: number) => {
            three += num;
        };

        const { getByTestId } = render(
            <Provider store={store}>
                <ImageSelection pictures={['', '', '']} pointAllocater={[funcOne, funcTwo, funcThree]} />
            </Provider>
        );

        fireEvent.click(getByTestId('secondInput'));
        expect(one).toBe(0);
        expect(two).toBe(1);
        expect(three).toBe(0);
        fireEvent.click(getByTestId('thirdInput'));
        expect(one).toBe(0);
        expect(two).toBe(0);
        expect(three).toBe(1);
        fireEvent.click(getByTestId('firstInput'));
        expect(one).toBe(1);
        expect(two).toBe(0);
        expect(three).toBe(0);
    });

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Provider store={store}>
                <ImageSelection pictures={['', '', '']} pointAllocater={[() => {}, () => {}, () => {}]}/>
            </Provider>
            , div
        );
    });

    it('should render image selection with correct values', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <ImageSelection pictures={['first', 'second', 'third']} pointAllocater={[() => {}, () => {}, () => {}]}/>
            </Provider>
        );
        expect(getByTestId("firstImage")).toHaveClass('first');
        expect(getByTestId("secondImage")).toHaveClass('second');
        expect(getByTestId("thirdImage")).toHaveClass('third');
    });


});