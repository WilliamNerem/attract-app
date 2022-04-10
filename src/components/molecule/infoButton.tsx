import React from "react";

interface infoButtonProps {
    handleClick: React.MouseEventHandler<HTMLAnchorElement>
    whiteIcon?: boolean
}

export const InfoButton = ({handleClick, whiteIcon}: infoButtonProps) => {
    let classname = 'infoButton';

    if (whiteIcon){
        classname = 'infoButtonWhite';
    }
    return(
        <a className={classname} onClick={handleClick}/>
    );
};