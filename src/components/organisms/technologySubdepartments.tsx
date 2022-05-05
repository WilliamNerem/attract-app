import React from "react";
import {InfoCard} from "../atoms/infoCard";
import {useTranslation} from "react-i18next";

interface props {
    close: Function;
}

export const TechnologySubDepartments = ({close}: props) => {
    const { t } = useTranslation();
    return (
        <>
            <div className='info'>
                <div className='gradientDiv'>
                    <div className={'backToResult'} onClick={() => close()}>
                        <div className={'backArrowWhite'}/>
                        <p className={'backText'}>{t('subDepBack')}</p>
                    </div>
                    <h1 className='infoText'>{t('subDepTechHeader')}</h1>
                    <p className='infoSubText'>{t('subDepTechText')}</p>
                </div>
                <div className={'info-wrapper'}>
                    <div className='infoCards firstValgomatCard'>
                        <InfoCard heading='CIE' text={t('subDepTechCIE')} isDropdown={true}/>
                    </div>
                    <div className='infoCards'>
                        <InfoCard heading='Security' text={t('subDepTechSecurity')} isDropdown={true}/>
                    </div>
                    <div className='infoCards'>
                        <InfoCard heading='Salesforce' text={t('subDepTechSalesforce')} isDropdown={true}/>
                    </div>
                </div>
            </div>
        </>
    )
};