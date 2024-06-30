import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { useTranslation } from 'react-i18next';

const Popup = ({ exit }: { exit: boolean }) => {
    const { t } = useTranslation();
    return (
        <div className={`popup ${exit ? 'slide-out' : ''}`}>
            {t('popup')}
            <div className="green-belt"></div>
        </div>
    );
};

export const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [exitAnimation, setExitAnimation] = useState(false);
    const { t } = useTranslation();

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm('service_zfzxc93', 'template_2v3429g', form.current, {
                    publicKey: 'Tpvw73zyxDKcLK8pt',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        setShowPopup(true);
                        setExitAnimation(false);
                        setTimeout(() => {
                            setExitAnimation(true);
                            setTimeout(() => setShowPopup(false), 500);
                        }, 5000);
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }
        setUserName('');
        setUserEmail('');
        setMessage('');
    };

    return (
        <div className="contact-container">
            {showPopup && <Popup exit={exitAnimation} />}
            <div className='linkedin-container'>
                <p>{t("contact_container")}</p>
                <a href="https://www.Linkedin.com/in/MarcinSzerszen/" target="_blank" rel="noopener noreferrer">
                    <img src="linkedin.png" alt="LinkedIn" />
                </a>
            </div>
            <div className='email-container'>
                <p>{t("email_container")}</p>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <label>{t("name")}</label>
                <input
                    type="text"
                    name="user_name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <label>Email</label>
                <input
                    type="email"
                    name="user_email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                />
                <label>{t("message")}</label>
                <textarea
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <input type="submit" value={t("send")} />
            </form>
        </div>
    );
};

export default Contact;