import React, {useEffect, useState} from 'react';
import '../../styles/result.style.css'
import emailjs from "@emailjs/browser";
import {departments} from "../../departments";
import AnimateHeight from "react-animate-height";
import {PulseLoader} from "react-spinners";


interface emailDepSenderProps {
   chosenDep: string
}

export const EmailDepSender = ({chosenDep} : emailDepSenderProps) => {
    const [checked, setChecked] = useState(false);
    const [email, setEmail] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [height, setHeight] = useState<string|number>(0);
    const [isSending, setIsSending] = useState(false);
    let chosenDepartment;
    let emailString;

    for(let department of departments) {
        if(department.title === chosenDep) {
            chosenDepartment = department;
        }
    }

    if(chosenDepartment !== undefined) {
        emailString = 'Avdelingen du passer best inn i er ' + chosenDepartment.title + '! <br><br>'
            + chosenDepartment.infoText + '<br>Hvis du ønsker å besøke hjemmesiden til ' + chosenDepartment.title + ' så kan du trykke her : '
            + chosenDepartment.link + '.'
    }

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);
        emailjs.sendForm(
            'service_7wih987',  // Service ID of EmailJS
            'template_xazuq1h', // Template ID of the template used in EmailJS
            e.currentTarget,  // This is the form itself
            'BlXHardObV5exxTHW')
            .then(() => {
                setErrorMessage("Resultatet ble sendt!");
                setIsSending(false);
            }, () => {
                setErrorMessage("Resultatet ble ikke sendt, prøv igjen senere");
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
                Jeg ønsker å bli tilsendt resultatet på e-post
                <input id="emailCheckBox" type="checkbox" onChange={handleChange} data-testid='emailCheckbox'/>
                <div className={checked ? 'emailCustomCheckBoxChecked' : 'emailCustomCheckBox'}/>
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
                    <div style={{display: "inline-block", width: "200px"}}>
                        <label htmlFor="user_email" id="emailLabel">Skriv inn din e-post:</label>
                        <input type="email" onChange={e => validateEmail(e.currentTarget.value)} id="user_email" name="user_email" className="inputEmail" placeholder="dinepost@epost.com" data-testid='emailInput'/>
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