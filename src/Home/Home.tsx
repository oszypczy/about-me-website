import { useState } from 'react';
import './Home.css';
import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();
    const [isSecondWindowVisible, setIsSecondWindowVisible] = useState(false);

    const toggleSecondWindow = () => {
        setIsSecondWindowVisible(prevState => !prevState);
    };

    return (
        <div>
            <div className="window-container">
                <div className="first-window" style={{ display: isSecondWindowVisible ? 'none' : 'flex' }}>
                    <h1>{t('title1')}</h1>
                    <h2>{t('title2')}</h2>
                    <h2>{t('title3')}</h2>
                    <p>{t('quote')}</p>
                    <button key={'right'} onClick={toggleSecondWindow} className={'right-arrow'}>
                        {'→'}
                    </button>
                </div>
                <div className="second-window" style={{ display: isSecondWindowVisible ? 'flex' : 'none' }}>
                    <div className="second-window-topic">
                        <h1>{t('secondWindowTitle')}</h1>
                    </div>
                    <div className="second-window-description">
                        <p>{t('secondWindowDescription')}</p>
                    </div>
                    <div className="second-window-experience">
                        <p>{t('experienceTitle')}</p>
                        <ul>
                            {(t('experiences', { returnObjects: true }) as string[]).map((experience, index) => (
                                <li key={index}>{experience}</li>
                            ))}
                        </ul>
                    </div>
                    <button key={'left'} onClick={toggleSecondWindow} className={'left-arrow'}>
                        {'←'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
