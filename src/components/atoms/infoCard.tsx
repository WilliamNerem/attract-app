import React, {useEffect, useState} from "react";
import '../../styles/infoCard.style.css';

interface infoCardProps {
    heading: string
    subHeading?: string
    link?: string
    text?: string
    subText?: string
    linkText?: string
    isDropdown?: boolean
    exampleImage?: string
    hasButton?: boolean
    department?: string
    handleClick?: Function
}

export const InfoCard = ({
    heading,
    subHeading,
    link,
    text,
    subText,
    linkText,
    isDropdown,
    exampleImage,
    hasButton,
    department,
    handleClick
}: infoCardProps) => {
    const [className, setClassName] = useState('');
    const [iconClassName, setIconClassName] = useState('');

    useEffect(() => {
        if (isDropdown){
            setClassName('minimized');
            setIconClassName('dropdownIcon dropdownIconStandard');
        }
    }, []);

    const dropdown = () => {
        if (className === 'minimized'){
            setClassName('expanded');
            setIconClassName('dropdownIcon dropdownIconRotated');
        } else if (className === 'expanded') {
            setClassName('minimized');
            setIconClassName('dropdownIcon dropdownIconStandard');
        }
    };

    return(
        <div className={className+' infoCard'}>
            <div onClick={dropdown}>
                <h1 className={'infoCardHeading'}>{heading}</h1>
                <div className={iconClassName}/>
            </div>
            <p className='infoCardText'>{text}</p>
            <h2 className={'infoCardSubHeading'}>{subHeading}</h2>
            <div className={exampleImage}/>
            <p className={'infoCardText'}>{subText}</p>
            {link && <a href={link} target="_blank" rel="noopener noreferrer">{linkText ? linkText : link.toString()}</a>}
            {hasButton && handleClick !== undefined ? <div className='dynamicButtonDiv'><button className='dynamicButton' onClick={() => handleClick(department)}>VELG</button></div> : ''}
        </div>
    );
};