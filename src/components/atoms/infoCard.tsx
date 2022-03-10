import React from "react";
import '../../styles/infoCard.style.css';

interface infoCardProps {
    heading: string
    subHeading?: string
    link?: string
    text: string
    subText?: string
    linkText?: string
}

export const InfoCard = ({heading, subHeading, link, text, subText, linkText}: infoCardProps) => {
    return(
        <div className='infoCard'>
            <h1 className={'infoCardHeading'}>{heading}</h1>
            <p className='infoCardText'>{text}</p>
            <h2 className={'infoCardSubHeading'}>{subHeading}</h2>
            <p className={'infoCardText'}>{subText}</p>
            {link && <a href={link} target="_blank" rel="noopener noreferrer">{linkText ? linkText : link.toString()}</a>}
        </div>
    );
};