import scss from "./DecorativeBorder.module.scss";

interface DecorativeBorderProps {
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  width?: string | number;
  height?: string | number;
}

export default function DecorativeBorder({
  top,
  bottom,
  left,
  width,
  height,
}: DecorativeBorderProps) {
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
