import React, { useState } from 'react';
import './NavigationBar.css';
import { useTranslation } from 'react-i18next';
import { useCookieConsent } from './../Cookies/CookieConsentContext';
import pl_flag from '/pl.png';
import uk_flag from '/uk.png';

function NavigationBar() {
    const { t, i18n } = useTranslation();
    const { cookieConsent } = useCookieConsent();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
    };

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!cookieConsent) {
            e.preventDefault();
        }
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const linkStyle: React.CSSProperties = cookieConsent ? {} : { cursor: 'not-allowed' };

    return (
        <nav className={`NavBar ${isMenuOpen ? 'open' : ''}`}>
            <div className="hamburger" onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </div>
            <div className={`navLinks ${isMenuOpen ? 'open' : ''}`}>
                <a href="#/home" onClick={handleClick} style={linkStyle}>SZERSZEN.COnsulting</a>
                <a href="#/about-me" onClick={handleClick} style={linkStyle}>{t('aboutMe')}</a>
                <a href="#/contact" onClick={handleClick} style={linkStyle}>{t('contact')}</a>
            </div>
            <div className="languageFlags">
                <img
                    src={pl_flag}
                    alt="PL"
                    onClick={() => changeLanguage('pl')}
                    className={i18n.language === 'en' ? 'bwFilter' : ''}
                />
                <img
                    src={uk_flag}
                    alt="EN"
                    onClick={() => changeLanguage('en')}
                    className={i18n.language === 'pl' ? 'bwFilter' : ''}
                />
            </div>
        </nav>
    );
}

export default NavigationBar;
