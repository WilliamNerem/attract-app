import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators, State} from "../../redux";
import '../../styles/alertDialogFunction.style.css';
import {Result} from "../organisms/result";
import {useState} from "react";

interface alertDialogProps {
    end : boolean
    totalPointsArray ?: number[]
}

export const AlertDialog = ({
    end,
    totalPointsArray
}: alertDialogProps) => {
    const pointsArray = totalPointsArray;
    const dispatch = useDispatch();
    const {increaseCounter, decreaseCounter, showAlertDialog} = bindActionCreators(actionCreators, dispatch);
    const [update, setUpdate] = useState(false);
    const counter = useSelector((state: State) => state.questionCounter);

    const handleClose = () => {
        if (counter === 0) {
            increaseCounter();
        }
        showAlertDialog(false);
    };

    const handleDecrease = () => {
        decreaseCounter();
    };

    if(update && pointsArray !== undefined) {
        return (
            <Result totalPointsArray={pointsArray}/>
        )
    }

    if (end) {
        return (
            <div>
                <Dialog
                    open={true}
                    onClose={handleClose}
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
                        <Link className='alertButton' onClick={() => handleDecrease()} to={''}>Nei</Link>
                        <Link className='alertButton' onClick={() => {setUpdate(true)}} to={''}>Ja</Link>
                    </DialogActions>
                </Dialog>
            </div>
        )
    } else {
        return (
            <div>
                <Dialog
                    open={true}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Avslutte valgomaten?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Er du sikker på at du vil avslutte valgomaten?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Link className='alertButton' to='.' onClick={handleClose}>Nei</Link>
                        <Link className='alertButton' to="/">
                            Ja
                        </Link>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
};
