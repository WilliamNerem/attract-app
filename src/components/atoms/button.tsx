import React from 'react';
import '../../styles/button.style.css';

interface testInterface {
    text: string
    href: string
    tabIndex?: number
}

export const Button = ({
    text,
    href,
    tabIndex
}: testInterface) => {
    return(
        <a data-testid={'button'} href={href} className='btn' tabIndex={tabIndex ? tabIndex : 0}>
            {text}
        </a>
    );
};
