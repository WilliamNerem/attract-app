import React, {useEffect, useState} from 'react';
import '../../styles/result.style.css'
import emailjs from "@emailjs/browser";
import {departments} from "../../departments";


interface emailDepSenderProps {
    totalPointsArray: any[]
}

export const EmailDepSender = ({totalPointsArray} : emailDepSenderProps) => {
    const [checked, setChecked] = useState(false);
    const [email, setEmail] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    let emailString;
    const sortedArr = totalPointsArray.slice().sort((a, b) => b - a).slice(0,3);
    let depArr: number[] = [] ;
    depArr = [sortedArr.indexOf(totalPointsArray[0]), sortedArr.indexOf(totalPointsArray[1]), sortedArr.indexOf(totalPointsArray[2])]; //Index of strat, tech and inter

    if(sortedArr[1] === sortedArr[2]) {
        depArr[totalPointsArray.lastIndexOf(sortedArr[1])] = sortedArr.lastIndexOf(sortedArr[1]); // Differentiate indexes of the same value
    }

    const depAtPlacement = (position: number) => {
        return departments[depArr.indexOf(position)];
    };
    emailString = 'Avdelingen du passer best inn i er ' + depAtPlacement(0).title + ', etterfulgt av ' + depAtPlacement(1).title + ' på andreplass og '
        + depAtPlacement(2).title + ' på tredjeplass!' + '<br><br>'
        + depAtPlacement(0).infoTextEmail + '<br>Hvis du ønsker å besøke hjemmesiden til ' + depAtPlacement(0).title + ' så kan du trykke her : '
        + depAtPlacement(0).link + '.'

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_7wih987',  // Service ID of EmailJS
            'template_xazuq1h', // Template ID of the template used in EmailJS
            e.currentTarget,  // This is the form itself
            'BlXHardObV5exxTHW')
            .then(() => {
                setErrorMessage("Resultatet ble sendt!");
            }, () => {
                setErrorMessage("Resultatet ble ikke sendt, prøv igjen senere");
            });
    };

    const validateEmail = (email: string) => {
        setEmail(email);
        const regex = RegExp(/\S+@\S+\.\S+/); //Simple regex but seems ok
        return regex.test(email);

    }

    useEffect(() => {
        setIsDisabled(!(validateEmail(email)));
    }, [email]);

    const handleChange = () => {
        setChecked(!checked);
    }

    if (checked) {
        return (
            <div className="emailSender">
                <label htmlFor="emailCheckBox" id="checkLabel">Jeg ønsker å bli tilsendt resultatet på e-post</label>
                <input id="emailCheckBox" type="checkbox" onChange={handleChange}/>
                <form
                    className="contact-form"
                    onSubmit={sendEmail}>
                    <label htmlFor="user_email" id="emailLabel">Skriv inn din e-post:</label>
                    <input type="email" onChange={e => validateEmail(e.currentTarget.value)} id="user_email" name="user_email" className="form-control" placeholder="dinepost@epost.com"/>
                    <p id="errorEmail">{errorMessage}</p>
                    <input type="hidden" name="emailString" value={emailString} />
                    <input disabled={isDisabled} type="submit" id="email_submit" value="Send" className="form-control btn btn-primary"/>
                </form>
            </div>
        )
    } else {
        return (
            <div className="emailSender">
                <label htmlFor="emailCheckBox" id="checkLabel">Jeg ønsker å bli tilsendt resultatet på e-post</label>
                <input id="emailCheckBox" type="checkbox" onChange={handleChange}/>
            </div>
        )
    }
}

export default EmailDepSender;