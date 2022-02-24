import React from 'react';
import '../../styles/questions.css'


interface QuestionsProps {
    questionNumber: number
    questionTxt: string
}


export const Questions = ({
    questionNumber,
    questionTxt
}: QuestionsProps) => {

    return (
        <p>{questionNumber} : {questionTxt}</p>
    )
}