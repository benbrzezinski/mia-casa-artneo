import scss from "./DecorativeBox.module.scss";

interface DecorativeBoxProps {
  marginBottom: string | number;
}

export default function DecorativeBox({ marginBottom }: DecorativeBoxProps) {
  return <div className={scss.decoration} style={{ marginBottom }}></div>;
}
