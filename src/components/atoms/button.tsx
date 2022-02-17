import React from 'react';

interface testInterface {
    buttonTest: string
}

export const Button = ({
    buttonTest
}: testInterface) => {
    return(
        <button>
            {buttonTest}
        </button>
    );
};
