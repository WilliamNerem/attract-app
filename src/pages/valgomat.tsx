import { Navbar } from "../components/molecule/navbar";
import { LikertScale } from "../components/atoms/likertScale";

const valgomat = () => {
    return (
        <>
            <Navbar/>
            <h1>VALGOMAT!!</h1>
            <LikertScale storageKey='Q1'/>
        </>
    );
};

export default valgomat;