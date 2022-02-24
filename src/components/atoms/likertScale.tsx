import React from 'react';
import '../../styles/likertScale.style.css'
import { useGetSetState } from "../../hooks/getSetState";

interface likertScaleProps {
    storageKey: string
}

export const LikertScale = ({storageKey}: likertScaleProps) => {
    const [value, setValue] = useGetSetState({key: storageKey, defaultValue: false});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    };

    const handleChecked = (radioValue: string) => {
        return radioValue == value;
    };

    const handleDefaultCheked = (radioValue: string) => {
        if (value == false){
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
                    checked={handleChecked('1')}
                    onChange={handleChange}
                />

                <label className='likertLabel' htmlFor="moderatelyDisagree"/>
                <input
                    id="moderatelyDisagree"
                    className='likertInput'
                    name="radio"
                    type="radio"
                    value='2'
                    checked={handleChecked('2')}
                    onChange={handleChange}
                />
                <label className='likertLabel' htmlFor="neutral"/>
                <input
                    id="neutral"
                    className='likertInput'
                    name="radio"
                    type="radio"
                    value='3'
                    checked={handleDefaultCheked('3')}
                    onChange={handleChange}
                />
                <label className='likertLabel' htmlFor="moderatelyAgree"/>
                <input
                    id="moderatelyAgree"
                    className='likertInput'
                    name="radio"
                    type="radio"
                    value='4'
                    checked={handleChecked('4')}
                    onChange={handleChange}
                />
                <label className='likertLabel' htmlFor="stronglyAgree"/>
                <input
                    id="stronglyAgree"
                    className='likertInput'
                    name="radio"
                    type="radio"
                    value='5'
                    checked={handleChecked('5')}
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