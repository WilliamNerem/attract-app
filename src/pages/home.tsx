import { Link } from "react-router-dom";
import { Navbar } from "../components/molecule/navbar";
import '../styles/home.style.css';
import { InfoCard } from "../components/atoms/infoCard";
import { ResetStates } from "../resetStates";
import {Footer} from "../components/molecule/footer";

const Home = () => {
    ResetStates();

    const aboutText = 'Vårt formål er å innfri løftet om teknologi og menneskelig oppfinnsomhet. ' +
        'Vi hjelper våre kunder å bli den neste og beste versjonen av seg selv.';
    const aboutSubText = 'Vi har ca 700 000 ansatte globalt, med 200 byer over 50 land med Accenture kontorer. ' +
        'I tillegg har vi rundt 7000 kunder i mer enn 120 land.';
    const aboutValgomat = 'I denne valgomaten får du mulighet til å svare på noen spørsmål om deg og dine interesser, ' +
        'slik at du får et forslag til hvilken avdeling hos Accenture som passer for deg. Her får du lære ' +
        'mer om de mulighetene som finnes for deg hos Accenture som arbeidsgiver.';
    const aboutValgomatSubText = 'Valgomaten består av en rekke spørsmål om deg, din personlighet og dine ' +
        'interesser. Den tar ca. 5 minutter å besvare, og til slutt vil du bli presentert resultatet i form av ' +
        'en pallplassering med en prosentgivning av hvor godt du matcher med hver avdeling.';

    return (
        <>
            <Navbar/>
            <div className='home'>
                <div className='imageDiv'>
                    <h1 className='headerHome'>Finn ut hvor i Accenture du passer best inn</h1>
                    <div className='startWrapper'>
                        <Link to="/valgomat" className='start' >START VALGOMAT</Link>
                    </div>
                </div>
                <InfoCard
                    heading={'Accenture'}
                    subHeading={'Vi er et globalt team'}
                    text={aboutText}
                    subText={aboutSubText}
                    link={'https://www.accenture.com/no-en/about/company-index'}
                    linkText={'Les mer om Accenture her'}
                />
                <div className='infoCards'>
                    <InfoCard
                        heading={'Valgomat'}
                        text={aboutValgomat}
                        subText={aboutValgomatSubText}
                        linkText={'Les mer om hvordan valgomaten fungerer her'}
                        link={'/info'}
                        singlePageLink={true}
                    />
                </div>
                <div className='infoCards'>
                    <InfoCard
                        heading={'Kontakt'}
                        text={'Følg våre sosiale medier:'}
                        link={'https://www.linkedin.com/company/accenture-nordics/'}
                        linkText={'Linkedin'}
                    />
                </div>
            </div>
            <div className='bottomSpace'/>
            <Footer/>
        </>
    )
};

export default Home;