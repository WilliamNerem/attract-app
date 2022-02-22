import {Link} from "react-router-dom";

const valgomat = () => {
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
            <h1>VALGOMAT!!</h1>
        </>
    );
};

export default valgomat;