import React from "react";

interface infoButtonProps {
    handleClick: React.MouseEventHandler<HTMLAnchorElement>
}

export const InfoButton = ({handleClick}: infoButtonProps) => {
    return(
        <a className='infoButton' onClick={handleClick}/>
    );
};