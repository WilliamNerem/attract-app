import { Navbar } from "../components/molecule/navbar";
import { ProgressBar } from "../components/atoms/progressbar";

const valgomat = () => {
    return (
        <>
            <Navbar/>
            <h1>VALGOMAT!!</h1>
            <ProgressBar completed={50}/>
        </>
    );
};

export default valgomat;