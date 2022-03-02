import { Link } from "react-router-dom";
import { Navbar } from "../components/molecule/navbar";
import '../styles/home.style.css';
import { InfoCard } from "../components/atoms/infoCard";
import { ResetStates } from "../resetStates";

const Home = () => {
    ResetStates();

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
                <InfoCard heading='Accenture' text='infotext'/>
                <div className='infoCards'>
                    <InfoCard heading='Valgomat' text='infotext'/>
                </div>
                <div className='infoCards'>
                    <InfoCard heading='Kontakt' text='infotext'/>
                </div>
                <div className='infoCards'>
                    <InfoCard heading='Test' text='infotext'/>
                </div>
            </div>
        </>
    )
};

export default Home;