import React, {useState} from 'react';
import '../../styles/valgomat.style.css'
import {useDispatch} from "react-redux";
import {actionCreators} from "../../redux";
import {bindActionCreators} from "redux";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";


interface DynamicQuestionProps {
    firstDep: number;
    secondDep: number;
}

export const DynamicQuestion = ({firstDep, secondDep}: DynamicQuestionProps) => {
    const dispatch = useDispatch();
    const { technologyPoints, strategyAndConsultingPoints, interactivePoints, increaseCounter } = bindActionCreators(actionCreators, dispatch);
    const [update, setUpdate] = useState(false);
    const [alert, setAlert] = useState(<></>);

    let statement1 = '';
    let statement2 = '';
    let department1 = '';
    let department2 = '';

    const handleClick = (department: string) => {
        if (department === 'strategyAndConsulting') {
            strategyAndConsultingPoints(1);
        } else if (department === 'technology') {
            technologyPoints(1);
        } else {
            interactivePoints(1);
        }
        increaseCounter();
    };

    const showAlert = (department: string) => {
        setAlert(<div>
            <Dialog
                open={true}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Avslutte valgomaten?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Er du sikker på at du vil fullføre valgomaten?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <a className='alertButton' onClick={() => setAlert(<></>)}>Nei</a>
                    <a className='alertButton' onClick={() => {handleClick(department)}}>Ja</a>
                </DialogActions>
            </Dialog>
        </div>);
        setUpdate(!update);
    };

    if (firstDep + secondDep === 3) { //Then we know it's tech vs interactive
        statement1 = 'Det viktigste for meg er at produktet fungerer godt ved hjelp av en smart teknisk løsning';
        statement2 = 'Det er viktig for meg at et produkt ser bra ut';
        department1 = 'technology';
        department2 = 'interactive';
    } else if (firstDep + secondDep === 2) {
        statement1 = 'Jeg liker business';
        statement2 = 'Jeg liker design';
        department1 = 'strategyAndConsulting';
        department2 = 'interactive';
    } else if (firstDep + secondDep === 1) {
        statement1 = 'Jeg foretrekker å bytte arbeidsmiljø ofte';
        statement2 = 'Jeg jobber gjerne på et prosjekt i lang tid';
        department1 = 'strategyAndConsulting';
        department2 = 'technology';
    }

    return(
        <div className={'dynamicQuestion'}>
            {alert}
            <p className='dynamicQuestionHeader'>Trykk på den påstanden som passer best</p>
            <div className='dynamicButtonDiv'>
                <p className='dynamicText'>{statement1}</p>
                <div className='dynamicButtonWrapper'>
                    <button className='dynamicButton' onClick={() => showAlert(department1)}>VELG</button>
                </div>
            </div>
            <div className='dynamicButtonDiv'>
                <p className='dynamicText'>{statement2}</p>
                <div className='dynamicButtonWrapper'>
                    <button className='dynamicButton' onClick={() => showAlert(department2)}>VELG</button>
                </div>
            </div>
        </div>
    );
};
