import {Navbar} from "../components/molecule/navbar";
import {ResetStates} from "../resetStates";
import {InfoCard} from "../components/atoms/infoCard";
import React from "react";
import '../styles/info.style.css'

const Info = () => {
    ResetStates();

    return (
        <>
            <Navbar/>
            <div className='info'>
                <div className='gradientDiv'>
                    <h1 className='infoText'>Accenture sine avdelinger</h1>
                    <p className='infoSubText'>Under finner du informasjon om hvordan Accenture er bygget opp. Avdelingene har flere likheter og ulikheter</p>
                </div>
                <InfoCard heading='Strategy & Consulting' text='infotext'/>
                <div className='infoCards'>
                    <InfoCard heading='Technology' text='infotext'/>
                </div>
                <div className='infoCards'>
                    <InfoCard heading='Interactive' text='infotext'/>
                </div>
            </div>
        </>
    )
};

export default Info;