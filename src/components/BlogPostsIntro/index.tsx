import scss from "./BlogPostsIntro.module.scss";

export default function BlogPostsIntro() {
  return (
    <div className={`uk-flex uk-flex-column uk-flex-middle ${scss.box}`}>
      <div className={`uk-flex uk-flex-middle ${scss.ornamentBox}`}>
        <img
          loading="lazy"
          src="/assets/svgs/ornament.svg"
          alt="złoty kwadrat dekoracyjny"
        />
        <p className={scss.ornamentText}>AKTUALNOŚCI</p>
        <img
          loading="lazy"
          src="/assets/svgs/ornament.svg"
          alt="złoty kwadrat dekoracyjny"
        />
      </div>
      <section
        className={`uk-flex uk-flex-column uk-flex-middle ${scss.section}`}
      >
        <h2 className={scss.title}>OSTATNIO NA BLOGU</h2>
        <p className={scss.text}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </section>
    </div>
  );
}
