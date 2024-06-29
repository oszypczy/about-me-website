import { useState } from 'react';
import './Home.css';

function Home() {
    const [isSecondWindowVisible, setIsSecondWindowVisible] = useState(false);

    const toggleSecondWindow = () => {
        setIsSecondWindowVisible(prevState => !prevState);
    };

    return (
        <div>
            <button key={isSecondWindowVisible ? 'left' : 'right'} onClick={toggleSecondWindow} className={isSecondWindowVisible ? 'left-arrow' : 'right-arrow'}>
                {isSecondWindowVisible ? '←' : '→'}
            </button>
            <div className="window-container">
                <div className="first-window" style={{ display: isSecondWindowVisible ? 'none' : 'flex' }}>
                    <h1>Life & Business ENGI'n'EERing</h1>
                    <h2>INŻYNIERIA ZARZĄDZANIE</h2>
                    <h2>KONSULTING COACHING</h2>
                    <p>"Wszystkie odpowiedzi, których potrzebujemy, są w nas."</p>
                </div>
                <div className="second-window" style={{ display: isSecondWindowVisible ? 'flex' : 'none' }}>
                    <div className="second-window-topic">
                        <h1>WSPARCIE BIZNESOWE, TECHNICZNE I MENTALNE</h1>
                    </div>
                    <div className="second-window-description">
                        <p>Chcesz przejść przez proces transformacji w swoim życiu zawodowym lub osobistymi? Chcesz się w czymś rozwinąć, usprawnić, poprawić lub rozwiązać jakiś problem? Nie wiesz jak się za to zabrać? Chętnie Ci w tym potowarzyszę w konwencji jeden na jeden. Wiem jak się tym zająć.
                            Potrzebujesz doradztwa biznesowego czy inżynierskiego lub w zarządzaniu projektami albo na innych polach organizacyjnych czy kontraktowych, negocjacyjnych? Szukasz wsparcia technicznego w szeroko rozumianej inżynierii cywilnej? Również wiem jak Ci pomóc.</p>
                    </div>
                    <div className="second-window-experience">
                        <p>Multidyscyplinarne doświadczenia z obszarów:</p>
                        <ul>
                            <li>konsulting biznesowy, inżynierski</li>
                            <li>coaching, mentoring inżynierski</li>
                            <li>executive coaching, life coaching</li>
                            <li>relacje międzyludzkie, psychologia</li>
                            <li>negocjacje, szkolenia, treningi</li>
                            <li>zarządzanie strategiczne i operacyjne (organizacja, budżet, personel)</li>
                            <li>zarządzanie projektami inżynierskimi</li>
                            <li>zarządzanie roszczeniami</li>
                            <li>przygotowanie procesu inwestycyjnego</li>
                            <li>opracowania dokumentacyjne</li>
                            <li>ekspertyzy, opinie, audyty</li>
                            <li>prowadzenie kontraktów: realizacja, nadzór, rozliczanie</li>
                            <li>pełnienie samodzielnych funkcji technicznych i kontraktowych</li>
                            <li>drogi, konstrukcje, obiekty inżynierskie, energetyka (OZE)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
