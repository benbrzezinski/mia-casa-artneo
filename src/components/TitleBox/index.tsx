import scss from "./TitleBox.module.scss";

export default function TitleBox() {
  return (
    <section
      className={`uk-section uk-section-large uk-container uk-container-large ${scss.section}`}
    >
      <h1 className={scss.title}>
        Twoje marzenie
        <br />o włoskim domu zaczyna się tutaj!
      </h1>
      <p className={scss.text}>
        z nami
        <br />
        odkryjesz
        <br />
        prawdziwe Włochy!
      </p>
      <button type="button" className={scss.btn}>
        CZYTAJ WIĘCEJ
      </button>
    </section>
  );
}
