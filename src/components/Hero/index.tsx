import Header from "../Header";
import LeftSidebar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TitleBox from "../TitleBox";
import scss from "./Hero.module.scss";

export default function Hero() {
  return (
    <div
      className={`uk-flex uk-flex-column uk-background-cover ${scss.wrapper}`}
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
