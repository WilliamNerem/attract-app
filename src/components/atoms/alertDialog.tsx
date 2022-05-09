import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators, State} from "../../redux";
import '../../styles/alertDialogFunction.style.css';
import {Result} from "../organisms/result";
import {useState} from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
interface alertDialogProps {
    end : boolean
    backToResult ?: boolean
    totalPointsArray ?: number[]
    setIsDepClicked ?: React.Dispatch<React.SetStateAction<{ strat: boolean; interactive: boolean; tech: boolean; }>>
    setBackToResult ?: React.Dispatch<React.SetStateAction<boolean>>;
    currentDep ?: string
}

export const AlertDialog = ({
    end,
    totalPointsArray,
    setIsDepClicked,
    setBackToResult
}: alertDialogProps) => {
    const pointsArray = totalPointsArray;
    const dispatch = useDispatch();
    const {increaseCounter, decreaseCounter, showAlertDialog, isInfoClicked} = bindActionCreators(actionCreators, dispatch);
    const [update, setUpdate] = useState(false);
    const counter = useSelector((state: State) => state.questionCounter);
    const isInfo = useSelector((state: State) => state.isInfoClicked);
    const { t } = useTranslation();

    const handleClose = () => {
        if (counter === 0) {
            increaseCounter();
        }
        isInfoClicked(false);
        showAlertDialog(false);
        if (setBackToResult) {
            setBackToResult(false);
        }
    };

    const handleDecrease = () => {
        decreaseCounter();
    };

    if(update && pointsArray !== undefined) {
        if (setIsDepClicked){
            setIsDepClicked({ strat: false, interactive: false, tech: false})
        }
        return (
            <Result totalPointsArray={pointsArray}/>
        )
    }

    if (end) {
        return (
            <div data-testid={'endAlertDialog'}>
                <Dialog
                    open={true}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {t('alertFinishTitle')}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description" data-testid={'endDialogText'}>
                            {t('alertFinish')}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <a
                            data-testid={'noButton'}
                            className='alertButton'
                            onClick={() => handleDecrease()}
                            onKeyPress={() => handleDecrease()}
                            tabIndex={0}
                        >{t('alertDeny')}</a>
                        <a
                            data-testid={'yesButton'}
                            className='alertButton'
                            onClick={() => {setUpdate(true)}}
                            onKeyPress={() => setUpdate(true)}
                            tabIndex={0}
                        >{t('alertConfirm')}</a>
                    </DialogActions>
                </Dialog>
            </div>
        )
    } else {
        return (
            <div data-testid={'progressAlertDialog'}>
                <Dialog
                    open={true}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {t('alertQuitTitle')}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description" data-testid={'progressDialogText'}>
                            {t('alertQuit')}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <a data-testid={'noButton'} className='alertButton' onClick={handleClose} onKeyPress={handleClose} tabIndex={0}>{t('alertDeny')}</a>
                        {isInfo ? <Link data-testid={'yesButton'} className='alertButton' to='/info'>Ja</Link> : <a className='alertButton' href='/'>{t('alertConfirm')}</a>}
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
};
