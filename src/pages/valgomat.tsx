import { Navbar } from "../components/molecule/navbar";
import { ProgressBar } from "../components/atoms/progressbar";
import { Questions } from "../components/atoms/questions";
import { ValgomatButton } from "../components/atoms/valgomatButton";
import {useState} from "react";


const Valgomat = () => {
    const [counter, setCounter] = useState(1);

    const increaseCounter = () => {
        setCounter(counter+1);
    }
    const decreaseCounter = () => {
        setCounter(counter-1);
    }
        if(counter == 1) {
            return (
                <>
                    <Navbar/>
                    <Questions questionNumber={1} questionTxt={"Dette er et kjempegodt spm!"}/>
                    <ValgomatButton increaseCounter={increaseCounter} decreaseCounter={decreaseCounter}/>
                    <ProgressBar completed={50}/>
                </>
            );
        } else {
            return (
                <>
                    <Navbar/>
                    <Questions questionNumber={2} questionTxt={"Dette er et kjempegodt spm også!!!"}/>
                    <ValgomatButton increaseCounter={increaseCounter} decreaseCounter={decreaseCounter}/>
                    <ProgressBar completed={100}/>
                </>
            );
        }}



export default Valgomat;