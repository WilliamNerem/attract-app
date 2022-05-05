import React from "react";
import {InfoCard} from "../atoms/infoCard";
import {useTranslation} from "react-i18next";

interface props {
    close: Function;
    tabIndex: number;
}

export const TechnologySubDepartments = ({close, tabIndex}: props) => {
    const { t } = useTranslation();
    return (
        <>
            <div className='info'>
                <div className='gradientDiv'>
                    <div className={'backToResult'} onClick={() => close()} onKeyPress={() => close()} tabIndex={tabIndex}>
                        <div className={'backArrowWhite'}/>
                        <p className={'backText'}>{t('subDepBack')}</p>
                    </div>
                    <h1 className='infoText'>{t('subDepTechHeader')}</h1>
                    <p className='infoSubText'>{t('subDepTechText')}</p>
                </div>
                <div className={'info-wrapper'}>
                    <div className='infoCards firstValgomatCard'>
                        <InfoCard heading='CIE' text={t('subDepScProducts')} isDropdown={true} tabIndex={tabIndex}/>
                    </div>
                    <div className='infoCards'>
                        <InfoCard heading='IPS' text={t('subDepScProducts')} isDropdown={true} tabIndex={tabIndex}/>
                    </div>
                    <div className='infoCards'>
                        <InfoCard heading='IPD' text={t('subDepScProducts')} isDropdown={true} tabIndex={tabIndex}/>
                    </div>
                    <div className='infoCards'>
                        <InfoCard heading='Security' text={t('subDepScProducts')} isDropdown={true} tabIndex={tabIndex}/>
                    </div>
                </div>
            </div>
        </>
    )
};