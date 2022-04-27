 import React from 'react'; /*
import { render, cleanup, fireEvent } from "@testing-library/react";
import {InfoCard} from "../../components/atoms/infoCard";
// Old part two file, saved in case of wanting to do questions instead of info

// mocking of component render - not necessary unless error with "found multiple element with data-testid"
afterEach(cleanup);

describe('Info card render', () => {

    it('should render without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <InfoCard heading={'Test'} text={'Test text'}/>
            , div
        );
    });

    it('should render info card with correct values', () => {
        const { getByTestId } = render(
            <InfoCard heading={'Heading'} text={'Text'} subHeading={'Sub heading'} subText={'Sub text'}/>
        );
        expect(getByTestId("infoCard")).toHaveTextContent('Heading');
        expect(getByTestId("infoCard")).toHaveTextContent('Text');
        expect(getByTestId("infoCard")).toHaveTextContent('Sub heading');
        expect(getByTestId("infoCard")).toHaveTextContent('Sub text');
    });

    it('should render info card as dropdown', () => {
        const { container } = render(
            <InfoCard heading={'Heading'} text={'Text'} isDropdown={true}/>
        );
        expect(container.getElementsByClassName('minimized').length).toBe(1);
    });

    it('should change class name when dropdown is clicked', () => {
        const { container, getByTestId } = render(
            <InfoCard heading={'Heading'} text={'Text'} isDropdown={true}/>
        );
        expect(container.getElementsByClassName('minimized').length).toBe(1);
        fireEvent.click(getByTestId('infoCardDropdown'));
        expect(container.getElementsByClassName('expanded').length).toBe(1);
    });

    it('should render subdepartments if there are departmentpoints', () => {
        const { getByTestId } = render(
            <InfoCard
                heading={'Heading'}
                text={'Text'}
                isDropdown={true}
                onButtonClick={() => {}}
                subDepArr={[
                    {subdivision: "communications", points: 4},
                    {subdivision: "build", points: 8},
                    {subdivision: "design", points: 12}
                    ]}
            />
        );

        expect(getByTestId('infoCardSubDep'));
    });
});
*/