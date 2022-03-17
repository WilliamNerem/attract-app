import React from 'react';
import '../../styles/button.style.css';

interface testInterface {
    text: string
    href: string
}

export const Button = ({
    text,
    href
}: testInterface) => {
    return(
        <a data-testid={'button'} href={href} className='btn'>
            {text}
        </a>
    );
};
