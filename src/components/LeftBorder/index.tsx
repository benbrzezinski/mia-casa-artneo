import scss from "./LeftBorder.module.scss";

interface LeftBorderProps {
  height: string | number;
}

export default function LeftBorder({ height }: LeftBorderProps) {
  return (
    <div
      className={`uk-position-absolute ${scss.border}`}
      style={{ height }}
    ></div>
  );
}
