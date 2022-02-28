import { Navbar } from "../components/molecule/navbar";
import { ProgressBar } from "../components/atoms/progressbar";
import { Questions } from "../components/atoms/questions";
import { ValgomatButton } from "../components/atoms/valgomatButton";
import { useSelector } from "react-redux";
import { State } from "../redux";

const Valgomat = () => {
    const counter = useSelector((state: State) => state.questionCounter);

    if(counter == 1) {
        return (
            <>
                <Navbar/>
                <Questions questionNumber={1} questionTxt={"Dette er et kjempegodt spm!"}/>
                <ValgomatButton />
                <ProgressBar completed={50}/>
            </>
        );
    } else {
        return (
            <>
                <Navbar/>
                <Questions questionNumber={2} questionTxt={"Dette er et kjempegodt spm også!!!"}/>
                <ValgomatButton />
                <ProgressBar completed={100}/>
            </>
        );
    }};

export default Valgomat;