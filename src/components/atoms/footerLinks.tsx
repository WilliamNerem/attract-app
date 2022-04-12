import React from "react";
import {Link} from "react-router-dom";

export const FooterLinks = () => {
    return(
        <div className='links'>
            <div className='greaterThanDiv'>
                <a href='https://www.accenture.com/no-en'>
                    <div className='greaterThan'/>
                </a>
            </div>
            <div className='pagelinkDiv'>
                <Link to={'/'} className='pagelink'>Hjem</Link>
                <Link to={'/valgomat'} className='pagelink'>Valgomat</Link>
                <Link to={'/info'} className='pagelink'>Informasjon</Link>
            </div>
            <div className='iconLinks'>
                <a href={'https://www.linkedin.com/company/accenture-nordics/'} target={'_blank'} rel="noopener noreferrer" className='linkTag'>
                    <div className='iconWrapper'>
                        <div className='linkedIn'/>
                    </div>
                </a>
                <a href={'https://twitter.com/AccentureNO?lang=en'} target={'_blank'} rel="noopener noreferrer">
                    <div className='iconWrapper'>
                        <div className='twitter'/>
                    </div>
                </a>
                <a href={'https://www.facebook.com/AccentureNorge/'} target={'_blank'} rel="noopener noreferrer">
                    <div className='iconWrapper'>
                        <div className='facebook'/>
                    </div>
                </a>
                <a href={'https://www.instagram.com/accenturenorge/'} target={'_blank'} rel="noopener noreferrer">
                    <div className='iconWrapper'>
                        <div className='instagram'/>
                    </div>
                </a>
                <a href={'https://www.youtube.com/channel/UCoa5DuZsncLcHTnqzFLMlJA'} target={'_blank'} rel="noopener noreferrer">
                    <div className='iconWrapper'>
                        <div className='youtube'/>
                    </div>
                </a>
            </div>
        </div>
    );
};
