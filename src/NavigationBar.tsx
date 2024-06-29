import './NavigationBar.css';
import { useTranslation } from 'react-i18next';
import { useCookieConsent } from './Cookies/CookieConsentContext';

function NavigationBar() {
    const { t, i18n } = useTranslation();
    const { cookieConsent } = useCookieConsent();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
    };

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!cookieConsent) {
            e.preventDefault();
        }
    };

    const linkStyle: React.CSSProperties = cookieConsent ? {} : { cursor: 'not-allowed' };

    return (
        <nav className="NavBar">
            <div className="navLinks">
                <a href="home" onClick={handleClick} style={linkStyle}>SZERSZEN.COnsulting</a>
                <a href="about-me" onClick={handleClick} style={linkStyle}>{t('aboutMe')}</a>
                <a href="contact" onClick={handleClick} style={linkStyle}>{t('contact')}</a>
            </div>
            <div className="languageFlags">
                <img
                    src="/pl.png"
                    alt="PL"
                    onClick={() => changeLanguage('pl')}
                    className={i18n.language === 'en' ? 'bwFilter' : ''}
                />
                <img
                    src="/uk.png"
                    alt="EN"
                    onClick={() => changeLanguage('en')}
                    className={i18n.language === 'pl' ? 'bwFilter' : ''}
                />
            </div>
        </nav>
    );
}

export default NavigationBar;
