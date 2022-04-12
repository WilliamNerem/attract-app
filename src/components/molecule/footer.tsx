import {FooterLinks} from "../atoms/footerLinks";
import '../../styles/footer.style.css';

export const Footer = () => {
    return(
        <div className='footerWrapper'>
            <div className='footer'>
                <FooterLinks/>
            </div>
        </div>
    );
};
