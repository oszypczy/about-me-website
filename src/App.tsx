import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavigationBar from './NavigationBar';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
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