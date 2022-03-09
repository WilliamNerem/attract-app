import React from "react";
import { Button } from "../atoms/button";
import '../../styles/result.style.css';
import {ResultText} from "../atoms/resultText";
import {Pallet} from "../atoms/pallet";
import {InfoCard} from "../atoms/infoCard";
import {Navbar} from "../molecule/navbar";
import {departments} from "../../departments";

interface resultProps {
    differenceArray: any[]
}

export const Result = ({differenceArray

}: resultProps) => {
    const maxVal = Math.max(...differenceArray);
    const valPos = differenceArray.indexOf(maxVal);
    const result = departments[valPos].name;
    let link;
    let infoText;
    let infoSubText;

    if (result === 'S&C') {
        link = 'https://www.accenture.com/no-en/about/consulting-index';
        infoText = 'Dette er infotekst om Strategy and Consulting, få mer tekst fra Accenture, veiledere eller produkteier.';
        infoSubText = 'Dette er veien videre for Strategy and Consulting.';
    }
    else if (result === 'Technology') {
        link = 'https://www.accenture.com/no-en/about/technology-index';
        infoText = 'Dette er infotekst om Technology, få mer tekst fra Accenture, veiledere eller produkteier.';
        infoSubText = 'Dette er veien videre for Technology.';
    }
    else if (result === 'Interactive') {
        link = 'https://www.accenture.com/no-en/about/accenture-interactive-index';
        infoText = 'Dette er infotekst om Interactive, få mer tekst fra Accenture, veiledere eller produkteier.';
        infoSubText = 'Dette er veien videre for Interactive.';
    }
    else {
        link = 'https://www.accenture.com/no-en';
        infoText = 'Ingen info å finne';
        infoSubText = '';
    }


  return(
      <div>
          <Navbar/>
          <div className='result'>
              <div className='gradientDiv'>
                  <ResultText result={result}/>
                  <Pallet differenceArray={differenceArray}/>
              </div>
              <InfoCard
                  heading={result}
                  subHeading={'Veien videre'}
                  link={link}
                  text={infoText}
                  subText={infoSubText}/>
              <Button href='/' text='Tilbake til forsiden'/>
          </div>
      </div>
  );
};