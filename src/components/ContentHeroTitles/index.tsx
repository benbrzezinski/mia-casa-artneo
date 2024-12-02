import scss from "./ContentHeroTitles.module.scss";

interface ContentHeroTitlesProps {
  title: string;
  subtitle: string;
}

export default function ContentHeroTitles({
  title,
  subtitle,
}: ContentHeroTitlesProps) {
  return (
    <section
      className={`uk-section uk-container uk-container-large uk-flex uk-flex-column ${scss.section}`}
    >
      <h1 className={`uk-margin-remove ${scss.title}`}>{title}</h1>
      <p className={scss.subtitle}>
        {title === "Modele współpracy" ? (
          <>
            {subtitle.split(" ").slice(0, 2).join(" ")}
            <br />
            {subtitle.split(" ").slice(2).join(" ")}
          </>
        ) : (
          subtitle
        )}
      </p>
    </section>
  );
}
