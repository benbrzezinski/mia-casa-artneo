import ItalianFlag from "../ItalianFlag";
import scss from "./ItalianSideLabel.module.scss";

interface ItalianSideLabelProps {
  labelColor?: string;
  middleChildColor?: string;
  style?: React.CSSProperties;
}

export default function ItalianSideLabel({
  labelColor,
  middleChildColor,
  style,
}: ItalianSideLabelProps) {
  return (
    <div className="uk-flex uk-flex-column uk-flex-middle" style={style}>
      <ItalianFlag
        direction="column"
        childrenSize={{ width: 7, height: 19 }}
        middleChildColor={middleChildColor}
      />
      <p className={scss.text} style={{ color: labelColor }}>
        WŁOSKA AGENCJA NIERUCHOMOŚCI
      </p>
    </div>
  );
}
