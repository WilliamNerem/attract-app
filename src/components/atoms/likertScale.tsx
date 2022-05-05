import React from 'react';
import '../../styles/likertScale.style.css'
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators, State} from "../../redux";
import {useTranslation} from "react-i18next";

interface likertScaleProps {
    questionNumber: number
    characteristic: Function
    isReversed: boolean
}

export const LikertScale = ({questionNumber, characteristic, isReversed}: likertScaleProps) => {
    const likertState = useSelector((state: State) => state.likertAnswer);
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const {
        stronglyDisagree,
        moderatlyDisagree,
        neutral,
        moderatlyAgree,
        stronglyAgree,
    } = bindActionCreators(actionCreators, dispatch);

    const handleChange = (answer: Function) => {
        const lastChecked = likertState[questionNumber-1];
        answer(questionNumber);
        const currChecked = likertState[questionNumber-1];
        characteristic(-(lastChecked-3), isReversed);
        characteristic(currChecked-3, isReversed);
    };

    const handleChecked = (radioValue: number) => {
        return radioValue == likertState[questionNumber-1];
    };

    const handleDefaultCheked = (radioValue: number) => {
        if (likertState.length < questionNumber){
            neutral(questionNumber);
            return true
        } else {
            return handleChecked(radioValue)
        }
    };

    // Function for key press down for tab index
    // const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>, answer: Function, radioValue: number) => {
    //     if (e.key === "Enter" || e.key === "Space") {
    //         const lastChecked = likertState[questionNumber-1];
    //         answer(questionNumber);
    //         const currChecked = likertState[questionNumber-1];
    //         characteristic(-(lastChecked-3), isReversed);
    //         characteristic(currChecked-3, isReversed);
    //     }
    // };

    // const handleKeyPressChange = (e: React.KeyboardEvent<HTMLInputElement>, radioValue: number) => {
    //     if (e.key === "Enter" || e.key === "Space") {
    //         return radioValue == likertState[questionNumber-1];
    //     }
    // };

    if(questionNumber % 2 !== 0) {
    return(
            <div className='likert' data-testid={'likertScale'}>
                <div className="likertScale">
                    <label className='likertLabel' htmlFor="stronglyDisagree" tabIndex={0}/>
                    <input
                        id="stronglyDisagree"
                        className='likertInput'
                        name="radio"
                        type="radio"
                        value='1'
                        checked={handleChecked(1)}
                        onChange={() => handleChange(stronglyDisagree)}
                        data-testid={'likertScaleStronglyDisagree'}
                    />

                    <label className='likertLabel' htmlFor="moderatelyDisagree" tabIndex={0}/>
                    <input
                        id="moderatelyDisagree"
                        className='likertInput'
                        name="radio"
                        type="radio"
                        value='2'
                        checked={handleChecked(2)}
                        onChange={() => handleChange(moderatlyDisagree)}
                    />
                    <label className='likertLabel' htmlFor="neutral" tabIndex={0}/>
                    <input
                        id="neutral"
                        className='likertInput'
                        name="radio"
                        type="radio"
                        value='3'
                        checked={handleDefaultCheked(3)}
                        onChange={() => handleChange(neutral)}
                    />
                    <label className='likertLabel' htmlFor="moderatelyAgree" tabIndex={0}/>
                    <input
                        id="moderatelyAgree"
                        className='likertInput'
                        name="radio"
                        type="radio"
                        value='4'
                        checked={handleChecked(4)}
                        onChange={() => handleChange(moderatlyAgree)}
                        data-testid={'likertScaleModeratelyAgree'}
                    />
                    <label className='likertLabel' htmlFor="stronglyAgree" tabIndex={0}/>
                    <input
                        id="stronglyAgree"
                        className='likertInput'
                        name="radio"
                        type="radio"
                        value='5'
                        checked={handleChecked(5)}
                        onChange={() => handleChange(stronglyAgree)}
                    />
                    <span id="slider"/>
                </div>
                <div className='likertText'>
                    <p className='text'>{t('likertDisagree')}</p>
                    <div className='textDivider'/>
                    <p className='text'>{t('likertNeutral')}</p>
                    <div className='textDivider'/>
                    <p className='text'>{t('likertAgree')}</p>
                </div>
            </div>
        );
    }
    else {
        return(
                <div className='likert'>
                    <div className="likertScale">
                        <label className='likertLabel' htmlFor="stronglyDisagree" tabIndex={0}/>
                        <input
                            id="stronglyDisagree"
                            className='likertInput'
                            name="radio"
                            type="radio"
                            value='1'
                            checked={handleChecked(1)}
                            onChange={() => handleChange(stronglyDisagree)}
                        />

                        <label className='likertLabel' htmlFor="moderatelyDisagree" tabIndex={0}/>
                        <input
                            id="moderatelyDisagree"
                            className='likertInput'
                            name="radio"
                            type="radio"
                            value='2'
                            checked={handleChecked(2)}
                            onChange={() => handleChange(moderatlyDisagree)}
                        />
                        <label className='likertLabel' htmlFor="neutral" tabIndex={0}/>
                        <input
                            id="neutral"
                            className='likertInput'
                            name="radio"
                            type="radio"
                            value='3'
                            checked={handleDefaultCheked(3)}
                            onChange={() => handleChange(neutral)}
                        />
                        <label className='likertLabel' htmlFor="moderatelyAgree" tabIndex={0}/>
                        <input
                            id="moderatelyAgree"
                            className='likertInput'
                            name="radio"
                            type="radio"
                            value='4'
                            checked={handleChecked(4)}
                            onChange={() => handleChange(moderatlyAgree)}
                        />
                        <label className='likertLabel' htmlFor="stronglyAgree" tabIndex={0}/>
                        <input
                            id="stronglyAgree"
                            className='likertInput'
                            name="radio"
                            type="radio"
                            value='5'
                            checked={handleChecked(5)}
                            onChange={() => handleChange(stronglyAgree)}
                        />
                        <span id="slider"/>
                    </div>
                    <div className='likertText'>
                        <p className='text'>{t('likertDisagree')}</p>
                        <div className='textDivider'/>
                        <p className='text'>{t('likertNeutral')}</p>
                        <div className='textDivider'/>
                        <p className='text'>{t('likertAgree')}</p>
                    </div>
                </div>
        )
    }
};