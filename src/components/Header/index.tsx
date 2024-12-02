import { Link } from "react-router";
import scss from "./Header.module.scss";

export default function Header() {
  return (
    <header
      className={`uk-container uk-container-large uk-flex uk-flex-between uk-flex-middle ${scss.header}`}
    >
      <Link to="/">
        <img
          src="/assets/images/logo-white-215.png"
          alt="białe logo 'La Mia Casa'"
          sizes="215px"
          srcSet="/assets/images/logo-white-215.png 215w,
                  /assets/images/logo-white-430.png 430w,
                  /assets/images/logo-white-645.png 645w"
        />
      </Link>
      <nav>
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
              Blog
            </Link>
          </li>
          <li>
            <Link to="/" className={`uk-link-reset ${scss.link}`}>
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
