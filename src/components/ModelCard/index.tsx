import scss from "./ModelCard.module.scss";

const STEPS = [
  { title: "Etap 0: ", text: "Rozpoznanie potrzeb" },
  { title: "Etap I: ", text: "Poszukiwanie nieruchomości" },
  { title: "Etap II: ", text: "Weryfikacja nieruchomości" },
  { title: "Etap III: ", text: "Przeprowadzenie transakcji" },
  { title: "Etap IV: ", text: "Wsparcie potransakcyjne" },
  { title: "Etap V: ", text: "Pomoc w organizacji zarządzania wynajmem" },
] as const;

export default function ModelCard() {
  return (
    <div>
      <div className={`uk-position-relative ${scss.modelBox}`}>
        <p className={scss.modelText}>model 01</p>
        <h3 className={scss.title}>Kompleksowe wsparcie</h3>
        <p className={scss.subtitle}>Wyszukiwanie + Weryfikacja + Zakup</p>
      </div>
      <div
        className={`uk-flex uk-flex-between uk-flex-middle ${scss.regionBox}`}
      >
        <p className={scss.regionText}>
          <b>Region: </b>całe Włochy
        </p>
        <img
          loading="lazy"
          src="/assets/svgs/italy.svg"
          alt="mapa Włoch przedstawiająca obszar współpracy"
        />
      </div>
      <div className={scss.stepsBox}>
        <ul className={`uk-flex uk-flex-column ${scss.stepsList}`}>
          {STEPS.map(({ title, text }, i) => (
            <li className={`uk-flex uk-flex-middle ${scss.stepsItem}`} key={i}>
              <img
                loading="lazy"
                src="/assets/svgs/checkmark.svg"
                alt="obejmuje"
              />
              <div>
                <p className={scss.stepsText}>
                  <b>{title}</b>
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
