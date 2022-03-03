import React from "react";
import '../../styles/statementItem.style.css';

interface statementItemProps {
    key: number,
    statementTitle: string,
    index: number,
    handleUp: React.MouseEventHandler<HTMLButtonElement>,
    handleDown: React.MouseEventHandler<HTMLButtonElement>,

}

export const StatementItem = ({statementTitle, index, handleUp, handleDown}: statementItemProps) => {
    return(
        <div className={'container'}>
            <div className={'orderNumber'}>
                {index+1}.
            </div>
            <div className={'statement'} >
                {statementTitle}
                <div className={'buttonsContainer'}>
                    <button onClick={handleUp}>up</button>
                    <button onClick={handleDown}>down</button>
                </div>
            </div>
        </div >
    );
};