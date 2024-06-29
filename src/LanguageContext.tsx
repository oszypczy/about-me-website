import React, { createContext, useContext, useState, Dispatch, SetStateAction } from 'react';

const LanguageContext = createContext<{
    language: string;
    setLanguage: Dispatch<SetStateAction<string>>;
}>({
    language: 'en',
    setLanguage: () => { },
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState('en');

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};