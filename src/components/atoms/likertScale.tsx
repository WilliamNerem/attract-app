import React from 'react';
import '../../styles/likertScale.style.css'
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators, State} from "../../redux";

interface likertScaleProps {
    questionNumber: number
}

export const LikertScale = ({questionNumber}: likertScaleProps) => {

    const state = useSelector((state: State) => state.likertAnswer);
    const dispatch = useDispatch();
    const { stronglyDisagree, moderatlyDisagree, neutral, moderatlyAgree, stronglyAgree } = bindActionCreators(actionCreators, dispatch);

    const handleChecked = (radioValue: number) => {
        return radioValue == state[questionNumber-1];
    };

    const handleDefaultCheked = (radioValue: number) => {
        if (state.length < questionNumber){
            neutral(questionNumber)
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
                    onChange={() => stronglyDisagree(questionNumber)}
                />

                <label className='likertLabel' htmlFor="moderatelyDisagree"/>
                <input
                    id="moderatelyDisagree"
                    className='likertInput'
                    name="radio"
                    type="radio"
                    value='2'
                    checked={handleChecked(2)}
                    onChange={() => moderatlyDisagree(questionNumber)}
                />
                <label className='likertLabel' htmlFor="neutral"/>
                <input
                    id="neutral"
                    className='likertInput'
                    name="radio"
                    type="radio"
                    value='3'
                    checked={handleDefaultCheked(3)}
                    onChange={() => neutral(questionNumber)}
                />
                <label className='likertLabel' htmlFor="moderatelyAgree"/>
                <input
                    id="moderatelyAgree"
                    className='likertInput'
                    name="radio"
                    type="radio"
                    value='4'
                    checked={handleChecked(4)}
                    onChange={() => moderatlyAgree(questionNumber)}
                />
                <label className='likertLabel' htmlFor="stronglyAgree"/>
                <input
                    id="stronglyAgree"
                    className='likertInput'
                    name="radio"
                    type="radio"
                    value='5'
                    checked={handleChecked(5)}
                    onChange={() => stronglyAgree(questionNumber)}
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