import { Link } from "react-router-dom";
import { Navbar } from "../components/molecule/navbar";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators, State} from "../redux";
import '../styles/home.style.css';
import {InfoCard} from "../components/atoms/infoCard";

const Home = () => {
    const dispatch = useDispatch();
    const { resetCounter } = bindActionCreators(actionCreators, dispatch);
    const counter = useSelector((state: State) => state.questionCounter);
    if (counter != 1) { resetCounter() }
    return (
        <>
            <Navbar/>
            <div className='home'>
                <div className='imageDiv'>
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