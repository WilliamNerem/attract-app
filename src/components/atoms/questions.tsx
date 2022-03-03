import React from 'react';
import '../../styles/valgomat.style.css'

interface QuestionsProps {
    questionTxt: string
}

export const Questions = ({
    questionTxt
}: QuestionsProps) => {

    return (
        <div className="valgomatQuestion">
            {questionTxt}
        </div>
    )
};