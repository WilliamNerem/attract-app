import React from 'react';
import '../../styles/likertScale.style.css'
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators, State} from "../../redux";

interface likertScaleProps {
    questionNumber: number
    characteristic: Function
    isReversed: boolean
}

export const LikertScale = ({questionNumber, characteristic, isReversed}: likertScaleProps) => {
    const likertState = useSelector((state: State) => state.likertAnswer);
    const dispatch = useDispatch();
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

    if(questionNumber % 2 !== 0) {
    return(
            <div className='likert' data-testid={'likertScale'}>
                <div className="likertScale">
                    <label className='likertLabel' htmlFor="stronglyDisagree"/>
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

                    <label className='likertLabel' htmlFor="moderatelyDisagree"/>
                    <input
                        id="moderatelyDisagree"
                        className='likertInput'
                        name="radio"
                        type="radio"
                        value='2'
                        checked={handleChecked(2)}
                        onChange={() => handleChange(moderatlyDisagree)}
                    />
                    <label className='likertLabel' htmlFor="neutral"/>
                    <input
                        id="neutral"
                        className='likertInput'
                        name="radio"
                        type="radio"
                        value='3'
                        checked={handleDefaultCheked(3)}
                        onChange={() => handleChange(neutral)}
                    />
                    <label className='likertLabel' htmlFor="moderatelyAgree"/>
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
                    <label className='likertLabel' htmlFor="stronglyAgree"/>
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
                    <p className='text'>Helt uenig</p>
                    <div className='textDivider'/>
                    <p className='text'>Nøytral</p>
                    <div className='textDivider'/>
                    <p className='text'>Helt enig</p>
                </div>
            </div>
        );
    }
    else {
        return(
                <div className='likert'>
                    <div className="likertScale">
                        <label className='likertLabel' htmlFor="stronglyDisagree"/>
                        <input
                            id="stronglyDisagree"
                            className='likertInput'
                            name="radio"
                            type="radio"
                            value='1'
                            checked={handleChecked(1)}
                            onChange={() => handleChange(stronglyDisagree)}
                        />

                        <label className='likertLabel' htmlFor="moderatelyDisagree"/>
                        <input
                            id="moderatelyDisagree"
                            className='likertInput'
                            name="radio"
                            type="radio"
                            value='2'
                            checked={handleChecked(2)}
                            onChange={() => handleChange(moderatlyDisagree)}
                        />
                        <label className='likertLabel' htmlFor="neutral"/>
                        <input
                            id="neutral"
                            className='likertInput'
                            name="radio"
                            type="radio"
                            value='3'
                            checked={handleDefaultCheked(3)}
                            onChange={() => handleChange(neutral)}
                        />
                        <label className='likertLabel' htmlFor="moderatelyAgree"/>
                        <input
                            id="moderatelyAgree"
                            className='likertInput'
                            name="radio"
                            type="radio"
                            value='4'
                            checked={handleChecked(4)}
                            onChange={() => handleChange(moderatlyAgree)}
                        />
                        <label className='likertLabel' htmlFor="stronglyAgree"/>
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
                        <p className='text'>Helt uenig</p>
                        <div className='textDivider'/>
                        <p className='text'>Nøytral</p>
                        <div className='textDivider'/>
                        <p className='text'>Helt enig</p>
                    </div>
                </div>
        )
    }
};