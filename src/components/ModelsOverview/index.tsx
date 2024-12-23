import ModelCard from "../ModelCard";
import scss from "./ModelsOverview.module.scss";

const CARDS_DETAILS = [
  {
    model: "01",
    title: "Kompleksowe wsparcie",
    subtitle: "Wyszukiwanie + Weryfikacja + Zakup",
    region: "całe Włochy",
    regionImg: "/assets/svgs/italy.svg",
    notIncludedSteps: [],
  },
  {
    model: "02",
    title: "Wsparcie przy zakupie",
    subtitle: "Weryfikacja + Zakup",
    region: "całe Włochy",
    regionImg: "/assets/svgs/italy.svg",
    notIncludedSteps: [1],
  },
  {
    model: "03",
    title: "Częściowe wsparcie",
    subtitle: "Zakup",
    region: "wzgórza Prosecco",
    regionImg: "/assets/svgs/italy-muted.svg",
    notIncludedSteps: [1, 2],
  },
];

interface ModelsOverviewProps {
  elementBelow: "button" | "text";
}

export default function ModelsOverview({ elementBelow }: ModelsOverviewProps) {
  return (
    <div className={`uk-flex uk-flex-column uk-flex-middle ${scss.box}`}>
      <ul className={`uk-flex uk-flex-center uk-flex-wrap ${scss.list}`}>
        {CARDS_DETAILS.map(
          ({ model, title, subtitle, region, regionImg, notIncludedSteps }) => (
            <ModelCard
              key={model}
              model={model}
              title={title}
              subtitle={subtitle}
              region={region}
              regionImg={regionImg}
              notIncludedSteps={notIncludedSteps}
            />
          )
        )}
      </ul>
      {elementBelow === "button" ? (
        <button type="button" className={scss.btn}>
          DOWIEDZ SIĘ WIĘCEJ
        </button>
      ) : (
        <p className={scss.text}>
          Trzy podstawowe <span className={scss.accent}>modele współpracy</span>
          , oparte są na kombinacji sześciu etapów prowadzących:
        </p>
      )}
    </div>
  );
}
