import { Link } from "react-router-dom";
import { Navbar } from "../components/molecule/navbar";
import '../styles/home.style.css';
import { InfoCard } from "../components/atoms/infoCard";
import { ResetStates } from "../resetStates";
import { Footer } from "../components/molecule/footer";
import { useTranslation } from "react-i18next";

const Home = () => {
    ResetStates();
    const { t } = useTranslation();
    return (
        <>
            <Navbar/>
            <div className='home'>
                <div className='imageDiv'>
                    <h1 className='headerHome'>{t('headerHome')}</h1>
                    <div className='startWrapper'>
                        <Link to="/valgomat" className='start' >{t('start')}</Link>
                    </div>
                </div>
                <InfoCard
                    heading={'Accenture'}
                    subHeading={t('subHeading')}
                    text={t('aboutText')}
                    subText={t('aboutSubText')}
                    link={'https://www.accenture.com/no-en/about/company-index'}
                    linkText={t('linkText')}
                />
                <div className='infoCards'>
                    <InfoCard
                        heading={'Valgomat'}
                        text={t('aboutValgomat')}
                        subText={t('aboutValgomatSubText')}
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