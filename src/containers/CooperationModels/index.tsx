import ModelsIntro from "../../components/ModelsIntro";
import ModelsOverview from "../../components/ModelsOverview";
import scss from "./CooperationModels.module.scss";

export default function CooperationModels() {
  return (
    <div className={`uk-container uk-container-large ${scss.wrapper}`}>
      <ModelsIntro />
      <ModelsOverview />
    </div>
  );
}
