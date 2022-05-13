import React from "react";
import {InfoCard} from "../atoms/infoCard";
import {useTranslation} from "react-i18next";

interface props {
    close: Function;
    tabIndex: number;
}

export const InteractiveSubDepartments = ({close, tabIndex}: props) => {
    const { t } = useTranslation();
    return (
        <>
            <div className='info'>
                <div className='gradientDiv'>
                    <div className={'backToResult'} onClick={() => close()} onKeyPress={() => close()} tabIndex={tabIndex} data-testid={'backInteractive'}>
                        <div className={'backArrowWhite'}/>
                        <p className={'backText'}>{t('subDepBack')}</p>
                    </div>
                    <h1 className='infoText'>{t('subDepInteractiveHeader')}</h1>
                    <p className='infoSubText'>{t('subDepInteractiveText')}</p>
                </div>
                <div className={'info-wrapper'}>
                    <div className='infoCards'>
                        <InfoCard heading='Design' text={t('subDepInteractiveDesign')} isDropdown={true} tabIndex={tabIndex}/>
                    </div>
                    <div className='infoCards firstValgomatCard'>
                        <InfoCard heading='Build' text={t('subDepInteractiveBuild')} isDropdown={true} tabIndex={tabIndex}/>
                    </div>
                    <div className='infoCards'>
                        <InfoCard heading='Communications' text={t('subDepInteractiveCommunications')} isDropdown={true} tabIndex={tabIndex}/>
                    </div>
                </div>
            </div>
        </>
    )
};