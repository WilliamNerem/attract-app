import { Link } from "react-router-dom";
import { Navbar } from "../components/molecule/navbar";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../redux";

const Home = () => {
    const dispatch = useDispatch();
    const { resetCounter } = bindActionCreators(actionCreators, dispatch);
    return (
        <>
            <Navbar/>
            <h1>Forside</h1>
            <Link to="/valgomat" className='start' >START VALGOMAT</Link>
        </>
    )
};

export default Home;