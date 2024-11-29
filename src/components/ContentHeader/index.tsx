import scss from "./ContentHeader.module.scss";

export default function ContentHeader() {
  return (
    <div className={scss.box}>
      <header
        className={`uk-container uk-container-large uk-flex uk-flex-between uk-flex-middle ${scss.header}`}
      >
        <a href="#">
          <img
            src="/assets/images/logo-black-181.png"
            alt="czarne logo 'La Mia Casa'"
            sizes="181px"
            srcSet="/assets/images/logo-black-181.png 181w,
                  /assets/images/logo-black-362.png 362w,
                  /assets/images/logo-black-543.png 543w"
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
    </div>
  );
}
