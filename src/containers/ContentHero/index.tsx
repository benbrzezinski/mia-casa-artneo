import ContentHeader from "../../components/ContentHeader";
import ContentHeroTitles from "../../components/ContentHeroTitles";
import scss from "./ContentHero.module.scss";

export default function ContentHero() {
  return (
    <div className={`uk-flex uk-flex-column ${scss.wrapper}`}>
      <div
        className={`uk-background-cover ${scss.box}`}
        data-src="/assets/images/summer.jpg"
        data-uk-img="loading: eager"
      >
        <ContentHeader />
        <ContentHeroTitles />
      </div>
    </div>
  );
}
