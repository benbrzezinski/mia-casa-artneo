import ContentHeader from "../../components/ContentHeader";
import ContentHeroInfoBox from "../../components/ContentHeroInfoBox";
import ContentHeroTitles from "../../components/ContentHeroTitles";
import ItalianSideLabel from "../../components/ItalianSideLabel";
import scss from "./ContentHero.module.scss";

interface ContentHeroProps {
  bgImg: string;
  title: string;
  subtitle: string;
}

export default function ContentHero({
  bgImg,
  title,
  subtitle,
}: ContentHeroProps) {
  return (
    <div className={`uk-position-relative ${scss.wrapper}`}>
      <ItalianSideLabel style={{ position: "absolute", top: 60, left: 26 }} />
      <div
        className={`uk-background-cover ${scss.box}`}
        data-src={bgImg}
        data-uk-img="loading: eager"
      >
        <ContentHeader />
        <ContentHeroTitles title={title} subtitle={subtitle} />
      </div>
      <ContentHeroInfoBox />
    </div>
  );
}
