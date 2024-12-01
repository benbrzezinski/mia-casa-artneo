import scss from "./ProseccoHillsInfo.module.scss";

export default function ProseccoHillsInfo() {
  return (
    <div
      className={`uk-container uk-container-large uk-flex uk-flex-between ${scss.wrapper}`}
    >
      <section className={scss.section}>
        <h3 className={scss.title}>
          Dla osób, które nie podjęły jeszcze decyzji co do konkretnego regionu,
          przygotowaliśmy specjalną ofertę „
          <span className={scss.accent}>
            Odkryj niezwykły region Wzgórz Prosecco
          </span>
          ”, z którego pochodzimy i z którego jesteśmy niezwykle dumni.
        </h3>
        <p className={scss.text}>
          Naszą misją jest pokazanie autentycznego piękna tego wyjątkowego
          miejsca. Proponujemy dwa warianty wyjazdu: regular oraz premium,
          dostosowane do różnych potrzeb i preferencji.
        </p>
      </section>
      <div className={`uk-position-relative ${scss.vineyardToastBox}`}>
        <img
          loading="lazy"
          src="/assets/images/vineyard-toast-540.jpg"
          alt="kieliszki wina musującego na tle winnicy w Prosecco Hills"
          sizes="540px"
          srcSet="/assets/images/vineyard-toast-540.jpg 540w,
                /assets/images/vineyard-toast-1080.jpg 1080w,
                /assets/images/vineyard-toast-1620.jpg 1620w"
        />
      </div>
    </div>
  );
}
