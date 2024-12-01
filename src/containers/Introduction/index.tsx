import AboutAgency from "../../components/AboutAgency";
import FeaturedImage from "../../components/FeaturedImage";
import ImageShowcase from "../../components/ImageShowcase";
import ServicesOverview from "../../components/ServicesOverview";
import scss from "./Introduction.module.scss";

export default function Introduction() {
  return (
    <div
      className={`uk-container uk-container-large uk-flex uk-flex-between ${scss.wrapper}`}
    >
      <div className={`uk-flex uk-flex-column ${scss.boxOne}`}>
        <AboutAgency />
        <ImageShowcase />
      </div>
      <div className={`uk-flex uk-flex-column ${scss.boxTwo}`}>
        <FeaturedImage />
        <ServicesOverview />
      </div>
    </div>
  );
}
