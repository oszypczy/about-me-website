import { useState, useEffect } from 'react';
import './CookieConsent.css';
import DarkOverlay from './DarkOverlay'; // Import the DarkOverlay component

const CookieConsent = () => {
    const [consentGiven, setConsentGiven] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        setConsentGiven(consent === 'true');
    }, []);

    const handleConsent = () => {
        localStorage.setItem('cookieConsent', 'true');
        setConsentGiven(true);
    };

    return (
        <>
            <DarkOverlay isVisible={!consentGiven} />
            {!consentGiven && (
                <div className="cookie-consent-container">
                    We use cookies to improve your experience. By continuing, you agree to our use of cookies.
                    <button className="cookie-consent-button" onClick={handleConsent}>I Agree</button>
                </div>
            )}
        </>
    );
};

export default CookieConsent;