import React from 'react';
import ReactDOM from "react-dom";
import {fireEvent, render} from "@testing-library/react";
import EmailDepSender from "../../components/atoms/emailDepSender";

describe('Email dep sender render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <EmailDepSender totalPointsArray={[5, 6, 7]} />
            , div
        );
    });

    it('should render input box when checkbox is checked', () => {
        const { getByTestId } = render(
            <EmailDepSender totalPointsArray={[5, 6, 7]} />
        );
        expect(getByTestId('emailForm')).toHaveStyle('height: 0');
        fireEvent.click(getByTestId('emailCheckbox'));
        expect(getByTestId('emailForm')).toHaveStyle('height: 120px');
        fireEvent.click(getByTestId('emailCheckbox'));
        expect(getByTestId('emailForm')).toHaveStyle('height: 0');
    });

    it('should have disabled button when invalid email',  () => {
        const { getByTestId } = render(
            <EmailDepSender totalPointsArray={[5, 6, 7]} />
        );
        fireEvent.click(getByTestId('emailCheckbox'));
        fireEvent.change(getByTestId('emailInput'), {target: {value: 'testingNonEmail.com'}});
        expect(getByTestId('emailSend')).toHaveAttribute('disabled');
    });

    it('should not have disabled button when valid email',  () => {
        const { getByTestId } = render(
            <EmailDepSender totalPointsArray={[5, 6, 7]} />
        );
        fireEvent.click(getByTestId('emailCheckbox'));
        fireEvent.change(getByTestId('emailInput'), {target: {value: 'test@email.com'}});
        expect(getByTestId('emailSend')).not.toHaveAttribute('disabled');
    });

});