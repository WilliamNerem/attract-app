import React, {useEffect, useState} from 'react';
import '../../styles/navbar.style.css'
import {Link, useLocation} from "react-router-dom";
import i18n from "../../i18n";

interface hamburgerItemProps {
    itemText?: string
    link: string
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

export const HamburgerItem = ({
    itemText,
    link,
    onClick
}: hamburgerItemProps) => {
    const [locale, setLocale] = useState(i18n.language);
    const [isEnglish, setIsEnglish] = useState(false);
    i18n.on('languageChanged', () => setLocale(i18n.language));
    const location = useLocation();
    let className = 'hamburgerItemLink';

    useEffect(() => {
        if (locale === 'en'){
            setIsEnglish(true);
        } else {
            setIsEnglish(false);
        }
    }, [locale]);

    if (location.pathname === link){
        className = 'hamburgerItemLinkActive'
    }

    const changeLocale = (l: string) =>  {
        if (locale !== l) {
            i18n.changeLanguage(l);
        }
    };

    if (itemText){
        return (
            <div data-testid={'hamburgerItem'}>
                {onClick
                    ? <Link onClick={onClick} className={className} to={link} >{itemText}</Link>
                    : <Link to={link} className={className} >{itemText}</Link>}

            </div>
        );
    } else {
        return (
            <div className={'countryFlags'} data-testid={'hamburgerItemLanguage'}>
                <div className={`flagWrapper ${isEnglish ? 'languageActive' : ''}`} onClick={() => changeLocale('en')}>
                    <img
                        alt="English"
                        src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"
                        className={'usFlag'}
                    />
                </div>
                <div className={'flagdivider'}/>
                <div className={`flagWrapper ${isEnglish ? '' : 'languageActive'}`} onClick={() => changeLocale('no')}>
                    <img
                        alt="Norwegian"
                        src="http://purecatamphetamine.github.io/country-flag-icons/3x2/NO.svg"
                        className={'noFlag'}
                    />
                </div>
            </div>
        );
    }
};