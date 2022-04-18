import React from 'react';
import ReactDOM from "react-dom";
import {fireEvent, render} from "@testing-library/react";
import EmailDepSender from "../../components/atoms/emailDepSender";

describe('Email dep sender render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <EmailDepSender chosenDep='Interactive' />
            , div
        );
    });

    it('should render input box when checkbox is checked', () => {
        const { getByTestId } = render(
            <EmailDepSender chosenDep='Interactive' />
        );
        expect(getByTestId('emailSender')).not.toHaveTextContent('Skriv inn din e-post');
        fireEvent.click(getByTestId('emailCheckbox'));
        expect(getByTestId('emailSender')).toHaveTextContent('Skriv inn din e-post');
        fireEvent.click(getByTestId('emailCheckbox'));
        expect(getByTestId('emailSender')).not.toHaveTextContent('Skriv inn din e-post');
    });

    it('should have disabled button when invalid email',  () => {
        const { getByTestId } = render(
            <EmailDepSender chosenDep='Interactive' />
        );
        fireEvent.click(getByTestId('emailCheckbox'));
        fireEvent.change(getByTestId('emailInput'), {target: {value: 'testingNonEmail.com'}});
        expect(getByTestId('emailSend')).toHaveAttribute('disabled');
    });

    it('should not have disabled button when valid email',  () => {
        const { getByTestId } = render(
            <EmailDepSender chosenDep='Interactive' />
        );
        fireEvent.click(getByTestId('emailCheckbox'));
        fireEvent.change(getByTestId('emailInput'), {target: {value: 'test@email.com'}});
        expect(getByTestId('emailSend')).not.toHaveAttribute('disabled');
    });

});