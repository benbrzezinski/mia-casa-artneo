import { Link } from "react-router";
import scss from "./FooterNav.module.scss";

export default function FooterNav() {
  return (
    <nav className={scss.nav}>
      <ul className={`uk-flex ${scss.list}`}>
        <li>
          <Link to="/" className={`uk-link-reset ${scss.link}`}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className={`uk-link-reset ${scss.link}`}>
            O nas
          </Link>
        </li>
        <li>
          <Link
            to="/oferta/modele-wspolpracy"
            className={`uk-link-reset ${scss.link}`}
          >
            Oferta
          </Link>
        </li>
        <li>
          <Link to="/" className={`uk-link-reset ${scss.link}`}>
            Opinie klientów
          </Link>
        </li>
        <li>
          <Link to="/" className={`uk-link-reset ${scss.link}`}>
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
