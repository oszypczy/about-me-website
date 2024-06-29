import './NavigationBar.css';
import { useLanguage } from './LanguageContext';

const translations: { [key: string]: { [key: string]: string } } = {
    en: {
        home: 'SZERSZEN.COnsulting',
        aboutMe: 'About me',
        contact: 'Contact',
    },
    pl: {
        home: 'SZERSZEN.COnsulting',
        aboutMe: 'O mnie',
        contact: 'Kontakt',
    },
};

function NavigationBar() {
    const { language, setLanguage } = useLanguage();

    return (
        <nav className="NavBar">
            <div className="navLinks">
                <a href="home">{translations[language].home}</a>
                <a href="about-me">{translations[language].aboutMe}</a>
                <a href="contact">{translations[language].contact}</a>
            </div>
            <div className="languageFlags">
                <img src="/pl.png" alt="PL" onClick={() => setLanguage('pl')} className={language === 'en' ? 'bwFilter' : ''} />
                <img src="/uk.png" alt="EN" onClick={() => setLanguage('en')} className={language === 'pl' ? 'bwFilter' : ''} />
            </div>
        </nav>
    );
}

export default NavigationBar;