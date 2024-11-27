import scss from "./ModelCard.module.scss";

const STEPS = [
  { title: "Etap 0: ", text: "Rozpoznanie potrzeb" },
  { title: "Etap I: ", text: "Poszukiwanie nieruchomości" },
  { title: "Etap II: ", text: "Weryfikacja nieruchomości" },
  { title: "Etap III: ", text: "Przeprowadzenie transakcji" },
  { title: "Etap IV: ", text: "Wsparcie potransakcyjne" },
  { title: "Etap V: ", text: "Pomoc w organizacji zarządzania wynajmem" },
] as const;

interface ModelCardProps {
  model: string | number;
  title: string;
  subtitle: string;
  region: string;
  regionImg: string;
  notIncludedSteps: number[];
}

export default function ModelCard({
  model,
  title,
  subtitle,
  region,
  regionImg,
  notIncludedSteps,
}: ModelCardProps) {
  return (
    <li className={scss.card}>
      <div className={`uk-position-relative ${scss.modelBox}`}>
        <p className={scss.modelText}>model {model}</p>
        <h3 className={scss.title}>{title}</h3>
        <p className={scss.subtitle}>{subtitle}</p>
      </div>
      <div
        className={`uk-flex uk-flex-between uk-flex-middle ${scss.regionBox}`}
      >
        <p className={scss.regionText}>
          <b>Region: </b>
          {region}
        </p>
        {region === "wzgórza Prosecco" ? (
          <div className="uk-position-relative">
            <img
              loading="lazy"
              src={regionImg}
              alt="mapa Włoch przedstawiająca obszar współpracy"
            />
            <img
              className={`uk-position-absolute ${scss.proseccoImg}`}
              loading="lazy"
              src="/assets/svgs/prosecco-hills.svg"
              alt="wzgórza Prosecco na mapie Włoch"
            />
          </div>
        ) : (
          <img
            loading="lazy"
            src={regionImg}
            alt="mapa Włoch przedstawiająca obszar współpracy"
          />
        )}
      </div>
      <div className={scss.stepsBox}>
        <ul className={`uk-flex uk-flex-column ${scss.stepsList}`}>
          {STEPS.map(({ title, text }, i) => (
            <li className={`uk-flex uk-flex-middle ${scss.stepsItem}`} key={i}>
              <img
                loading="lazy"
                src="/assets/svgs/checkmark.svg"
                alt={notIncludedSteps.includes(i) ? "nie obejmuje" : "obejmuje"}
              />
              <div>
                <p
                  className={scss.stepsText}
                  style={
                    notIncludedSteps.includes(i)
                      ? { textDecoration: "line-through" }
                      : undefined
                  }
                >
                  <b>{title}</b>
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
