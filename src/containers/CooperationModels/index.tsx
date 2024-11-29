import ModelsIntro from "../../components/ModelsIntro";
import ModelsOverview from "../../components/ModelsOverview";
import scss from "./CooperationModels.module.scss";

interface CooperationModelsProps {
  elementBelow: "button" | "text";
}

export default function CooperationModels({
  elementBelow,
}: CooperationModelsProps) {
  return (
    <div className={`uk-container uk-container-large ${scss.wrapper}`}>
      <ModelsIntro />
      <ModelsOverview elementBelow={elementBelow} />
    </div>
  );
}
