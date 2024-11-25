import scss from "./ServicesOverview.module.scss";

export default function ServicesOverview() {
  return (
    <section className={scss.section}>
      <h3 className={scss.title}>
        Nasza oferta jest kompleksowa i elastyczna &#8211; to Ty decydujesz o
        tym jakiego wsparcia potrzebujesz.
      </h3>
      <p className={scss.text}>
        A dzięki pełnemu wachlarzowi usług i formule „one stop shop”, w jednym
        miejscu znajdziesz wszystko, co pozwoli Ci już wkrótce cieszyć się
        własnym domem we Włoszech.
      </p>
      <p className={`uk-margin-remove ${scss.text}`}>Co oferujemy?</p>
      <ul className={`${scss.list} ${scss.text}`}>
        <li>Doradztwo przy wyborze lokalizacji</li>
        <li>Weryfikacja stanu prawnego i technicznego nieruchomości</li>
        <li>Obsługa transakcji oraz wsparcie potransakcyjne</li>
        <li>Zarządzanie nieruchomościami</li>
        <li>Organizacja wyjazdów w celu oględzin nieruchomości</li>
      </ul>
      <button className={scss.btn} type="button">
        CZYTAJ WIĘCEJ
      </button>
    </section>
  );
}
