import scss from "./DecorationBox.module.scss";

interface DecorationBoxProps {
  marginBottom: string | number;
}

export default function DecorationBox({ marginBottom }: DecorationBoxProps) {
  return <div className={scss.decoration} style={{ marginBottom }}></div>;
}
