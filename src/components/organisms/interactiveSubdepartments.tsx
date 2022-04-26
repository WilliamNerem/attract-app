import React from "react";
import {InfoCard} from "../atoms/infoCard";

interface props {
    close: Function;
}

export const InteractiveSubDepartments = ({close}: props) => {
    return (
        <>
            <div className='info'>
                <div className='gradientDiv'>
                    <div className={'backToResult'} onClick={() => close()}>
                        <div className={'backArrowWhite'}/>
                        <p className={'backText'}>Tilbake</p>
                    </div>
                    <h1 className='infoText'>Interactive sine underavdelinger</h1>
                    <p className='infoSubText'>Under finner du informasjon om underavdelingene i Interactive</p>
                </div>
                <InfoCard heading='Build' text='text' isDropdown={true}/>
                <div className='infoCards'>
                    <InfoCard heading='Design' text='text' isDropdown={true}/>
                </div>
                <div className='infoCards'>
                    <InfoCard heading='Communications' text='text' isDropdown={true}/>
                </div>
                <br/>
                <br/>
            </div>
        </>
    )
};