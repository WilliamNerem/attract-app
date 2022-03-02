import React from "react";
import { Button } from "../atoms/button";
import '../../styles/result.style.css';
import {ResultText} from "../atoms/resultText";
import {Pallet} from "../atoms/pallet";
import {InfoCard} from "../atoms/infoCard";
import {Navbar} from "../molecule/navbar";

export const Result = () => {

    const infoText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate ante justo, a sodales ipsum condimentum ut. Nunc laoreet aliquet vestibulum.';
    const linkToStrategyAndConsulting = 'https://www.accenture.com/no-en/about/consulting-index';
  return(
      <div>
          <Navbar/>
          <div className='result'>
              <div className='gradientDiv'>
                  <ResultText/>
                  <Pallet/>
              </div>
              <InfoCard heading='Strategy & Consulting' link={linkToStrategyAndConsulting} text={infoText}/>
              <Button href='/' text='Tilbake til forsiden'/>
          </div>
      </div>
  );
};