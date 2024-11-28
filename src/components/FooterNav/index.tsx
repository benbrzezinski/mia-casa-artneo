import scss from "./FooterNav.module.scss";

export default function FooterNav() {
  return (
    <nav className={scss.nav}>
      <ul className={`uk-flex ${scss.list}`}>
        <li>
          <a href="#" className={`uk-link-reset ${scss.link}`}>
            Home
          </a>
        </li>
        <li>
          <a href="#" className={`uk-link-reset ${scss.link}`}>
            O nas
          </a>
        </li>
        <li>
          <a href="#" className={`uk-link-reset ${scss.link}`}>
            Oferta
          </a>
        </li>
        <li>
          <a href="#" className={`uk-link-reset ${scss.link}`}>
            Opinie klientów
          </a>
        </li>
        <li>
          <a href="#" className={`uk-link-reset ${scss.link}`}>
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
}
