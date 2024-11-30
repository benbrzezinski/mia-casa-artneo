import ModelsIntro from "../../components/ModelsIntro";
import ModelsOverview from "../../components/ModelsOverview";
import scss from "./CollaborationModels.module.scss";

interface CollaborationModelsProps {
  elementBelow: "button" | "text";
}

export default function CollaborationModels({
  elementBelow,
}: CollaborationModelsProps) {
  return (
    <div className={`uk-container uk-container-large ${scss.wrapper}`}>
      <ModelsIntro />
      <ModelsOverview elementBelow={elementBelow} />
    </div>
  );
}
