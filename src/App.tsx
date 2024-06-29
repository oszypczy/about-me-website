import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavigationBar from './NavigationBar';
import AboutMe from './AboutMe/AboutMe';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import CookieConsent from './CookieConsent';

function App() {
    return (
        <BrowserRouter>
            <CookieConsent />
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;