import './CookieConsent.css';
import DarkOverlay from '../DarkOverlay';
import { useCookieConsent } from './CookieConsentContext';
import { useTranslation } from 'react-i18next';

const CookieConsent = () => {
    const { cookieConsent, setCookieConsent } = useCookieConsent();

    const handleAccept = () => {
        setCookieConsent(true);
        localStorage.setItem('cookieConsent', 'true');
    };

    const { t } = useTranslation();

    return (
        <>
            <DarkOverlay isVisible={!cookieConsent} />
            {!cookieConsent && (
                <div className="cookie-consent-container">
                    <p>{t('cookieMessage')}</p>
                    <button className="cookie-consent-button" onClick={handleAccept}>
                        {t('cookieButton')}
                    </button>
                </div>
            )}
        </>
    );
};

export default CookieConsent;