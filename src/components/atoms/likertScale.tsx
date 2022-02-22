import React from 'react';
import '../../styles/likertScale.style.css'

export const LikertScale = () => {
    return(
        <div>
            <div className="likertScale">
                <label className='likertLabel' htmlFor="stronglyDisagree"/>
                <input id="stronglyDisagree" className='likertInput' name="radio" type="radio"/>
                <label className='likertLabel' htmlFor="moderatelyDisagree"/>
                <input id="moderatelyDisagree" className='likertInput' name="radio" type="radio"/>
                <label className='likertLabel' htmlFor="neutral"/>
                <input id="neutral" className='likertInput' name="radio" type="radio" defaultChecked/>
                <label className='likertLabel' htmlFor="moderatelyAgree"/>
                <input id="moderatelyAgree" className='likertInput' name="radio" type="radio"/>
                <label className='likertLabel' htmlFor="stronglyAgree"/>
                <input id="stronglyAgree" className='likertInput' name="radio" type="radio"/>
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