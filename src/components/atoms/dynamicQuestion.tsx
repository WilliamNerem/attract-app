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
import {useTranslation} from "react-i18next";


interface DynamicQuestionProps {
    firstDep: number;
    secondDep: number;
}

export const DynamicQuestion = ({firstDep, secondDep}: DynamicQuestionProps) => {
    const dispatch = useDispatch();
    const { technologyPoints, strategyAndConsultingPoints, interactivePoints, increaseCounter } = bindActionCreators(actionCreators, dispatch);
    const [update, setUpdate] = useState(false);
    const [alert, setAlert] = useState(<></>);
    const { t } = useTranslation();

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
                    {t('alertFinishTitle')}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {t('alertFinish')}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <a className='alertButton' onClick={() => setAlert(<></>)}>{t('alertDeny')}</a>
                    <a className='alertButton' onClick={() => {handleClick(department)}}>{t('alertConfirm')}</a>
                </DialogActions>
            </Dialog>
        </div>);
        setUpdate(!update);
    };

    if (firstDep + secondDep === 3) { //Then we know it's tech vs interactive
        statement1 = t('dynamicS1')
        statement2 = t('dynamicS2')
        department1 = 'technology';
        department2 = 'interactive';
    } else if (firstDep + secondDep === 2) {
        statement1 = t('dynamicS3')
        statement2 = t('dynamicS4')
        department1 = 'strategyAndConsulting';
        department2 = 'interactive';
    } else if (firstDep + secondDep === 1) {
        statement1 = t('dynamicS5')
        statement2 = t('dynamicS6')
        department1 = 'strategyAndConsulting';
        department2 = 'technology';
    }

    return(
        <div className={'dynamicQuestion'} data-testid={'dynamicQuestion'}>
            {alert}
            <div className='dynamicButtonDivOne' data-testid={'dynamicQuestionOne'}>
                <p className='dynamicText'>{statement1}</p>
                <div className='dynamicButtonWrapper'>
                    <button className='dynamicButton' onClick={() => showAlert(department1)}>{t('dynamicChoose')}</button>
                </div>
            </div>
            <div className='dynamicButtonDivTwo' data-testid={'dynamicQuestionTwo'}>
                <p className='dynamicText'>{statement2}</p>
                <div className='dynamicButtonWrapper'>
                    <button className='dynamicButton' onClick={() => showAlert(department2)}>{t('dynamicChoose')}</button>
                </div>
            </div>
        </div>
    );
};
