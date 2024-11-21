import scss from "./Header.module.scss";

export default function Header() {
  return (
    <header className="uk-flex uk-flex-between uk-flex-middle">
      <a href="#">
        <img
          src="/assets/images/logo-white-215.png"
          alt="logo"
          sizes="215px"
          srcSet="/assets/images/logo-white-215.png 215w,
                  /assets/images/logo-white-430.png 430w,
                  /assets/images/logo-white-645.png 645w,
                  /assets/images/logo-white-860.png 860w"
        />
      </a>
      <nav>
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
              Blog
            </a>
          </li>
          <li>
            <a href="#" className={`uk-link-reset ${scss.link}`}>
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
