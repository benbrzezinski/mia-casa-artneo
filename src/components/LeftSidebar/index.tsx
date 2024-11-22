import scss from "./LeftSidebar.module.scss";

export default function LeftSidebar() {
  return (
    <div className={`uk-flex uk-flex-column uk-flex-between ${scss.box}`}>
      <div className="uk-flex uk-flex-column uk-flex-middle">
        <div className={scss.red}></div>
        <div className={scss.white}></div>
        <div className={scss.green}></div>
        <p className={scss.text}>WŁOSKA AGENCJA NIERUCHOMOŚCI</p>
      </div>
      <ul className="uk-flex uk-flex-column uk-flex-middle">
        <li>
          <img src="/assets/svgs/instagram.svg" alt="instagram" />
        </li>
        <li>
          <img src="/assets/svgs/facebook.svg" alt="facebook" />
        </li>
        <li>
          <img src="/assets/svgs/linkedin.svg" alt="linkedin" />
        </li>
      </ul>
    </div>
  );
}
