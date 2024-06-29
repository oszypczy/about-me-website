import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CookieConsentContextType {
    cookieConsent: boolean;
    setCookieConsent: (consent: boolean) => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const useCookieConsent = () => {
    const context = useContext(CookieConsentContext);
    if (context === undefined) {
        throw new Error('useCookieConsent must be used within a CookieConsentProvider');
    }
    return context;
};

export const CookieConsentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cookieConsent, setCookieConsent] = useState<boolean>(() => localStorage.getItem('cookieConsent') === 'true');

    return (
        <CookieConsentContext.Provider value={{ cookieConsent, setCookieConsent }}>
            {children}
        </CookieConsentContext.Provider>
    );
};