import React from 'react';
import '../../styles/progressbar.style.css'

interface ProgressBarProps {
    completed: number
}

export const ProgressBar = ({
    completed
}: ProgressBarProps) => {
    return (
        <div className='progressContainer' data-testid={'progressbar'}>
            <div className='progressFiller' style={ { width: `${ completed }%` } }>
                <span className='progressLabel'>{`${completed}%`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;