import './AboutMe.css';
import { useTranslation } from 'react-i18next';

function AboutMe() {
    const { t } = useTranslation();

    return (
        <div className="aboutMeContainer">
            <div className="bioSection animateBio">
                {(t('bioParagraphs', { returnObjects: true }) as string[]).map((paragraph, index) => (
                    <div key={index} className="bioParagraph">
                        <p>{paragraph}</p>
                    </div>
                ))}
            </div>
            <div className="imageSection animateImage">
                <img src="/zdj_glowne.jpg" alt="Me" />
                <div className="imageName">Marcin J. Szerszeń</div>
            </div>
        </div>
    );
}

export default AboutMe;