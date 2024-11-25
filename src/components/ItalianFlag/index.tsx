import scss from "./ItalianFlag.module.scss";

interface ItalianFlagProps {
  direction: "row" | "row-reverse" | "column" | "column-reverse";
  childrenWidth: number;
  style?: React.CSSProperties;
}

export default function ItalianFlag({
  direction,
  childrenWidth,
  style,
}: ItalianFlagProps) {
  return (
    <div
      style={style}
      className={`uk-flex uk-flex-${direction} uk-flex-middle ${scss.box}`}
    >
      <span style={{ width: childrenWidth }} className={scss.red}></span>
      <span style={{ width: childrenWidth }} className={scss.white}></span>
      <span style={{ width: childrenWidth }} className={scss.green}></span>
    </div>
  );
}
