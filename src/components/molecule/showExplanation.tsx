import {InfoCard} from "../atoms/infoCard";
import React from "react";

interface showExplanationProps {
    questionType: string
}

export const ShowExplanation = ({questionType}: showExplanationProps) => {

    let heading = '';
    let text: '';
    let subHeading: '';

    if (questionType === 'likertScale'){



    }

    return(
        <InfoCard
            heading='Interactive'
            text='Hos Interactive jobber designere og kreatørene. Vi skaper løsninger ved å kombinere kreativitet og fokus på sluttbruker med
            teknisk innsikt og gjennomføringsevne. Interactive-teamet bruker en kombinasjon av design(tjeneste-, grafisk- og
            interaksjonsdesign), markedsføring, innhold og forretningsforståelse til å skape innovative og bransjeledende
            brukeropplevelser. Dette gjøres ved å kombinere den rette kompetansen, sette brukeren i sentrum og sørge for å
            designe meningsfulle produkter og tjenester, som er med på å endre samfunnet til det bedre.'

        />
    );
};