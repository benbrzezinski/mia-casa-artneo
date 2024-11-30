import scss from "./RightBorder.module.scss";

interface RightBorderProps {
  height: string | number;
}

export default function RightBorder({ height }: RightBorderProps) {
  return (
    <div
      className={`uk-position-absolute ${scss.border}`}
      style={{ height }}
    ></div>
  );
}
