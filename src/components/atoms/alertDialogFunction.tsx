import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Link} from "react-router-dom";

interface Props {
    increaseCounter: any,
}

export const AlertDialog = ({
    increaseCounter
}: Props) => {
    const [open, setOpen] = React.useState(true);


    const handleClose = () => {
        setOpen(false);
        increaseCounter();
    };

    return (
        <div>
            <Dialog
                open={open}
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
                    <Button onClick={handleClose}>Nei</Button>
                    <Link to="/">
                        Ja
                    </Link>
                </DialogActions>
            </Dialog>
        </div>
    );
}
