import scss from "./ContentHeroTitles.module.scss";

export default function ContentHeroTitles() {
  return (
    <section
      className={`uk-section uk-container uk-container-large uk-flex uk-flex-column ${scss.section}`}
    >
      <h1 className={`uk-margin-remove ${scss.title}`}>Modele współpracy</h1>
      <p className={scss.subtitle}>
        Zakup nieruchomości
        <br />
        za granicą to proces wymagający gruntownego przygotowania.
      </p>
    </section>
  );
}
