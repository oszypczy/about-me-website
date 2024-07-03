import React, { useRef, useState } from 'react';
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
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const { t } = useTranslation();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    const checkFormValidity = () => {
        return userName.trim() !== '' && emailRegex.test(userEmail) && message.trim() !== '';
    };

    const handleInputChange = (setter: (value: string) => void) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setter(e.target.value);
        setIsFormValid(checkFormValidity());
    };

    const navigateToLinkedIn = () => {
        window.open("https://www.Linkedin.com/in/MarcinSzerszen/", "_blank", "noopener,noreferrer");
    };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isFormValid) {
            alert('Please ensure all fields are filled correctly.');
            return;
        }

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
                        setUserName('');
                        setUserEmail('');
                        setMessage('');
                        setIsFormValid(false);
                    },
                );
        }
    };

    return (
        <div className="contact-container">
            {showPopup && <Popup exit={exitAnimation} />}
            <div className='linkedin-container' onClick={navigateToLinkedIn}>
                <p>{t("contact_container")}</p>
                <img src="linkedin.png" alt="LinkedIn" />
            </div>
            <div className='email-container' onClick={toggleFormVisibility}>
                <p>{t("email_container")}</p>
            </div>
            {isFormVisible && (
                <div className="form-container">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="input-group">
                            <label>{t("name")}</label>
                            <input
                                type="text"
                                name="user_name"
                                value={userName}
                                onChange={handleInputChange(setUserName)}
                            />
                        </div>
                        <div className="input-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="user_email"
                                value={userEmail}
                                onChange={handleInputChange(setUserEmail)}
                            />
                        </div>
                        <div className="input-group">
                            <label>{t("message")}</label>
                            <textarea
                                name="message"
                                value={message}
                                onChange={handleInputChange(setMessage)}
                            />
                        </div>
                        <div className="input-group submit-button">
                            <input type="submit" value={t("send")} />
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Contact;