import './AboutMe.css';
import { useLanguage } from './../LanguageContext';

const bioParagraphs: { [key: string]: string[] } = {
    en: [
        "Engineer, Manager, Consultant and Coach. Graduate of Gdansk University of Technology, MBA and Academy of Leadership Psychology. Engineering project management expert with 30 years of professional experience.",
        "I gained practice by working on virtually every side of the construction and investment process, including in international teams. I have been active in various business areas, from working in local government, managing independent organizational units, running my own business, to managing a listed company. Privately, for many years, I have been a husband, as well as a father of two, already adult, children.",
        "All these experiences allowed me to gain considerable knowledge in human relations. While working on myself, I became more deeply interested in psychology. I found that authenticity, openness, positive thinking, good energy and attentiveness and spirituality have a huge impact on the quality of life and work. I noticed that I was most passionate about working with people. Contact with other people and accompanying them in solving problems gives me the most satisfaction. I know how to use knowledge and experience, I like to help and I enjoy doing it. This is how coaching, in which I am currently developing, came to be on my path of self-development."
    ],
    pl: [
        "Inżynier, Menedżer, Konsultant i Coach. Absolwent Politechniki Gdańskiej, MBA i Akademii Psychologii Przywództwa. Ekspert zarządzania projektami inżynierskimi z 30-sto letnim doświadczeniem zawodowym.",
        "Praktykę zdobywałem pracując właściwie po każdej ze stron  procesu budowlano-inwestycyjnego, także w międzynarodowych zespołach. Działałem w różnych obszarach biznesowych, od pracy w samorządzie, przez kierowanie samodzielnymi komórkami organizacyjnymi, prowadzenie własnej działalności,  po zarządzanie spółką giełdową. Prywatnie, od wielu lat, jestem mężem, a także ojcem dwójki, już dorosłych, dzieci.",
        "Wszystkie te doświadczenia pozwoliły mi zdobyć pokaźną wiedzę w relacjach międzyludzkich. Pracując nad sobą zainteresowałem się głębiej psychologią. Przekonałem się, że autentyczność, otwartość, pozytywne myślenie, dobra energia i uważność oraz duchowość mają ogromny wpływ na jakość życia i pracy. Zauważyłem, że najbardziej pasjonuje mnie praca z ludźmi. Kontakt z drugim człowiekiem i towarzyszeniu mu w rozwiązywaniu problemów daje mi najwięcej satysfakcji. Umiem wykorzystywać wiedzę i doświadczenie, lubię pomagać i chętnie to robię. Tak na mojej drodze samorozwoju znalazł się coaching, w którym się obecnie rozwijam."
    ],
};

function AboutMe() {
    const { language } = useLanguage();

    return (
        <div className="aboutMeContainer">
            <div className="bioSection animateBio">
                {bioParagraphs[language].map((paragraph, index) => (
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