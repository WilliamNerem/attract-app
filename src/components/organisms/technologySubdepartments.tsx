import React from "react";
import {InfoCard} from "../atoms/infoCard";

interface props {
    close: Function;
}

export const TechnologySubDepartments = ({close}: props) => {
    return (
        <>
            <div className='info'>
                <div className='gradientDiv'>
                    <div className={'backToResult'} onClick={() => close()}>
                        <div className={'backArrowWhite'}/>
                        <p className={'backText'}>Tilbake</p>
                    </div>
                    <h1 className='infoText'>Technology sine underavdelinger</h1>
                    <p className='infoSubText'>Under finner du informasjon om underavdelingene i Technology</p>
                </div>
                <div className={'info-wrapper'}>
                    <div className='infoCards firstValgomatCard'>
                        <InfoCard heading='CIE' text='text' isDropdown={true}/>
                    </div>
                    <div className='infoCards'>
                        <InfoCard heading='IPS' text='text' isDropdown={true}/>
                    </div>
                    <div className='infoCards'>
                        <InfoCard heading='IPD' text='text' isDropdown={true}/>
                    </div>
                    <div className='infoCards'>
                        <InfoCard heading='Security' text='text' isDropdown={true}/>
                    </div>
                </div>
            </div>
        </>
    )
};