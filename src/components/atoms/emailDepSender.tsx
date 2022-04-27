import React, {useEffect, useState} from 'react';
import '../../styles/result.style.css'
import emailjs from "@emailjs/browser";
import {departments} from "../../departments";
import AnimateHeight from "react-animate-height";
import {PulseLoader} from "react-spinners";
import {useTranslation} from "react-i18next";


interface emailDepSenderProps {
    totalPointsArray: any[]
}

export const EmailDepSender = ({totalPointsArray} : emailDepSenderProps) => {
    const [checked, setChecked] = useState(false);
    const [email, setEmail] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [height, setHeight] = useState<string|number>(0);
    const [isSending, setIsSending] = useState(false);
    let emailString;
    const sortedArr = totalPointsArray.slice().sort((a, b) => b - a).slice(0,3);
    let depArr: number[] = [] ;
    const { t } = useTranslation();
    depArr = [sortedArr.indexOf(totalPointsArray[0]), sortedArr.indexOf(totalPointsArray[1]), sortedArr.indexOf(totalPointsArray[2])]; //Index of strat, tech and inter

    if(sortedArr[1] === sortedArr[2]) {
        depArr[totalPointsArray.lastIndexOf(sortedArr[1])] = sortedArr.lastIndexOf(sortedArr[1]); // Differentiate indexes of the same value
    }

    const depAtPlacement = (position: number) => {
        return departments(t)[depArr.indexOf(position)];
    };
    emailString = t('emailString1') + depAtPlacement(0).title + t('emailString2') + depAtPlacement(1).title + t('emailString3')
        + depAtPlacement(2).title + t('emailString4') + '<br><br>'
        + depAtPlacement(0).infoTextEmail1 + '<br>' + depAtPlacement(0).infoTextEmail2 + '<br>' + t('emailString5') + depAtPlacement(0).title + t('emailString6')
        + depAtPlacement(0).link + '.';

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);
        emailjs.sendForm(
            'service_7wih987',  // Service ID of EmailJS
            'template_xazuq1h', // Template ID of the template used in EmailJS
            e.currentTarget,  // This is the form itself
            'BlXHardObV5exxTHW')
            .then(() => {
                setErrorMessage(t('emailSent'));
                setIsSending(false);
            }, () => {
                setErrorMessage(t('emailDidntSend'));
                setIsSending(false);
            });
    };

    const validateEmail = (email: string) => {
        setEmail(email);
        const regex = RegExp(/\S+@\S+\.\S+/); //Simple regex but seems ok
        return regex.test(email);

    };

    useEffect(() => {
        setIsDisabled(!(validateEmail(email)));
    }, [email]);

    useEffect(() => {
        if (checked) {
            setHeight(120);
        } else {
            setHeight(0);
        }
    }, [checked]);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <div className="emailSender" data-testid='emailSender'>
            <div className='emailDivider'/>
            <label htmlFor="emailCheckBox" id="checkLabel">
                {t('emailCheckBox')}
                <input id="emailCheckBox" type="checkbox" onChange={handleChange} data-testid='emailCheckbox'/>
                <div className={`emailCustomCheckBox ${checked ? 'emailCustomCheckBoxChecked' : ''}`}/>
            </label>
            <AnimateHeight
                duration={500}
                height={height}
                data-testid='emailForm'
            >
                <form
                    className={'contact-form'}
                    onSubmit={sendEmail}
                >
                    <div className='sendEmailWrapper'>
                        <label htmlFor="user_email" id="emailLabel">{t('emailLabel')}</label>
                        <input type="email" onChange={e => validateEmail(e.currentTarget.value)} id="user_email" name="user_email" className="inputEmail" placeholder={t('emailPlaceholder')} data-testid='emailInput'/>
                    </div>
                    <button disabled={isDisabled} type="submit" id="email_submit" data-testid='emailSend' className='btnSendEmail'>
                        {isSending ?
                            <PulseLoader
                                size={10}
                                margin={2}
                                speedMultiplier={0.7}
                                color={'#a100ff'}
                            />
                            :
                            'Send'
                        }
                    </button>
                    <p id="errorEmail" data-testid='emailError'>{errorMessage}</p>
                    <input type="hidden" name="emailString" value={emailString} />
                </form>
            </AnimateHeight>
            <div className='emailDivider'/>
        </div>
    )
};

export default EmailDepSender;