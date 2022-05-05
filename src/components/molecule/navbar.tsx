import React, {useEffect, useState} from "react";
import { HamburgerMenu } from "./hamburger";
import Acc_Logo_Black_Purple_RGB from '../../images/Acc_Logo_Black_Purple_RGB.png'
import '../../styles/navbar.style.css'
import Backdrop from '@mui/material/Backdrop';
import {useDispatch, useSelector} from "react-redux";
import {State} from "../../redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../redux";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import i18n from "../../i18n";

export const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const inProgress = useSelector((state: State) => state.valgomatInProgress);
    const { showAlertDialog, isInfoClicked } = bindActionCreators(actionCreators, dispatch);
    const [open, setOpen] = useState(false);
    const [height, setHeight] = useState<string|number>(0);
    const [hamburgerToggled, setHamburgerToggled] = useState(false);
    const [locale, setLocale] = useState(i18n.language);
    const [isEnglish, setIsEnglish] = useState(false);
    i18n.on('languageChanged', () => setLocale(i18n.language));
    const { t } = useTranslation();

    useEffect(() => {
        if (locale === 'en'){
            setIsEnglish(true);
        } else {
            setIsEnglish(false);
        }
    }, [locale]);

    const handleClick = (isInfo: boolean) => {
        if (inProgress) {
            showAlertDialog(true);
            isInfoClicked(isInfo);
        } else {
            isInfo ? navigate('/info') : navigate('/');
        }
    };

    useEffect(() => {
        if (hamburgerToggled) {
            setHeight('auto');
            setOpen(true);
        } else {
            setHeight(0);
            setOpen(false);
        }
    }, [hamburgerToggled]);

    const changeLocale = (l: string) =>  {
        if (locale !== l) {
            i18n.changeLanguage(l);
        }
    };

    return(
        <div className='navMargin' data-testid={'navbar'}>
            <div className='nav'>
                <a
                    className={'navbar-item-logo'}
                    onClick={() => handleClick(false)}
                    onKeyPress={() => handleClick(false)}
                    data-testid={'navLogo'}
                >
                    <img
                        className='logo'
                        src={Acc_Logo_Black_Purple_RGB}
                        alt='logo'
                        tabIndex={0}
                    />
                </a>
                <a
                    className={'navbar-item'}
                    onClick={() => handleClick(false)}
                    onKeyPress={() => handleClick(false)}
                    tabIndex={0}
                >
                    {t('home')}
                </a>
                <a
                    className={'navbar-item'}
                    onClick={() => handleClick(true)}
                    onKeyPress={() => handleClick(true)}
                    tabIndex={0}
                >
                    {t('information')}
                </a>
                <a
                    className={'navbar-item'}
                    href={'#/valgomat'}
                >
                    {t('valgomat')}
                </a>
                <HamburgerMenu
                    hamburgerToggled={hamburgerToggled}
                    setHamburgerToggled={setHamburgerToggled}
                    height={height}
                />
                <div className={'countryFlagsDesktop navbar-item'} data-testid={'hamburgerItemLanguage'}>
                    <div className={'flagdivider'}/>
                    <div
                        className={`flagWrapper ${isEnglish ? 'languageActive' : ''}`}
                        onClick={() => changeLocale('en')}
                        onKeyPress={() => changeLocale('en')}
                        tabIndex={0}
                    >
                        <img
                            alt="English"
                            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"
                            className={'usFlag'}
                        />
                    </div>
                    <div className={'flagdivider'}/>
                    <div
                        className={`flagWrapper ${isEnglish ? '' : 'languageActive'}`}
                        onClick={() => changeLocale('no')}
                        onKeyPress={() => changeLocale('no')}
                        tabIndex={0}
                    >
                        <img
                            alt="Norwegian"
                            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/NO.svg"
                            className={'noFlag'}
                        />
                    </div>
                </div>
            </div>
            <Backdrop
                sx={{ zIndex: 9 }}
                open={open}
                onClick={() => {
                    setOpen(false);
                    setHamburgerToggled(!hamburgerToggled);
                }}
            />
        </div>
    );
};