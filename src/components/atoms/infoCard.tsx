import React from "react";
import '../../styles/infoCard.style.css';

interface infoCardProps {
    heading: string
    link?: string
    text: string
}

export const InfoCard = ({heading, link, text}: infoCardProps) => {
    return(
        <div className='infoCard'>
            <a href={link} className='infoCardHeading'>{heading}</a>
            <p className='infoCardText'>{text}</p>
        </div>
    );
};