import { Link } from "react-router-dom";
import { Navbar } from "../components/molecule/navbar";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from '../redux'

const Home = () => {

    const dispatch = useDispatch();
    const { increaseCounter, decreaseCounter } = bindActionCreators(actionCreators, dispatch);
    const counter = useSelector((state: State) => state.questionCounter);

    return (
        <>
            <Navbar/>
            <h1>Count is: {counter}</h1>
            <Link to="/valgomat" className='start' >START VALGOMAT</Link>
            <button onClick={() => increaseCounter()}>Increase</button>
            <button onClick={() => decreaseCounter()}>Decrease</button>
        </>
    )
};

export default Home;