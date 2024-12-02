import ItalianSideLabel from "../ItalianSideLabel";
import scss from "./LeftSidebar.module.scss";

export default function LeftSidebar() {
  return (
    <div
      className={`uk-flex uk-flex-column uk-flex-between uk-flex-middle uk-position-absolute ${scss.box}`}
    >
      <ItalianSideLabel labelColor="#fff" />
      <ul className={`uk-flex uk-flex-column ${scss.list}`}>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer nofollow">
            <img src="/assets/svgs/instagram.svg" alt="instagram" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer nofollow">
            <img src="/assets/svgs/facebook.svg" alt="facebook" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer nofollow">
            <img src="/assets/svgs/linkedin.svg" alt="linkedin" />
          </a>
        </li>
        <li>
          <a href="#blog">
            <img src="/assets/svgs/arrow-down.svg" alt="arrow down" />
          </a>
        </li>
      </ul>
    </div>
  );
}
