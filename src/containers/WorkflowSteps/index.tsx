import StepInfo from "../../components/StepInfo";
import scss from "./WorkflowSteps.module.scss";

const STEPS_DETAILS = [
  {
    src: "/assets/images/step-zero-250.jpg",
    alt: "osoba prowadząca rozmowę w celu rozpoznania potrzeb klienta",
    srcSet:
      "/assets/images/step-zero-250.jpg 250w, /assets/images/step-zero-500.jpg 500w, /assets/images/step-zero-750.jpg 750w",
    title: ["Etap 0 - ", "Rozpoznanie potrzeb"],
    text: "Zanim przystąpimy do konkretnej pracy, przykładamy ogromną wagę do poznania klienta i jego oczekiwań. Na tym etapie przeprowadzamy szczegółowy wywiad, który pozwala nam lepiej zrozumieć nie tylko ogólne wymagania dotyczące lokalizacji, budżetu czy standardu, ale także osobiste preferencje klienta. Naszym celem jest spojrzenie na poszukiwaną nieruchomość z jego perspektywy, co czyni ten etap fundamentem każdej współpracy.",
  },
  {
    src: "/assets/images/step-one-250.jpg",
    alt: "spotkanie w celu poszukiwania odpowiedniej nieruchomości",
    srcSet:
      "/assets/images/step-one-250.jpg 250w, /assets/images/step-one-500.jpg 500w, /assets/images/step-one-750.jpg 750w",
    title: ["Etap 1 - ", "Poszukiwanie nieruchomości"],
    text: "Na bazie informacji zebranych w etapie 0 rozpoczynamy aktywne poszukiwania. Dzięki dokładnej analizie potrzeb, selekcjonujemy nieruchomości, które najlepiej odpowiadają oczekiwaniom klienta. To kluczowy moment, w którym klient zaczyna dostrzegać realizację swojej wizji – znalezienia idealnego domu.",
  },
  {
    src: "/assets/images/step-two-250.jpg",
    alt: "ręce sprawdzające dokumenty i plany nieruchomości",
    srcSet:
      "/assets/images/step-two-250.jpg 250w, /assets/images/step-two-500.jpg 500w, /assets/images/step-two-750.jpg 750w",
    title: ["Etap 2 - ", "Weryfikacja nieruchomości"],
    text: "Po dokonaniu wyboru konkretnej nieruchomości niezbędne jest jej dokładne sprawdzenie pod kątem prawnym i technicznym. Niestety, we Włoszech często występują rozbieżności między dokumentacją, a stanem faktycznym nieruchomości, dlatego ten etap ma kluczowe znaczenie, ponieważ może uchronić przed podjęciem błędnej decyzji. Dbamy o to, by każda transakcja była bezpieczna i wolna od nieprzewidzianych komplikacji.",
  },
  {
    src: "/assets/images/step-three-250.jpg",
    alt: "podpisywanie dokumentów dotyczących transakcji",
    srcSet:
      "/assets/images/step-three-250.jpg 250w, /assets/images/step-three-500.jpg 500w, /assets/images/step-three-750.jpg 750w",
    title: ["Etap 3 - ", "Przeprowadzenie transakcji"],
    text: 'Z perspektywy zakupu nieruchomości, sama transakcja może wydawać się jedynie formalnością, przysłowiową "wisienką na torcie", ale tylko pod warunkiem, że cały proces został odpowiednio przygotowany. Po pomyślnym przeprowadzeniu weryfikacji nieruchomości oraz podjęciu przez klienta decyzji o jej zakupie, nadchodzi moment złożenia formalnej oferty sprzedającemu, zorganizowania wszelkich niezbędnych formalności – od uzyskania Codice fiscale (włoskiego odpowiednika polskiego NIP/PESEL) po założenie konta w banku, a następnie, kiedy wszystko jest gotowe spotkanie u notariusza.',
  },
  {
    src: "/assets/images/step-four-250.jpg",
    alt: "dwie osoby omawiające kwestie związane z nieruchomością po transakcji",
    srcSet:
      "/assets/images/step-four-250.jpg 250w, /assets/images/step-four-500.jpg 500w, /assets/images/step-four-750.jpg 750w",
    title: ["Etap 4 - ", "Wsparcie potransakcyjne"],
    text: "Nasza pomoc nie kończy się z chwilą podpisania umowy sprzedaży. Wiemy, że dla wielu klientów ich wyzwania pojawiają się po zakupie, dlatego oferujemy wsparcie również w formalnościach potransakcyjnych – od przepisania mediów i opłacenia podatków po pomoc w organizacji remontu, gdyż dbamy o długoterminowe relacje z naszymi klientami.",
  },
  {
    src: "/assets/images/step-five-250.jpg",
    alt: "przekazywanie kluczy jako element zarządzania wynajmem",
    srcSet:
      "/assets/images/step-five-250.jpg 250w, /assets/images/step-five-500.jpg 500w, /assets/images/step-five-750.jpg 750w",
    title: ["Etap 5 - ", "Zarządzanie wynajmem"],
    text: "W przypadku zainteresowania wynajmem zakupionej nieruchomości, oferujemy kompleksowe zarządzanie za pośrednictwem naszej spółki Follina Servizi. Usługi te obejmują m.in. opłacanie rachunków, dbanie o porządek oraz utrzymanie zieleni. Jeśli nieruchomość znajduje się poza regionem Veneto, pomagamy w znalezieniu lokalnego zarządcy.",
  },
];

export default function WorkflowSteps() {
  return (
    <ul
      className={`uk-container uk-container-large uk-flex uk-flex-column uk-flex-middle ${scss.wrapper}`}
    >
      {STEPS_DETAILS.map(({ src, alt, srcSet, title, text }, i) => (
        <StepInfo
          key={i}
          src={src}
          alt={alt}
          srcSet={srcSet}
          title={title}
          text={text}
        />
      ))}
    </ul>
  );
}
