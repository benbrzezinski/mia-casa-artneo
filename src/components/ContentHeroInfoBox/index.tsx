import DecorationBox from "../DecorationBox";
import scss from "./ContentHeroInfoBox.module.scss";

interface ContentHeroInfoBoxProps {
  includesText?: boolean;
  boxMarginBottom?: string | number;
}

export default function ContentHeroInfoBox({
  includesText = true,
  boxMarginBottom = 60,
}: ContentHeroInfoBoxProps) {
  return (
    <div className={`uk-container uk-container-large ${scss.wrapper}`}>
      <div className={scss.box}>
        <DecorationBox marginBottom={boxMarginBottom} />
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
