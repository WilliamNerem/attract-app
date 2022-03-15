import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../redux";
import '../../styles/alertDialogFunction.style.css';
import {Button} from "@mui/material";
import {Result} from "../organisms/result";
import {useState} from "react";

interface alertDialogProps {
    end : boolean
    totalPointsArray : number[]
}

export const AlertDialog = ({
    end,
    totalPointsArray
}: alertDialogProps) => {
    const pointsArray = totalPointsArray;
    const dispatch = useDispatch();
    const {increaseCounter, decreaseCounter} = bindActionCreators(actionCreators, dispatch);
    const [update, setUpdate] = useState(false);

    const handleClose = () => {
        increaseCounter();
    };

    const handleDecrease = () => {
        decreaseCounter();
    }

    if(update) {
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
                        <Button className='alertButton' onClick={() => handleDecrease()}>Nei</Button>
                        <Button className='alertButton' onClick={() => {setUpdate(true)}}>Ja</Button>
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
}
