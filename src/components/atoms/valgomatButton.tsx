import React, {useState} from 'react';
import '../../styles/valgomatButton.style.css'
import {useSelector} from "react-redux";
import {State} from "../../redux";
import {useTranslation} from "react-i18next";

interface valgomatButtonProps {
    nextTransition: Function
}

export const ValgomatButton = ({nextTransition}: valgomatButtonProps) => {
    const { t } = useTranslation();
    const counter = useSelector((state: State) => state.questionCounter);
    const [disableButton, setDisableButton] = useState(false);
    let lastText = t('valgomatButtonPrevious');
    if (counter === 1){
        lastText = t('valgomatButtonHome');
    }

    const next = () => {
        if (!disableButton){
            nextTransition(true);
            setDisableButton(true);
            setTimeout((() => {
                setDisableButton(false);
            }), 250);
        }
    };

    const last = () => {
        if (!disableButton){
            nextTransition(false);
            setDisableButton(true);
            setTimeout((() => {
                setDisableButton(false);
            }), 250);
        }
    };

    return (
        <div className="valgomatButtons">
            <button className='valgomatButton' onClick={last}>{lastText}</button>
            <button className='valgomatButton' onClick={next}>{t('valgomatButtonNext')}</button>
        </div>
    );


};
