import scss from "./OfferDropdownNav.module.scss";

export default function OfferDropdownNav() {
  return (
    <div className="uk-dropdown uk-padding-remove">
      <ul className="uk-nav uk-dropdown-nav">
        <li className={scss.item}>
          <a
            href="#"
            className={`uk-link-reset uk-padding-remove ${scss.link}`}
          >
            Modele współpracy
          </a>
        </li>
        <li className={scss.item}>
          <a
            href="#"
            className={`uk-link-reset uk-padding-remove ${scss.link}`}
          >
            Organizacja wyjazdów
          </a>
        </li>
        <li className={scss.item}>
          <a
            href="#"
            className={`uk-link-reset uk-padding-remove ${scss.link}`}
          >
            Odkryj Prosecco Hills
          </a>
        </li>
        <li className={scss.item}>
          <a
            href="#"
            className={`uk-link-reset uk-padding-remove ${scss.link}`}
          >
            Administrowanie i wynajem
          </a>
        </li>
        <li className={scss.item}>
          <a
            href="#"
            className={`uk-link-reset uk-padding-remove ${scss.link}`}
          >
            Nasze nieruchomości
          </a>
        </li>
        <li className={scss.item}>
          <a
            href="#"
            className={`uk-link-reset uk-padding-remove ${scss.link}`}
          >
            Case Studies
          </a>
        </li>
      </ul>
    </div>
  );
}
