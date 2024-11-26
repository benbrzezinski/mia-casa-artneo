import AboutAgency from "../../components/AboutAgency";
import FeaturedImage from "../../components/FeaturedImage";
import ImageShowcase from "../../components/ImageShowcase";
import ServicesOverview from "../../components/ServicesOverview";
import scss from "./Introduction.module.scss";

export default function Introduction() {
  return (
    <div
      className={`uk-container uk-container-large uk-flex uk-flex-center ${scss.wrapper}`}
    >
      <div>
        <AboutAgency />
        <ImageShowcase />
      </div>
      <div className={scss.box}>
        <FeaturedImage />
        <ServicesOverview />
      </div>
    </div>
  );
}
