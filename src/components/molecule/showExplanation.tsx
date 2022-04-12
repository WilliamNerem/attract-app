import {InfoCard} from "../atoms/infoCard";
import React from "react";

interface showExplanationProps {
    questionType: string
}

export const ShowExplanation = ({questionType}: showExplanationProps) => {

    let heading;
    let text;
    let exampleImage;

    if (questionType === 'likertScale'){
        heading = 'Likert-skala';
        text = 'Likert-skalaen består av 5 knapper fra helt uenig til helt enig. '+
            'Du skal trykke på knappen du mener passer best for deg med utgangspunkt i spørsmålet som står ovenfor. '+
            'Under ser du et eksempel av en person som har svart "Litt enig".';
        exampleImage = 'likertScaleExampleImage';
    } else if (questionType === 'statementOrder') {
        heading = 'Rangering';
        text = 'Rangering består av 3 påstander der du skal rangere disse basert på hvilken du føler passer deg best. '+
            'For å rangere påstandene skal knappene trykkes på. Trykk pil opp for å flytte påstanden opp og pil ned for å flytte den ned. '+
            'Under ser du et eksempel på en besvarelse.';
        exampleImage = 'statementOrderExampleImage';
    } else if (questionType === 'imageSelection') {
        heading = 'Bildevalg';
        text = 'Bildevalg består av 3 bilder der du skal velge det bildet du føler passer deg best. '+
            'Under ser du et eksempel på en besvarelse der personen foretrekker sykkel som transportmiddel.';
        exampleImage='imageSelectionExampleImage';
    } else {
        heading = 'Resultat';
        text = 'Resultatet viser din score for hver avdeling. Du ser en pall med første-, andre- og '+
            'tredjeplass i tillegg til prosentandelen hver avdeling passer deg. Det er også informasjon om hver avdeling '+
            'under pallen der du kan klikke på pilene for å lese om de andre avdelingene';
        exampleImage = 'resultExampleImage';
    }


    return(
        <InfoCard
            heading={heading}
            text={text}
            subHeading='Eksempel:'
            exampleImage={exampleImage}
        />
    );
};