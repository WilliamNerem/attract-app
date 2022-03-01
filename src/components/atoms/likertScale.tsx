import React from 'react';
import '../../styles/likertScale.style.css'
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators, AlgorithmActionType, State} from "../../redux";

interface likertScaleProps {
    questionNumber: number
    characteristic: string
}

export const LikertScale = ({questionNumber, characteristic}: likertScaleProps) => {

    const likertState = useSelector((state: State) => state.likertAnswer);
    const dispatch = useDispatch();
    const { stronglyDisagree, moderatlyDisagree, neutral, moderatlyAgree, stronglyAgree, social, creative, practical } = bindActionCreators(actionCreators, dispatch);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value: number = +e.target.value;
        const lastChecked = likertState[questionNumber-1];
        if (value === 1) {
            stronglyDisagree(questionNumber)
        } else if (value === 2) {
            moderatlyDisagree(questionNumber)
        } else if (value === 3) {
            neutral(questionNumber)
        } else if (value === 4) {
            moderatlyAgree(questionNumber)
        } else {
            stronglyAgree(questionNumber)
        }

        if (characteristic == AlgorithmActionType.SOCIAL){
            social(-(lastChecked-3));
            social(value-3)
        } else if (characteristic == AlgorithmActionType.CREATIVE){
            creative(-(lastChecked-3));
            creative(value-3)
        } else {
            practical(-(lastChecked-3));
            practical(value-3)
        }
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

    return(
        <div>
            <div className="likertScale">
                <label className='likertLabel' htmlFor="stronglyDisagree"/>
                <input
                    id="stronglyDisagree"
                    className='likertInput'
                    name="radio"
                    type="radio"
                    value='1'
                    checked={handleChecked(1)}
                    onChange={handleChange}
                />

                <label className='likertLabel' htmlFor="moderatelyDisagree"/>
                <input
                    id="moderatelyDisagree"
                    className='likertInput'
                    name="radio"
                    type="radio"
                    value='2'
                    checked={handleChecked(2)}
                    onChange={handleChange}
                />
                <label className='likertLabel' htmlFor="neutral"/>
                <input
                    id="neutral"
                    className='likertInput'
                    name="radio"
                    type="radio"
                    value='3'
                    checked={handleDefaultCheked(3)}
                    onChange={handleChange}
                />
                <label className='likertLabel' htmlFor="moderatelyAgree"/>
                <input
                    id="moderatelyAgree"
                    className='likertInput'
                    name="radio"
                    type="radio"
                    value='4'
                    checked={handleChecked(4)}
                    onChange={handleChange}
                />
                <label className='likertLabel' htmlFor="stronglyAgree"/>
                <input
                    id="stronglyAgree"
                    className='likertInput'
                    name="radio"
                    type="radio"
                    value='5'
                    checked={handleChecked(5)}
                    onChange={handleChange}
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
};