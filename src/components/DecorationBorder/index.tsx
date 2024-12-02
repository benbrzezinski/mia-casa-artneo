import scss from "./DecorationBorder.module.scss";

interface DecorationBorderProps {
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  width?: string | number;
  height?: string | number;
}

export default function DecorationBorder({
  top,
  bottom,
  left,
  width,
  height,
}: DecorationBorderProps) {
  return (
    <div
      className={`uk-position-absolute ${scss.border}`}
      style={{
        top,
        bottom,
        left,
        width,
        height,
      }}
    ></div>
  );
}
