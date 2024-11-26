import Header from "../../components/Header";
import LeftSidebar from "../../components/LeftSidebar";
import RightSidebar from "../../components/RightSidebar";
import TitleBox from "../../components/TitleBox";
import scss from "./Hero.module.scss";

export default function Hero() {
  return (
    <div
      className={`uk-flex uk-flex-column uk-background-cover uk-position-relative ${scss.wrapper}`}
      data-src="/assets/images/spring.jpg"
      data-uk-img="loading: eager"
    >
      <Header />
      <TitleBox />
      <LeftSidebar />
      <RightSidebar />
    </div>
  );
}
