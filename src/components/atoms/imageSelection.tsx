import React, { useState } from "react";
import '../../styles/imageSelection.style.css';
import {useDispatch, useSelector} from "react-redux";
import {State} from "../../redux/reducers";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../redux";

interface imageSelectionProps {
    pictures: [string, string, string]
    pointAllocater: [Function, Function, Function]
}

export const ImageSelection = ({pictures, pointAllocater}: imageSelectionProps) => {
    const imageSelectorAnswer = useSelector((state: State) => state.imageSelectorAnswer);
    const questionNumber = useSelector((state: State) => state.questionCounter);
    const [initImageSelection, setInitImageSelection] = useState(false);
    const dispatch = useDispatch();
    const {
        imageSelectorChecked
    } = bindActionCreators(actionCreators, dispatch);

    const handleChange = (checked: number, allocatePoints: Function) => {
        for (let i = 0; i < imageSelectorAnswer.length; i++){
            if (imageSelectorAnswer[i].questionNumber === questionNumber){
                const lastChecked = pointAllocater[imageSelectorAnswer[i].checked - 1];
                lastChecked(-1);
                allocatePoints(1);
                imageSelectorChecked(questionNumber, checked);
            }
        }
    };

    const handleChecked = (radioValue: number) => {
        for (let i = 0; i < imageSelectorAnswer.length; i++){
            if (imageSelectorAnswer[i].questionNumber === questionNumber){
                return radioValue === imageSelectorAnswer[i].checked;
            }
        }
        return false;
    };

    const handleDefaultCheked = (radioValue: number) => {
        for (let i = 0; i < imageSelectorAnswer.length; i++){
            if (imageSelectorAnswer[i].questionNumber === questionNumber){
                return handleChecked(radioValue)
            }
        }
        imageSelectorChecked(questionNumber, 1);
        setInitImageSelection(!initImageSelection);
        pointAllocater[0](1);
        return true
    };

    return(
        <div className='imageSelection' data-testid={'imageSelection'}>
            <label htmlFor="firstImageSelection">
                <div className='imageSelectionLabel'>
                    <div className={'imageSelectionImage ' + pictures[0]}/>
                    <div className='imageSelectionRadio'/>
                </div>
            </label>
            <input
                id="firstImageSelection"
                className='imageSelectionItem'
                name="radio"
                type="radio"
                value='1'
                checked={handleDefaultCheked(1)}
                onChange={() => handleChange(1, pointAllocater[0])}
            />

            <label htmlFor="secondImageSelection">
                <div className='imageSelectionLabel'>
                    <div className={'imageSelectionImage ' + pictures[1]}/>
                    <div className='imageSelectionRadio'/>
                </div>
            </label>
            <input
                id="secondImageSelection"
                className='imageSelectionItem'
                name="radio"
                type="radio"
                value='2'
                checked={handleChecked(2)}
                onChange={() => handleChange(2, pointAllocater[1])}
            />
            <label htmlFor="thirdImageSelection">
                <div className='imageSelectionLabel'>
                    <div className={'imageSelectionImage ' + pictures[2]}/>
                    <div className='imageSelectionRadio'/>
                </div>
            </label>
            <input
                id="thirdImageSelection"
                className='imageSelectionItem'
                name="radio"
                type="radio"
                value='3'
                checked={handleChecked(3)}
                onChange={() => handleChange(3, pointAllocater[2])}
            />
            <span id="imageSelectionSlider"/>
        </div>
    );
};