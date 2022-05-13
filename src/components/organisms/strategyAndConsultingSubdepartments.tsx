import React from "react";
import {InfoCard} from "../atoms/infoCard";
import {useTranslation} from "react-i18next";

interface props {
    close: Function;
    tabIndex: number;
}

export const StrategyAndConsultingSubDepartments = ({close, tabIndex}: props) => {
    const { t } = useTranslation();
    return (
        <>
            <div className='info'>
                <div className='gradientDiv'>
                    <div className={'backToResult'} onClick={() => close()} onKeyPress={() => close()} tabIndex={tabIndex} data-testid={'backSC'}>
                        <div className={'backArrowWhite'}/>
                        <p className={'backText'}>{t('subDepBack')}</p>
                    </div>
                    <h1 className='infoText'>{t('subDepScFunctionalHeader')}</h1>
                    <p className='infoSubText'>{t('subDepScFunctionalText')}</p>
                </div>
                <div className={'info-wrapper'}>
                    <div className='infoCards firstValgomatCard'>
                        <InfoCard heading='Applied Intelligence' text={t('subDepScAppliedIntelligence')} isDropdown={true} tabIndex={tabIndex}/>
                    </div>
                    <div className='infoCards'>
                        <InfoCard heading='CEO & Enterprise Strategy' text={t('subDepScCES')} isDropdown={true} tabIndex={tabIndex}/>
                    </div>
                    <div className='infoCards'>
                        <InfoCard heading='Talent & Organization' text={t('subDepScTO')} isDropdown={true} tabIndex={tabIndex}/>
                    </div>
                    <div className='infoCards'>
                        <InfoCard heading='Supply Chains and Operations' text={t('subDepScSCO')} isDropdown={true} tabIndex={tabIndex}/>
                    </div>
                    <div className='infoCards'>
                        <InfoCard heading='Customers, Sales & Services' text={t('subDepScCSS')} isDropdown={true} tabIndex={tabIndex}/>
                    </div>
                    <div className='infoCards'>
                        <InfoCard heading='CFO & Enterprise Value' text={t('subDepScCEV')} isDropdown={true} tabIndex={tabIndex}/>
                    </div>
                    <div className='infoCards'>
                        <InfoCard heading='Industry X' text={t('subDepScIndustryX')} isDropdown={true} tabIndex={tabIndex}/>
                    </div>
                    <div className='infoCards'>
                        <InfoCard heading='Technology, Strategy and Advisory' text={t('subDepScTSA')} isDropdown={true} tabIndex={tabIndex}/>
                    </div>
                </div>
                <div className='gradientDiv'>
                    <h1 className='infoText'>{t('subDepScIndustryHeader')}</h1>
                    <p className='infoSubText'>{t('subDepScIndustryText')}</p>
                </div>
                <div className={'info-wrapper'}>
                    <div className='infoCards firstValgomatCard'>
                        <InfoCard heading='Communications Media & Technology' text={t('subDepScCMT')} isDropdown={true} tabIndex={tabIndex}/>
                    </div>
                    <div className='infoCards'>
                        <InfoCard heading='Financial Services' text={t('subDepScFinancialServices')} isDropdown={true} tabIndex={tabIndex}/>
                    </div>
                    <div className='infoCards'>
                        <InfoCard heading='Health & Public Services' text={t('subDepScHPS')} isDropdown={true} tabIndex={tabIndex}/>
                    </div>
                    <div className='infoCards'>
                        <InfoCard heading='Products' text={t('subDepScProducts')} isDropdown={true} tabIndex={tabIndex}/>
                    </div>
                    <div className='infoCards'>
                        <InfoCard heading='Resources' text={t('subDepScResources')} isDropdown={true} tabIndex={tabIndex}/>
                    </div>
                </div>
            </div>
        </>
    )
};