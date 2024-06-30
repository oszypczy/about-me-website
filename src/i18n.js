import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
        aboutMe: 'About me',
        contact: 'Contact',
        bioParagraphs: [
            "Engineer, Manager, Consultant and Coach. Graduate of Gdansk University of Technology, MBA and Academy of Leadership Psychology. Engineering project management expert with 30 years of professional experience.",
            "I gained practice by working on virtually every side of the construction and investment process, including in international teams. I have been active in various business areas, from working in local government, managing independent organizational units, running my own business, to managing a listed company. Privately, for many years, I have been a husband, as well as a father of two, already adult, children.",
            "All these experiences allowed me to gain considerable knowledge in human relations. While working on myself, I became more deeply interested in psychology. I found that authenticity, openness, positive thinking, good energy and attentiveness and spirituality have a huge impact on the quality of life and work. I noticed that I was most passionate about working with people. Contact with other people and accompanying them in solving problems gives me the most satisfaction. I know how to use knowledge and experience, I like to help and I enjoy doing it. This is how coaching, in which I am currently developing, came to be on my path of self-development."
        ],
        title1: "Life & Business ENGI'n'EERing",
        title2: "MANAGEMENT ENGINEERING",
        title3: "CONSULTING COACHING",
        quote: '"All the answers we need are within us."',
        secondWindowTitle: 'BUSINESS, TECHNICAL AND MENTAL SUPPORT',
        secondWindowDescription: 'Do you want to go through a transformation in your professional or personal life? Do you want to develop, improve, or solve a problem? Not sure how to get started? I am happy to accompany you in a one-on-one format. I know how to deal with it. Do you need business or engineering consulting, or project management support, or help in other organizational, contractual, or negotiation areas? Are you looking for technical support in broadly understood civil engineering? I also know how to help you.',
        experienceTitle: 'Multidisciplinary experiences in areas such as:',
        experiences: [
            'business consulting, engineering consulting',
            'coaching, engineering mentoring',
            'executive coaching, life coaching',
            'human relations, psychology',
            'negotiations, training, workshops',
            'strategic and operational management (organization, budget, personnel)',
            'engineering project management',
            'claims management',
            'investment process preparation',
            'documentation preparation',
            'expert opinions, audits',
            'contract management: implementation, supervision, settlement',
            'performing independent technical and contractual functions',
            'roads, structures, engineering facilities, energy (RES)'
        ],
        cookieMessage: 'We use cookies to improve your experience. By continuing, you agree to our use of cookies.',
        cookieButton: "I Accept the policy",
        popup: "Email sent successfully",
        contact_container: "You can learn more about me by visiting my profile on linkedin",
        email_container: "If I can help you or you need more information, write an email",
        name: "Name",
        message: "Message",
        send: "Send"
    },
  },
  pl: {
    translation: {
        aboutMe: 'O mnie',
        contact: 'Kontakt',
        bioParagraphs: [
            "Inżynier, Menedżer, Konsultant i Coach. Absolwent Politechniki Gdańskiej, MBA i Akademii Psychologii Przywództwa. Ekspert zarządzania projektami inżynierskimi z 30-sto letnim doświadczeniem zawodowym.",
            "Praktykę zdobywałem pracując właściwie po każdej ze stron  procesu budowlano-inwestycyjnego, także w międzynarodowych zespołach. Działałem w różnych obszarach biznesowych, od pracy w samorządzie, przez kierowanie samodzielnymi komórkami organizacyjnymi, prowadzenie własnej działalności,  po zarządzanie spółką giełdową. Prywatnie, od wielu lat, jestem mężem, a także ojcem dwójki, już dorosłych, dzieci.",
            "Wszystkie te doświadczenia pozwoliły mi zdobyć pokaźną wiedzę w relacjach międzyludzkich. Pracując nad sobą zainteresowałem się głębiej psychologią. Przekonałem się, że autentyczność, otwartość, pozytywne myślenie, dobra energia i uważność oraz duchowość mają ogromny wpływ na jakość życia i pracy. Zauważyłem, że najbardziej pasjonuje mnie praca z ludźmi. Kontakt z drugim człowiekiem i towarzyszeniu mu w rozwiązywaniu problemów daje mi najwięcej satysfakcji. Umiem wykorzystywać wiedzę i doświadczenie, lubię pomagać i chętnie to robię. Tak na mojej drodze samorozwoju znalazł się coaching, w którym się obecnie rozwijam."
        ],
        title1: "Life & Business ENGI'n'EERing",
        title2: "INŻYNIERIA ZARZĄDZANIE",
        title3: "KONSULTING COACHING",
        quote: '"Wszystkie odpowiedzi, których potrzebujemy, są w nas."',
        secondWindowTitle: 'WSPARCIE BIZNESOWE, TECHNICZNE I MENTALNE',
        secondWindowDescription: 'Chcesz przejść przez proces transformacji w swoim życiu zawodowym lub osobistymi? Chcesz się w czymś rozwinąć, usprawnić, poprawić lub rozwiązać jakiś problem? Nie wiesz jak się za to zabrać? Chętnie Ci w tym potowarzyszę w konwencji jeden na jeden. Wiem jak się tym zająć. Potrzebujesz doradztwa biznesowego czy inżynierskiego lub w zarządzaniu projektami albo na innych polach organizacyjnych czy kontraktowych, negocjacyjnych? Szukasz wsparcia technicznego w szeroko rozumianej inżynierii cywilnej? Również wiem jak Ci pomóc.',
        experienceTitle: 'Multidyscyplinarne doświadczenia z obszarów:',
        experiences: [
            'konsulting biznesowy, inżynierski',
            'coaching, mentoring inżynierski',
            'executive coaching, life coaching',
            'relacje międzyludzkie, psychologia',
            'negocjacje, szkolenia, treningi',
            'zarządzanie strategiczne i operacyjne (organizacja, budżet, personel)',
            'zarządzanie projektami inżynierskimi',
            'zarządzanie roszczeniami',
            'przygotowanie procesu inwestycyjnego',
            'opracowania dokumentacyjne',
            'ekspertyzy, opinie, audyty',
            'prowadzenie kontraktów: realizacja, nadzór, rozliczanie',
            'pełnienie samodzielnych funkcji technicznych i kontraktowych',
            'drogi, konstrukcje, obiekty inżynierskie, energetyka (OZE)'
        ],
        cookieMessage: 'Używamy plików cookie, aby poprawić jakość korzystania z naszej strony. Kontynuując, zgadzasz się na nasze wykorzystanie plików cookie.',
        cookieButton: "Akceptuję politykę",
        popup: "Email wysłany pomyślnie",
        contact_container: "Więcej o mnie dowiesz się odwiedzając mój profil na linkedin",
        email_container: "Jeżeli mogę Ci pomóc lub potrzebujesz dodatkowych informacji napisz e-mail",
        name: "Imię",
        message: "Wiadomość",
        send: "Wyślij"
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'pl',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
