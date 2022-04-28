import React, {useEffect, useState} from "react";
import '../../styles/imageSelection.style.css';
import {useDispatch, useSelector} from "react-redux";
import {State} from "../../redux/reducers";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../redux";
import {PulseLoader} from "react-spinners";

interface imageSelectionProps {
    pictures: [string, string, string]
    pointAllocater: [Function, Function, Function]
}

export const ImageSelection = ({pictures, pointAllocater}: imageSelectionProps) => {
    const imageSelectorAnswer = useSelector((state: State) => state.imageSelectorAnswer);
    const questionNumber = useSelector((state: State) => state.questionCounter);
    const [initImageSelection, setInitImageSelection] = useState(false);
    const [firstImgIsLoading, setFirstImgIsLoading] = useState(true);
    const [secondImgIsLoading, setSecondImgIsLoading] = useState(true);
    const [thirdImgIsLoading, setThirdImgIsLoading] = useState(true);
    const [showImages, setShowImages] = useState(false);
    const [isTransitionDone, setIsTransitionDone] = useState(false);
    const dispatch = useDispatch();
    const {
        imageSelectorChecked
    } = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        if (!firstImgIsLoading && !secondImgIsLoading && !thirdImgIsLoading){
            setShowImages(true);
        } else {
            setTimeout((() => {
                setIsTransitionDone(true);
            }), 350);
        }
    }, [firstImgIsLoading, secondImgIsLoading, thirdImgIsLoading]);

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
            <input
                id="firstImageSelection"
                className='imageSelectionItem'
                name="checkbox"
                type="checkbox"
                value='1'
                checked={handleDefaultCheked(1)}
                onChange={() => handleChange(1, pointAllocater[0])}
                data-testid={'firstInput'}
            />
            <label htmlFor="firstImageSelection">
                <div className='imageSelectionLabel'>
                    {isTransitionDone ?
                        <div className={'image-wrapper'} id={'firstImage'}>
                            <img
                                src={pictures[0]}
                                className={`imageSelectionImage ${showImages ? 'imageVisible' : 'imageHidden'}`}
                                data-testid={'firstImage'}
                                alt={pictures[0]}
                                onLoad={() => setFirstImgIsLoading(false)}
                            />
                        </div>
                        :
                        <div className='imageLoaderWrapper'>
                            <div className='imageLoader'>
                                <PulseLoader
                                    size={15}
                                    margin={2}
                                    speedMultiplier={0.7}
                                    color={'#a100ff'}
                                />
                            </div>
                        </div>
                    }
                    <div className='imageSelectionRadio'/>
                </div>
            </label>

            <input
                id="secondImageSelection"
                className='imageSelectionItem'
                name="checkbox"
                type="checkbox"
                value='2'
                checked={handleChecked(2)}
                onChange={() => handleChange(2, pointAllocater[1])}
                data-testid={'secondInput'}
            />
            <label htmlFor="secondImageSelection">
                <div className='imageSelectionLabel'>
                    {isTransitionDone ?
                        <div className={'image-wrapper'} id={'secondImage'}>
                            <img
                                src={pictures[1]}
                                className={`imageSelectionImage ${showImages ? 'imageVisible' : 'imageHidden'}`}
                                data-testid={'secondImage'}
                                alt={pictures[1]}
                                onLoad={() => setSecondImgIsLoading(false)}
                            />
                        </div>
                        :
                        <div className='imageLoaderWrapper'>
                            <div className='imageLoader'>
                                <PulseLoader
                                    size={15}
                                    margin={2}
                                    speedMultiplier={0.7}
                                    color={'#a100ff'}
                                />
                            </div>
                        </div>
                    }
                    <div className='imageSelectionRadio'/>
                </div>
            </label>

            <input
                id="thirdImageSelection"
                className='imageSelectionItem'
                name="checkbox"
                type="checkbox"
                value='3'
                checked={handleChecked(3)}
                onChange={() => handleChange(3, pointAllocater[2])}
                data-testid={'thirdInput'}
            />
            <label htmlFor="thirdImageSelection">
                <div className='imageSelectionLabel'>
                    {isTransitionDone ?
                        <div className={'image-wrapper'} id={'thirdImage'}>
                            <img
                                src={pictures[2]}
                                className={`imageSelectionImage ${showImages ? 'imageVisible' : 'imageHidden'}`}
                                data-testid={'thirdImage'}
                                alt={pictures[2]}
                                onLoad={() => setThirdImgIsLoading(false)}
                            />
                        </div>
                        :
                        <div className='imageLoaderWrapper'>
                            <div className='imageLoader'>
                                <PulseLoader
                                    size={15}
                                    margin={2}
                                    speedMultiplier={0.7}
                                    color={'#a100ff'}
                                />
                            </div>
                        </div>
                    }
                    <div className='imageSelectionRadio'/>
                </div>
            </label>
        </div>
    );
};