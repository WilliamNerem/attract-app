import { Link } from "react-router-dom";
import { Navbar } from "../components/molecule/navbar";

const Home = () => {
    return (
        <>
            <Navbar/>
            <h1>Forside</h1>
            <Link to="/valgomat" className='start' >START VALGOMAT</Link>
        </>
    )
};

export default Home;