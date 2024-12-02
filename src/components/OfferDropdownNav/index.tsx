import { NavLink } from "react-router";
import scss from "./OfferDropdownNav.module.scss";

export default function OfferDropdownNav() {
  return (
    <div className="uk-dropdown uk-padding-remove">
      <ul>
        <li className={scss.item}>
          <NavLink
            to="/oferta/modele-wspolpracy"
            className={({ isActive }) =>
              isActive
                ? `uk-link-reset uk-padding-remove ${scss.link} ${scss.active}`
                : `uk-link-reset uk-padding-remove ${scss.link}`
            }
          >
            Modele współpracy
          </NavLink>
        </li>
        <li className={scss.item}>
          <NavLink
            to="/oferta/organizacja-wyjazdow"
            className={({ isActive }) =>
              isActive
                ? `uk-link-reset uk-padding-remove ${scss.link} ${scss.active}`
                : `uk-link-reset uk-padding-remove ${scss.link}`
            }
          >
            Organizacja wyjazdów
          </NavLink>
        </li>
        <li className={scss.item}>
          <NavLink
            to="/oferta/prosecco-hills"
            className={({ isActive }) =>
              isActive
                ? `uk-link-reset uk-padding-remove ${scss.link} ${scss.active}`
                : `uk-link-reset uk-padding-remove ${scss.link}`
            }
          >
            Odkryj Prosecco Hills
          </NavLink>
        </li>
        <li className={scss.item}>
          <NavLink
            to="/"
            className={`uk-link-reset uk-padding-remove ${scss.link}`}
          >
            Administrowanie i wynajem
          </NavLink>
        </li>
        <li className={scss.item}>
          <NavLink
            to="/"
            className={`uk-link-reset uk-padding-remove ${scss.link}`}
          >
            Nasze nieruchomości
          </NavLink>
        </li>
        <li className={scss.item}>
          <NavLink
            to="/"
            className={`uk-link-reset uk-padding-remove ${scss.link}`}
          >
            Case Studies
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
