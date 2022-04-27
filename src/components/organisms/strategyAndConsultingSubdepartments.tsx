import React from "react";
import {InfoCard} from "../atoms/infoCard";

interface props {
    close: Function;
}

export const StrategyAndConsultingSubDepartments = ({close}: props) => {
    return (
        <>
            <div className='info'>
                <div className='gradientDiv'>
                    <div className={'backToResult'} onClick={() => close()}>
                        <div className={'backArrowWhite'}/>
                        <p className={'backText'}>Tilbake</p>
                    </div>
                    <h1 className='infoText'>S&C sine underavdelinger</h1>
                    <p className='infoSubText'>Under finner du informasjon om underavdelingene i Strategy & Consulting</p>
                </div>
                <div className={'info-wrapper'}>
                    <div className='infoCards firstValgomatCard'>
                        <InfoCard heading='Financial Services' text='teds<f<sdf<sdf fdsgsdfgsdf gsdfgdfgsths <sdf<sdffdsgsdfgs dfgsdfgd fgsthsgfhsfhtg st<sdf <sdffds gsdfgsdf gsdfgdfg sths gfhsfhtgst sdf<sdffds sdfgsdfgsdf gdfgsthsg hsfhtgst <sdf<sdff dsgs dfgsdf gsdf gdfgsthsgfhs fhtgs tgfhsfht gsthxt' isDropdown={true}/>
                    </div>
                    <div className='infoCards'>
                        <InfoCard heading='Health & Public Services' text='text' isDropdown={true}/>
                    </div>
                    <div className='infoCards'>
                        <InfoCard heading='Communications Media & Technology' text='text' isDropdown={true}/>
                    </div>
                    <div className='infoCards'>
                        <InfoCard heading='Products' text='text' isDropdown={true}/>
                    </div>
                    <div className='infoCards'>
                        <InfoCard heading='Resources' text='text' isDropdown={true}/>
                    </div>
                </div>
            </div>
        </>
    )
};