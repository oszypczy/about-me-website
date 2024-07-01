import { HashRouter, Routes, Route } from 'react-router-dom';

import NavigationBar from './NavBar/NavigationBar';
import AboutMe from './AboutMe/AboutMe';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import CookieConsent from './Cookies/CookieConsent';
import RODO from './RODO/RODO';

import { CookieConsentProvider } from './Cookies/CookieConsentContext';

function App() {
    return (
        <CookieConsentProvider>
            <HashRouter>
                <CookieConsent />
                <NavigationBar />
                <RODO />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about-me" element={<AboutMe />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </HashRouter>
        </CookieConsentProvider>
    );
}

export default App;