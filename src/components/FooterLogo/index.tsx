import scss from "./FooterLogo.module.scss";

export default function FooterLogo() {
  return (
    <div className={`uk-flex ${scss.box}`}>
      <a href="#" className={`uk-position-relative ${scss.link}`}>
        <img
          loading="lazy"
          src="/assets/images/logo-white-215.png"
          alt="białe logo 'La Mia Casa'"
          sizes="215px"
          srcSet="/assets/images/logo-white-215.png 215w,
                  /assets/images/logo-white-430.png 430w,
                  /assets/images/logo-white-645.png 645w"
        />
      </a>
    </div>
  );
}
