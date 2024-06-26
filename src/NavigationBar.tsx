import { useState } from 'react';
import './NavigationBar.css';

function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={isOpen ? 'isOpen' : ''}>
            <a href="home">SZERSZEN.COnsulting</a>
            <a href="about-me">About me</a>
            <a href="contact">Contact</a>
            <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
        </nav>
    );
}

export default NavigationBar;