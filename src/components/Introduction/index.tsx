import AboutAgency from "../AboutAgency";
import FeaturedImage from "../FeaturedImage";
import ImageShowcase from "../ImageShowcase";
import ServicesOverview from "../ServicesOverview";
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
