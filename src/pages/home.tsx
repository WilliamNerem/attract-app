import { Link } from "react-router-dom";
import { Navbar } from "../components/molecule/navbar";
import '../styles/home.style.css';
import { InfoCard } from "../components/atoms/infoCard";
import { ResetStates } from "../resetStates";
import { Footer } from "../components/molecule/footer";
import { useTranslation } from "react-i18next";

const Home = () => {
    ResetStates();
    window.scrollTo({top: 0});
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
                <div className='infoCards firstValgomatCard'>
                    <InfoCard
                        heading={'Accenture'}
                        subHeading={t('subHeading')}
                        text={t('aboutText')}
                        subText={t('aboutSubText')}
                        link={'https://www.accenture.com/no-en/about/company-index'}
                        linkText={t('linkText')}
                    />
                </div>
                <div className='infoCards'>
                    <InfoCard
                        heading={t('headingImageCard')}
                        text={t('aboutImageCard')}
                        exampleImage={'homePageImage'}
                    />
                </div>
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
            </div>
            <div className='bottomSpace'/>
            <Footer/>
        </>
    )
};

export default Home;