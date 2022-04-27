import {Navbar} from "../components/molecule/navbar";
import {ResetStates} from "../resetStates";
import {InfoCard} from "../components/atoms/infoCard";
import React, {useState} from "react";
import '../styles/info.style.css'
import {Footer} from "../components/molecule/footer";
import Backdrop from "@mui/material/Backdrop";
import {StrategyAndConsultingSubDepartments} from "../components/organisms/strategyAndConsultingSubdepartments";
import {TechnologySubDepartments} from "../components/organisms/technologySubdepartments";
import {InteractiveSubDepartments} from "../components/organisms/interactiveSubdepartments";

const Info = () => {
    const [openSubDep, setOpenSubDep] = useState(false);
    const [classNameSubSC, setClassNameSubSC] = useState('subInfoClosed');
    const [classNameSubTech, setClassNameSubTech] = useState('subInfoClosed');
    const [classNameSubInt, setClassNameSubInt] = useState('subInfoClosed');
    const [wrapperHeight, setWrapperHeight] = useState('auto');
    ResetStates();

    const onButtonClick = (department: string) => {
        if(department === 'Strategy & Consulting') {
            window.scrollTo({top: 0, behavior: "smooth"});
            setOpenSubDep(true);
            setClassNameSubSC('subInfoOpen');
            setTimeout(() => {
                setWrapperHeight('100vh');
            }, 500);
        }
        if(department === 'Interactive') {
            setOpenSubDep(true);
            setClassNameSubInt('subInfoOpen');
            window.scrollTo({top: 0, behavior: "smooth"});
            setTimeout(() => {
                setWrapperHeight('100vh');
            }, 500);
        }
        if(department === 'Technology') {
            setOpenSubDep(true);
            setClassNameSubTech('subInfoOpen');
            window.scrollTo({top: 0, behavior: "smooth"});
            setTimeout(() => {
                setWrapperHeight('100vh');
            }, 500);
        }

    };

    return (
        <>
            <Navbar/>
            <div className='info' data-testid={'infoPage'} style={{height: wrapperHeight}}>
                <div className={classNameSubSC}>
                    <StrategyAndConsultingSubDepartments close={() => {
                        setClassNameSubSC('subInfoClosed');
                        setWrapperHeight('auto');
                        setTimeout(() => {
                            setOpenSubDep(false);
                        }, 300);
                    }}/>
                </div>
                <div className={classNameSubTech}>
                    <TechnologySubDepartments close={() => {
                        setClassNameSubTech('subInfoClosed');
                        setWrapperHeight('auto');
                        setTimeout(() => {
                            setOpenSubDep(false);
                        }, 300);
                    }}/>
                </div>
                <div className={classNameSubInt}>
                    <InteractiveSubDepartments close={() => {
                        setClassNameSubInt('subInfoClosed');
                        setWrapperHeight('auto');
                        setTimeout(() => {
                            setOpenSubDep(false);
                        }, 300);
                    }}/>
                </div>
                <div className='gradientDiv'>
                    <h1 className='infoText'>Accenture sine avdelinger</h1>
                    <p className='infoSubText'>Under finner du informasjon om hvordan Accenture er bygget opp. Trykk på boksene for å få vite mer om hver avdeling</p>
                </div>
                <div className={'info-wrapper'}>
                    <div className='infoCards firstValgomatCard'>
                        <InfoCard heading='Strategy & Consulting' text='I Strategy & Consulting vil du være med på å definere og implementere morgendagens teknologiske
                            løsninger for private- og offentlige aktører, veldedige organisasjoner og startups. Du vil jobbe i store og små
                            prosjektteam hvor man samarbeider på tvers av avdelinger for å løse problemstillinger innenfor et mangfold av
                            industrier. ¤Du vil kunne være med på å skape rammene for hvordan legemidler blir håndtert i offentlig
                            helsesektor, forme retningen for hvordan forbrukere interagerer med nye produkter innen varehandel, eller sette
                            opp et nytt system for hvordan transaksjoner gjennomføres i finansnæring.'
                            linkText='Les mer om Strategy & Consulting her'
                            link='https://www.accenture.com/no-en/about/consulting-index'
                            isDropdown={true}
                            onButtonClick={() => onButtonClick('Strategy & Consulting')}
                        />
                    </div>
                    <div className='infoCards'>
                        <InfoCard heading='Technology' text='I Technology blir du involvert i noen av Norges mest spennende og meningsfylte IT-prosjekter. Sammen
                            med kunden leverer vi innovative løsninger som bidrar til verdiskaping både for bedrifter og samfunnet. Vi
                            satser stort innenfor skyløsninger, digital infrastruktur, digitalisering og prosessautomatisering. Vi arbeider
                            med store plattformer som SAP, Oracle og Salesforce, kombinert med et tydelig fokus på nye områder som
                            kunstig intelligens. ¤Technology hjelper kunden med å avdekke behov, lage funksjonell og teknisk design,
                            bygge og teste løsninger, ofte med bruk av smidig metodikk. Vi har både tekniske og ikke-tekniske roller,
                            der vi jobber med alt fra drag-and-drop og flytdiagrammer til programmering og systemarkitektur. Dette gir
                            en variert hverdag der man får utfordre seg selv både kreativt og profesjonelt, samtidig som man får
                            mulighet til å fordype seg i det man synes er spennende.'
                            linkText='Les mer om Technology her'
                            link='https://www.accenture.com/no-en/about/technology-index'
                            isDropdown={true}
                            onButtonClick={() => onButtonClick('Technology')}
                        />
                    </div>
                    <div className='infoCards'>
                        <InfoCard heading='Interactive' text='Hos Interactive jobber designere og kreatørene. Vi skaper løsninger ved å kombinere kreativitet og fokus på sluttbruker med
                            teknisk innsikt og gjennomføringsevne. Interactive-teamet bruker en kombinasjon av design(tjeneste-, grafisk- og
                            interaksjonsdesign), markedsføring, innhold og forretningsforståelse til å skape innovative og bransjeledende
                            brukeropplevelser. ¤Dette gjøres ved å kombinere den rette kompetansen, sette brukeren i sentrum og sørge for å
                            designe meningsfulle produkter og tjenester, som er med på å endre samfunnet til det bedre.'
                            linkText='Les mer om Interactive her'
                            link='https://www.accenture.com/no-en/about/accenture-interactive-index'
                            isDropdown={true}
                            onButtonClick={() => onButtonClick('Interactive')}
                        />
                    </div>
                </div>
            </div>
            <div className='grayBackgroundInfo'>
                <div className='headingValgomatInfo'>
                    <h1 className='infoText'>Hvordan besvare valgomaten</h1>
                    <p className='infoSubText'>Under finner du informasjon om hvordan du besvarer de ulike spørsmålstypene som blir brukt i valgomaten</p>
                </div>
                <div className={'valgomatInfo-wrapper'}>
                    <div className='infoCards firstValgomatCard'>
                        <InfoCard
                            heading='Likert skala'
                            text={'Likert skalaen består av 5 knapper rangert fra helt uenig til helt enig. '+
                            'Du skal trykke på knappen du mener passer best for deg med utgangspunkt i påstanden som står ovenfor. '+
                            'Under ser du et eksempel på et svar som er "Litt enig".'}
                            exampleImage={'likertScaleExampleImage'}
                            subHeading='Eksempel:'
                            isDropdown={true}
                        />
                    </div>
                    <div className='infoCards'>
                        <InfoCard
                            heading='Rangering'
                            text={'Rangering består av 3 påstander der du skal rangere disse basert på hvilken du føler passer deg best. '+
                            'For å rangere påstandene skal trykker du på pilene ved siden av. Trykk pil opp for å flytte påstanden opp og pil ned for å flytte den ned. '+
                            'Under ser du et eksempel på en besvarelse.'}
                            subHeading='Eksempel:'
                            exampleImage='statementOrderExampleImage'
                            isDropdown={true}
                        />
                    </div>
                    <div className='infoCards'>
                        <InfoCard
                            heading='Bildevalg'
                            text={'Bildevalg består av 3 bilder der du skal velge det bildet du føler passer deg best. '+
                            'Under ser du et eksempel på en besvarelse der personen foretrekker sykkel som transportmiddel.'}
                            subHeading='Eksempel:'
                            exampleImage='imageSelectionExampleImage'
                            isDropdown={true}
                        />
                    </div>
                    <div className='infoCards'>
                        <InfoCard
                            heading='Resultat'
                            text={'Resultatet viser din score for hver avdeling. Du ser en pall med første-, andre- og '+
                            'tredjeplass i tillegg til prosentandelen hver avdeling passer deg. Det er også informasjon om hver avdeling '+
                            'under pallen der du kan klikke på pilene for å lese om de andre avdelingene'}
                            subHeading='Eksempel:'
                            exampleImage='resultExampleImage'
                            isDropdown={true}
                        />
                    </div>
                </div>
                <Footer/>
            </div>
            <Backdrop
                open={openSubDep}
                style={{zIndex: 8}}
            />
        </>
    )
};
export default Info;