import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from './redux'
import {social} from "./redux/actionCreators";


export const SubDepartments = () => {

    return [
        {
            id: 'resources',
            title: 'Resources',
            link: 'https://www.accenture.com/no-en',
            infoText: 'Dette er info om Resources',
            infoSubText: 'Dette er info om veien videre for Resources'
        },
        {
            id: 'health&publicServices',
            title: 'Health & Public Services',
            link: 'https://www.accenture.com/no-en',
            infoText: 'Dette er info om Health & Public Services',
            infoSubText: 'Dette er info om veien videre for Health & Public Services'
        },
        {
            id: 'communicationMediaTechnology',
            title: 'Communication Media Technology',
            link: 'https://www.accenture.com/no-en',
            infoText: 'Dette er info om Communication Media Technology',
            infoSubText: 'Dette er info om veien videre for Communication Media Technology'
        },
        {
            id: 'financialServices',
            title: 'Financial Services',
            link: 'https://www.accenture.com/no-en',
            infoText: 'Dette er info om Financial Services',
            infoSubText: 'Dette er info om veien videre for Financial Services'
        },
        {
            id: 'products',
            title: 'Products',
            link: 'https://www.accenture.com/no-en',
            infoText: 'Dette er info om Products',
            infoSubText: 'Dette er info om veien videre for Products'
        },
        {
            id: 'design',
            title: 'Design',
            link: 'https://www.accenture.com/no-en',
            infoText: 'Dette er info om Design',
            infoSubText: 'Dette er info om veien videre for Design'
        },
        {
            id: 'build',
            title: 'Build',
            link: 'https://www.accenture.com/no-en',
            infoText: 'Dette er info om Build',
            infoSubText: 'Dette er info om veien videre for Build'
        },
        {
            id: 'communications',
            title: 'Communications',
            link: 'https://www.accenture.com/no-en',
            infoText: 'Dette er info om Communications',
            infoSubText: 'Dette er info om veien videre for Communications'
        },
    ];
};