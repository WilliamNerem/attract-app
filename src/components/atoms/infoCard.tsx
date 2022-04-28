import React, {useEffect, useState} from "react";
import '../../styles/infoCard.style.css';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

interface infoCardProps {
    heading: string
    subHeading?: string
    link?: string
    text: string
    subText?: string
    linkText?: string
    isDropdown?: boolean
    exampleImage?: string
    singlePageLink?: boolean
    onButtonClick?: React.MouseEventHandler<HTMLButtonElement>
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
     singlePageLink,
     onButtonClick
}: infoCardProps) => {
    const [className, setClassName] = useState('');
    const [iconClassName, setIconClassName] = useState('');
    const newLineText = text.split('¤').map((str) => <p>{str}</p>);
    const { t } = useTranslation();
    const [isLongHeading, setIsLongHeading] = useState(false);

    useEffect(() => {
        if (isDropdown){
            if (heading.length > 24){
                setClassName('minimizedLongText');
                setIsLongHeading(true);
            } else {
                setClassName('minimized');
            }
            setIconClassName('dropdownIcon dropdownIconStandard');
        }
    }, []);

    const dropdown = () => {
        if (className === 'minimized' || className === 'minimizedLongText'){
            setClassName('expanded');
            setIconClassName('dropdownIcon dropdownIconRotated');
        } else if (className === 'expanded') {
            if (isLongHeading){
                setClassName('minimizedLongText');
            } else {
                setClassName('minimized');
            }
            setIconClassName('dropdownIcon dropdownIconStandard');
        }
    };

    return(
        <div className={className+' infoCard'} data-testid={'infoCard'}>
            <div onClick={dropdown} className={'infoCardDropdown'} data-testid={'infoCardDropdown'}>
                <h1 className={'infoCardHeading'}>{heading}</h1>
                <div className={iconClassName}/>
            </div>
            <p className='infoCardText'>{newLineText}</p>
            <h2 className={'infoCardSubHeading'}>{subHeading}</h2>
            <div className={exampleImage}/>
            <p className={'infoCardText'}>{subText}</p>
            {onButtonClick && (
                <div className='btn-goToSubDep-wrapper'>
                    <button className={'btn-goToSubDep'} onClick={onButtonClick}>{t('miniValgomat')}</button>
                    <div className={'btn-goToSubDep-behind'} aria-hidden={true}>{t('miniValgomat')}</div>
                </div>
            )}
            {link && (
                singlePageLink ?
                <Link to={link}>{linkText ? linkText : link.toString()}</Link> :
                <div className='linkWrapper'>
                    <a href={link} target={'_blank'} rel="noopener noreferrer" className='linkText'>{linkText ? linkText : link.toString()}</a>
                    <div className='linkToNewPage'/>
                </div>
            )}
        </div>
    );
};