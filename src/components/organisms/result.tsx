import React from "react";
import { Button } from "../atoms/button";
import '../../styles/result.style.css';
import {ResultText} from "../atoms/resultText";
import {Pallet} from "../atoms/pallet";
import {InfoCard} from "../atoms/infoCard";
import {Navbar} from "../molecule/navbar";
import {departments} from "../../departments";

interface resultProps {
    totalPointsArray: any[]
}

export const Result = ({totalPointsArray

}: resultProps) => {
    const maxVal = Math.max(...totalPointsArray);
    const valPos = totalPointsArray.indexOf(maxVal);
    const result = departments[valPos].name;
    let link;
    let infoText;
    let infoSubText;

    if (result === 'S&C') {
        link = 'https://www.accenture.com/no-en/about/consulting-index';
        infoText = 'I Strategy & Consulting vil du være med på å definere og implementere morgendagens teknologiske ' +
            'løsninger for private- og offentlige aktører. Du vil jobbe i store og små ' +
            'prosjektteam hvor man samarbeider på tvers av avdelinger for å løse problemstillinger innenfor et mangfold av ' +
            'industrier.';
        infoSubText = 'Dette er veien videre for Strategy and Consulting.';
    }
    else if (result === 'Technology') {
        link = 'https://www.accenture.com/no-en/about/technology-index';
        infoText = 'I Technology blir du involvert i noen av Norges mest spennende og meningsfylte IT-prosjekter. Sammen ' +
            'med kunden leverer vi innovative løsninger som bidrar til verdiskaping både for bedrifter og samfunnet. Vi' +
            'satser stort innenfor skyløsninger, digital infrastruktur, digitalisering og prosessautomatisering.';
        infoSubText = 'Dette er veien videre for Technology.';
    }
    else if (result === 'Interactive') {
        link = 'https://www.accenture.com/no-en/about/accenture-interactive-index';
        infoText = 'Hos Interactive jobber designere og kreatørene. Vi skaper løsninger ved å kombinere kreativitet og fokus på sluttbruker med ' +
            'teknisk innsikt og gjennomføringsevne. Interactive-teamet bruker en kombinasjon av design, markedsføring, innhold og forretningsforståelse'+
            'til å skape innovative og bransjeledende brukeropplevelser.';
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
                  <Pallet totalPointsArray={totalPointsArray}/>
              </div>
              <InfoCard
                  heading={result}
                  subHeading={'Veien videre'}
                  link={link}
                  text={infoText}
                  subText={infoSubText}/>
              <div className='buttonDiv'>
                  <Button href='/' text='Tilbake til forsiden'/>
              </div>
          </div>
      </div>
  );
};