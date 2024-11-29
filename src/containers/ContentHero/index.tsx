import ContentHeader from "../../components/ContentHeader";
import ContentHeroInfoBox from "../../components/ContentHeroInfoBox";
import ContentHeroTitles from "../../components/ContentHeroTitles";
import ItalianSideLabel from "../../components/ItalianSideLabel";
import scss from "./ContentHero.module.scss";

export default function ContentHero() {
  return (
    <div className={`uk-position-relative ${scss.wrapper}`}>
      <ItalianSideLabel style={{ position: "absolute", top: 60, left: 26 }} />
      <div
        className={`uk-background-cover ${scss.box}`}
        data-src="/assets/images/summer.jpg"
        data-uk-img="loading: eager"
      >
        <ContentHeader />
        <ContentHeroTitles />
      </div>
      <ContentHeroInfoBox />
    </div>
  );
}
