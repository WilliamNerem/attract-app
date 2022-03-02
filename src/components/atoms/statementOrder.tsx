import React from 'react';
import '../../styles/statementOrder.style.css';
/*import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';*/

export const StatementOrder = () => {

    const a = 1;
    const b = 2;
    const c = 3;
    const d = 4;
    const e = 5;

    const handleUp = (statementId: number) => {
        console.log("knapp opp klikket " + statementId);
    }

    const handleDown = (statementId: number) => {
        console.log("knapp ned klikket " + statementId);
    }

    return (
        <>
            <div id={'flex'}>
                <div id={a.toString()} className={'statement'}>Påstand nummer 1 <button onClick={() => handleUp(a)}>up</button> <button onClick={() => handleDown(a)}>down</button></div>
                <div id={b.toString()} className={'statement'}>Påstand nummer 2 <button onClick={() => handleUp(b)}>up</button> <button onClick={() => handleDown(b)}>down</button></div>
                <div id={c.toString()} className={'statement'}>Påstand nummer 3 <button onClick={() => handleUp(c)}>up</button> <button onClick={() => handleDown(c)}>down</button></div>
                <div id={d.toString()} className={'statement'}>Påstand nummer 4 <button onClick={() => handleUp(d)}>up</button> <button onClick={() => handleDown(d)}>down</button></div>
                <div id={e.toString()} className={'statement'}>Påstand nummer 5 <button onClick={() => handleUp(e)}>up</button> <button onClick={() => handleDown(e)}>down</button></div>
            </div>


            {/*<Snackbar
                open
                autoHideDuration={6000}
                message="Archived"
                action={
                    <Button color="inherit" size="small">
                        Undo
                    </Button>
                }
                sx={{ bottom: { xs: 90, sm: 0 } }}
            />*/}
        </>
    );
};