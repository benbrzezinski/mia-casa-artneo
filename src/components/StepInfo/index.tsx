import scss from "./StepInfo.module.scss";

interface StepInfoProps {
  src: string;
  alt: string;
  srcSet: string;
  title: string[];
  text: string;
}

export default function StepInfo({
  src,
  alt,
  srcSet,
  title,
  text,
}: StepInfoProps) {
  return (
    <li className={`uk-flex ${scss.item}`}>
      <div className={`uk-position-relative ${scss.frame}`}>
        <img
          className={scss.img}
          loading="lazy"
          src={src}
          alt={alt}
          sizes="250px"
          srcSet={srcSet}
        />
      </div>
      <section className={scss.section}>
        <h3 className={scss.title}>
          <span className={scss.bolder}>{title[0]}</span>
          {title[1]}
        </h3>
        <p className={scss.text}>{text}</p>
      </section>
    </li>
  );
}
