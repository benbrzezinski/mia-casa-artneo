import ItalianFlag from "../ItalianFlag";
import scss from "./FeaturedImage.module.scss";

export default function FeaturedImage() {
  return (
    <div className={`uk-position-relative ${scss.box}`}>
      <div className={`uk-position-absolute ${scss.frame}`}>
        <div className={`uk-position-relative ${scss.snailsBox}`}>
          <img
            loading="lazy"
            src="/assets/svgs/snails.svg"
            alt="dekoracyjny element w kształcie spirali/ślimaka"
            className={`uk-position-absolute ${scss.snailsImg}`}
          />
        </div>
      </div>
      <ItalianFlag
        direction="row-reverse"
        childrenSize={{ width: 19, height: 11 }}
        style={{ position: "absolute", top: "8%", left: "13%" }}
      />
      <img
        loading="lazy"
        src="/assets/images/lake-623.jpg"
        alt="panorama włoskiego jeziora z kolorowymi budynkami na tle gór"
        sizes="623px"
        srcSet="/assets/images/lake-623.jpg 623w,
                /assets/images/lake-1246.jpg 1246w,
                /assets/images/lake-1869.jpg 1869w"
      />
    </div>
  );
}
