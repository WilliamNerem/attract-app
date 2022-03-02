import React from "react";
import '../../styles/statementItem.style.css';

interface statementItemProps {
    statementTitle: string,
    handleUp: React.MouseEventHandler<HTMLButtonElement>,
    handleDown: React.MouseEventHandler<HTMLButtonElement>,

}

export const StatementItem = ({statementTitle, handleUp, handleDown}: statementItemProps) => {
    return(
        <div className={'statement'} >
            {statementTitle}
            <button onClick={handleUp}>up</button>
            <button onClick={handleDown}>down</button>
        </div>
    );
};