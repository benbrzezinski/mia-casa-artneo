import scss from "./FeaturedImage.module.scss";

export default function FeaturedImage() {
  return (
    <div className={`uk-position-relative ${scss.box}`}>
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
