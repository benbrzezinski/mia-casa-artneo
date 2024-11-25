import scss from "./AboutAgency.module.scss";

export default function AboutAgency() {
  return (
    <section className={scss.section}>
      <h3 className={scss.title}>
        Jesteśmy pierwszą włoską agencją nieruchomości, która oficjalnie
        wkroczyła na polski rynek.
      </h3>
      <p className={scss.text}>
        Jako firma z włoskimi korzeniami, głęboko osadzonymi w tradycji i
        doświadczeniu, postanowiliśmy rozszerzyć zakres naszej działalności, by
        lepiej odpowiadać na potrzeby polskich klientów zainteresowanych zakupem
        nieruchomości we Włoszech. W odróżnieniu od typowych rozwiązań
        dostępnych na rynku, my oferujemy coś więcej.
      </p>
      <button className={scss.btn} type="button">
        CZYTAJ WIĘCEJ
      </button>
    </section>
  );
}
