import { Link, NavLink, useLocation } from "react-router";
import OfferDropdownNav from "../OfferDropdownNav";
import scss from "./ContentHeader.module.scss";

export default function ContentHeader() {
  const { pathname } = useLocation();

  return (
    <div className={`uk-position-relative ${scss.box}`}>
      <header
        className={`uk-container uk-container-large uk-flex uk-flex-between uk-flex-middle ${scss.header}`}
      >
        <Link to="/">
          <img
            src="/assets/images/logo-black-181.png"
            alt="czarne logo 'La Mia Casa'"
            sizes="181px"
            srcSet="/assets/images/logo-black-181.png 181w,
                    /assets/images/logo-black-362.png 362w,
                    /assets/images/logo-black-543.png 543w"
          />
        </Link>
        <nav>
          <ul
            className={`uk-flex ${scss.list}`}
            data-uk-dropnav="align: center; animation: uk-animation-slide-top-small; animate-out: true; offset: 81;"
          >
            <li>
              <NavLink
                to="/"
                className={`uk-link-reset uk-position-relative ${scss.link}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={`uk-link-reset uk-position-relative ${scss.link}`}
              >
                O nas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/oferta/modele-wspolpracy"
                className={
                  pathname.includes("oferta")
                    ? `uk-link-reset uk-position-relative ${scss.link} ${scss.active}`
                    : `uk-link-reset uk-position-relative ${scss.link}`
                }
              >
                Oferta
              </NavLink>
              <OfferDropdownNav />
            </li>
            <li>
              <NavLink
                to="/"
                className={`uk-link-reset uk-position-relative ${scss.link}`}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={`uk-link-reset uk-position-relative ${scss.link}`}
              >
                Kontakt
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
