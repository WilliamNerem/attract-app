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
    backToResult,
    totalPointsArray,
    setIsDepClicked,
    setBackToResult,
    currentDep
}: alertDialogProps) => {
    const pointsArray = totalPointsArray;
    const dispatch = useDispatch();
    const {increaseCounter, decreaseCounter, showAlertDialog, increaseCounterPartTwo, resetStratSubDivision, resetIntSubDivision, subValgomatIsInProgress, setCounterPartTwo, isInfoClicked} = bindActionCreators(actionCreators, dispatch);
    const [update, setUpdate] = useState(false);
    const counter = useSelector((state: State) => state.questionCounter);
    const counterPartTwo = useSelector((state: State) => state.questionCounterPartTwo);
    const isInfo = useSelector((state: State) => state.isInfoClicked);
    const subValgomatInProgress = useSelector((state: State) => state.subValgomatInProgress);
    const isShowAlertDialog = useSelector((state: State) => state.showAlertDialog);
    const { t } = useTranslation();

    const handleClose = () => {
        if (counter === 0) {
            increaseCounter();
        } else if(counterPartTwo === 0) {
            increaseCounterPartTwo();
        }
        isInfoClicked(false);
        showAlertDialog(false);
        if (setBackToResult) {
            setBackToResult(false);
        }
    };

    const handleDecrease = () => {
        if (counterPartTwo !== 0){
            decreaseCounter();
        } else {
            increaseCounterPartTwo();
        }
    };

    if(update && pointsArray !== undefined) {
        if (counterPartTwo === 0 && setIsDepClicked){
            increaseCounterPartTwo();
            setIsDepClicked({ strat: false, interactive: false, tech: false})
        }
        return (
            <Result totalPointsArray={pointsArray}/>
        )
    }

    const handleBackToResult = () => {
        if (counterPartTwo === 0 && setIsDepClicked){
            increaseCounterPartTwo();
            if (currentDep === 'strat') {
                resetStratSubDivision();
            } else if (currentDep === 'int') {
                resetIntSubDivision();
            } else if (currentDep === 'tech') {
                console.log('add reset tech states here');
            }
            subValgomatIsInProgress(false);
            setIsDepClicked({ strat: false, interactive: false, tech: false})
        } else if (subValgomatInProgress && isShowAlertDialog) {
            setCounterPartTwo(1);
            subValgomatIsInProgress(false);
        } else if (setBackToResult) {
            setCounterPartTwo(1);
            setBackToResult(false);
            subValgomatIsInProgress(false);
            if (setIsDepClicked) {
                setIsDepClicked({strat: false, interactive: false, tech: false})
            }
        }
    };

    if(backToResult) {
        return (
            <div data-testid={'endAlertDialog'}>
                <Dialog
                    open={true}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {t('alertBackTitle')}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description" data-testid={'backToResultAlertDialogText'}>
                            {t('alertBack')}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <a data-testid={'noButton'} className='alertButton' onClick={() => handleClose()} tabIndex={0}>{t('alertDeny')}</a>
                        <a data-testid={'yesButton'} className='alertButton' onClick={() => {handleBackToResult()}} tabIndex={0}>{t('alertConfirm')}</a>
                    </DialogActions>
                </Dialog>
            </div>
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
                        <a data-testid={'noButton'} className='alertButton' onClick={() => handleDecrease()} tabIndex={0}>{t('alertDeny')}</a>
                        <a data-testid={'yesButton'} className='alertButton' onClick={() => {setUpdate(true)}} tabIndex={0}>{t('alertConfirm')}</a>
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
                        <a data-testid={'noButton'} className='alertButton' onClick={handleClose}>{t('alertDeny')}</a>
                        {isInfo ? <Link data-testid={'yesButton'} className='alertButton' to='/info'>Ja</Link> : <a className='alertButton' href='/'>{t('alertConfirm')}</a>}
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
};
