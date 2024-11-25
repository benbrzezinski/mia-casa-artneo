import scss from "./ImageShowcase.module.scss";

export default function ImageShowcase() {
  return (
    <div className={`uk-flex uk-flex-column ${scss.box}`}>
      <div className={`uk-position-relative ${scss.trulliBox}`}>
        <img
          loading="lazy"
          src="/assets/images/trulli-540.jpg"
          alt="kamienne budynki Trulli, charakterystyczne dla południowych Włoch"
          sizes="540px"
          srcSet="/assets/images/trulli-540.jpg 540w,
                /assets/images/trulli-1080.jpg 1080w,
                /assets/images/trulli-1620.jpg 1620w"
        />
      </div>
      <div className={`uk-position-relative ${scss.vineyardBox}`}>
        <img
          loading="lazy"
          src="/assets/images/vineyard-540.jpg"
          alt="włoska winnica w malowniczym krajobrazie"
          sizes="540px"
          srcSet="/assets/images/vineyard-540.jpg 540w,
                /assets/images/vineyard-1080.jpg 1080w,
                /assets/images/vineyard-1620.jpg 1620w"
        />
      </div>
    </div>
  );
}
