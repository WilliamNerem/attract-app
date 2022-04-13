import React, {useEffect, useState} from "react";
import '../../styles/infoCard.style.css';
import {Link} from "react-router-dom";
import {SubDepartments} from "../../subDepartments";

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
    subDepArr?: any[]
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
     onButtonClick,
     subDepArr
}: infoCardProps) => {
    const [className, setClassName] = useState('');
    const [iconClassName, setIconClassName] = useState('');
    const [showSubDep, setShowSubDep] = useState(false);
    const newLineText = text.split('¤').map((str) => <p>{str}</p>);
    const [sortedArray, setSortedArray] = useState(subDepArr || []);
    const [topThreeDep, setTopThreeDep] = useState([0, 0, 0]);
    const subDepArray = SubDepartments();

    useEffect(() => {
        if (isDropdown){
            setClassName('minimized');
            setIconClassName('dropdownIcon dropdownIconStandard');
        }

        if(subDepArr && !showSubDep) {
            setSortedArray(subDepArr.sort((a, b) => (a.points < b.points) ? 1 : -1)); //sorts array that is sent in as prop, by points, finding the three with most points
            sortedArray.map(subDep => {
                if (subDep.points > 0){
                    setShowSubDep(true);

                    let arr: any[] | ((prevState: number[]) => number[]) = [];
                    for (let subDep of subDepArray) {
                        if (sortedArray[0].subdivision === subDep.id) {
                            arr.splice(0, 0, subDepArray.indexOf(subDep))
                        }
                        if (sortedArray[1].subdivision === subDep.id) {
                            arr.splice(1, 0, subDepArray.indexOf(subDep))
                        }
                        if (sortedArray[2].subdivision === subDep.id) {
                            arr.splice(2, 0, subDepArray.indexOf(subDep))
                        }
                    }
                    setTopThreeDep(arr);
                }
            })
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
        <div className={className+' infoCard'} data-testid={'infoCard'}>
            <div onClick={dropdown} data-testid={'infoCardDropdown'}>
                <h1 className={'infoCardHeading'}>{heading}</h1>
                <div className={iconClassName}/>
            </div>
            <p className='infoCardText'>{newLineText}</p>
            <h2 className={'infoCardSubHeading'}>{subHeading}</h2>
            <div className={exampleImage}/>
            <p className={'infoCardText'}>{subText}</p>
            {onButtonClick && (
                showSubDep ? (
                    <div>
                        <h2 className={'infoCardSubHeading'}>Underavdelinger i {heading} som passer deg:</h2>
                        <ul>
                            <li>{subDepArray[topThreeDep[0]].title}</li>
                            <li>{subDepArray[topThreeDep[1]].title}</li>
                            <li>{subDepArray[topThreeDep[2]].title}</li>
                        </ul>
                    </div>
                ) : (
                    <div className='btn-goToSubDep-wrapper'>
                        <button className={'btn-goToSubDep'} onClick={onButtonClick}>Mini Valgomat</button>
                        <div className={'btn-goToSubDep-behind'} aria-hidden={true}>Mini Valgomat</div>
                    </div>
                )
            )}
            {link && (
                singlePageLink ?
                <Link to={link}>{linkText ? linkText : link.toString()}</Link> :
                <div className='linkWrapper'>
                    <a href={link} target={'_blank'} rel="noopener noreferrer">{linkText ? linkText : link.toString()}</a>
                    <div className='linkToNewPage'/>
                </div>
            )}
        </div>
    );
};