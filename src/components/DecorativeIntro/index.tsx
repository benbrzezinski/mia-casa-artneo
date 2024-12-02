import DecorativeBox from "../DecorativeBox";
import scss from "./DecorativeIntro.module.scss";

interface DecorativeIntroProps {
  includesText?: boolean;
  boxMarginBottom?: string | number;
}

export default function DecorativeIntro({
  includesText = true,
  boxMarginBottom = 60,
}: DecorativeIntroProps) {
  return (
    <div className={`uk-container uk-container-large ${scss.wrapper}`}>
      <div className={scss.box}>
        <DecorativeBox marginBottom={boxMarginBottom} />
        {includesText && (
          <p className={scss.text}>
            Niezbędna jest znajomość języka, przepisów prawa, specyfiki
            lokalnego rynku, a także lokalnych zwyczajów. Nie inaczej jest we
            Włoszech &#8211; choć podstawowe zasady nie różnią się znacząco od
            polskich, to właśnie szczegółowa wiedza i praktyka stanowią klucz do
            sukcesu.
          </p>
        )}
      </div>
    </div>
  );
}
