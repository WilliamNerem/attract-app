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

export const AlertDialog = () => {
    const dispatch = useDispatch();
    const {increaseCounter} = bindActionCreators(actionCreators, dispatch);

    const handleClose = () => {
        increaseCounter();
    };

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
};
