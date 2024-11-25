import scss from "./RightSidebar.module.scss";

export default function RightSidebar() {
  return (
    <div className={`uk-position-absolute ${scss.box}`}>
      <ul className={scss.list}>
        <li className={`${scss.item} ${scss.spring}`}>
          <p className={scss.text}>WIOSNA</p>
        </li>
        <li className={`${scss.item} ${scss.winter}`}>
          <p className={scss.text}>ZIMA</p>
        </li>
        <li className={`${scss.item} ${scss.autumn}`}>
          <p className={scss.text}>JESIEŃ</p>
        </li>
        <li className={`${scss.item} ${scss.summer}`}>
          <p className={scss.text}>LATO</p>
        </li>
      </ul>
    </div>
  );
}
