import { Link } from "react-router-dom";
import { Navbar } from "../components/molecule/navbar";
import '../styles/home.style.css';
import { InfoCard } from "../components/atoms/infoCard";
import { ResetStates } from "../resetStates";
import { Footer } from "../components/molecule/footer";
import i18n from '../i18n';
import { useTranslation } from "react-i18next";
import {useState} from "react";

const Home = () => {
    const [locale, setLocale] = useState(i18n.language);
    i18n.on('languageChanged', () => setLocale(i18n.language));
    ResetStates();

  const changeLocale = (l: string) =>  {
        if (locale !== l) {
            i18n.changeLanguage(l);
        }
    }
    const { t } = useTranslation();
    return (
        <>
            <Navbar/>
            <div className='home'>
                <div className='imageDiv'>
                    <button onClick={() => changeLocale('en')}>English </button>
                    <button onClick={() => changeLocale('no')}>Norsk </button>
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
                        heading={t('heading')}
                        text={t('aboutValgomat')}
                        subText={t('aboutValgomatSubText')}
                        linkText={t('linkTextValgomat')}
                        link={'/info'}
                        singlePageLink={true}
                    />
                </div>
                <div className='infoCards'>
                    <InfoCard
                        heading={t('headingContact')}
                        text={t('headingSoMe')}
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