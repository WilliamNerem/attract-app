import { Link } from "react-router-dom";
import { Navbar } from "../components/molecule/navbar";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators, State} from "../redux";

const Home = () => {
    const dispatch = useDispatch();
    const { resetCounter } = bindActionCreators(actionCreators, dispatch);
    const counter = useSelector((state: State) => state.questionCounter);
    if (counter != 1) { resetCounter() }
    return (
        <>
            <Navbar/>
            <h1>Forside</h1>
            <Link to="/valgomat" className='start' >START VALGOMAT</Link>
        </>
    )
};

export default Home;