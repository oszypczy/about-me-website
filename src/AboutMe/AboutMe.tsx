import './AboutMe.css';
import { useTranslation } from 'react-i18next';
import image from '/zdj_glowne.jpg';

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
                <img src={image} alt="Me" />
                <div className="imageName">Marcin J. Szerszeń</div>
            </div>
        </div>
    );
}

export default AboutMe;