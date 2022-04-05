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
        heading = 'Likert skala';
        text = 'Likert skalaen består av 5 knapper fra helt uenig til helt enig. '+
            'Du skal trykke på knappen du mener passer best for deg med utgangspunkt i spørsmålet som står ovenfor. '+
            'Under ser du et eksempel av en person som har svart "Litt enig".';
        exampleImage = 'likertScaleExampleImage';
    } else if (questionType === 'statementOrder') {
        heading = 'Rekkefølge';
        text = 'Rekkefølgen består av 3 påstander der du skal rangere disse basert på hvilken du føler passer deg mest. '+
            'For å rangere påstandene skal knappene trykkes på. Trykk pil opp for å flytte påstanden opp og pil ned for å flytte den ned. '+
            'Under ser du et eksempel på en besvarelse.';
        exampleImage = 'statementOrderExampleImage';
    } else {
        heading = 'Bildevalg';
        text = 'Bildevalg består av 3 bilder der du skal velge det bildet du føler passer deg mest. '+
            'Under ser du et eksempel på en besvarelse der personen foretrekker sykkel som transportmiddel.';
        exampleImage='imageSelectionExampleImage';
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