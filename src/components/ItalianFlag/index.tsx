import scss from "./ItalianFlag.module.scss";

interface ItalianFlagProps {
  direction: "row" | "row-reverse" | "column" | "column-reverse";
  childrenSize: {
    width: number;
    height: number;
  };
  style?: React.CSSProperties;
}

export default function ItalianFlag({
  direction,
  childrenSize,
  style,
}: ItalianFlagProps) {
  return (
    <div
      style={style}
      className={`uk-flex uk-flex-${direction} uk-flex-middle ${scss.box}`}
    >
      <span
        style={{ width: childrenSize.width, height: childrenSize.height }}
        className={scss.red}
      ></span>
      <span
        style={{ width: childrenSize.width, height: childrenSize.height }}
        className={scss.white}
      ></span>
      <span
        style={{ width: childrenSize.width, height: childrenSize.height }}
        className={scss.green}
      ></span>
    </div>
  );
}
