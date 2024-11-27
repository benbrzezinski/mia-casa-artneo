import ModelCard from "../ModelCard";
import scss from "./ModelsOverview.module.scss";

export default function ModelsOverview() {
  return (
    <div>
      <ul>
        <li className={scss.item}>
          <ModelCard />
        </li>
      </ul>
    </div>
  );
}
