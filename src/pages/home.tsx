import {Link, Outlet} from "react-router-dom";

const Home = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/valgomat" className="btn btn-primary">til valgomat</Link>
                    </li>
                    <li>
                        <Link to="/" className="btn btn-primary">gå tilbake til forsiden</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
            <h1>Forside</h1>
            <Link to="/valgomat" className="btn btn-primary">START VALGOMAT</Link>
        </>
    )
};

export default Home;