import scss from "./FooterInfo.module.scss";

export default function FooterInfo() {
  return (
    <div className={`uk-flex ${scss.box}`}>
      <ul>
        <li>
          <p className={scss.text}>
            <b>La Mia Casa.</b>, Ul. Cementowa 3a
          </p>
        </li>
        <li>
          <p className={scss.text}>10-429 Olsztyn</p>
        </li>
        <li>
          <p className={scss.text}>
            e-mail:{" "}
            <a
              href="mailto:emilia.kulmaczewska@lamiacasa.pl"
              id={scss.link}
              className="uk-link-reset"
            >
              emilia.kulmaczewska@lamiacasa.pl
            </a>
          </p>
        </li>
        <li>
          <p className={scss.text}>
            nr telefonu:{" "}
            <a href="tel:+48506981482" id={scss.link} className="uk-link-reset">
              506 981 482
            </a>
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <p className={scss.text}>
            <b>La Mia Casa.</b>, Piazza IV Novembre, 20
          </p>
        </li>
        <li>
          <p className={scss.text}>31051 Follina (TV)</p>
        </li>
        <li>
          <p className={scss.text}>
            e-mail:{" "}
            <a
              href="mailto:info@lamiacasa.it"
              id={scss.link}
              className="uk-link-reset"
            >
              info@lamiacasa.it
            </a>
          </p>
        </li>
        <li>
          <p className={scss.text}>
            nr telefonu:{" "}
            <a
              href="tel:+390438970492"
              id={scss.link}
              className="uk-link-reset"
            >
              0438970492
            </a>
          </p>
        </li>
      </ul>
    </div>
  );
}
