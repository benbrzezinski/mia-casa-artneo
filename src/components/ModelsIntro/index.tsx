import scss from "./ModelsIntro.module.scss";

export default function ModelsIntro() {
  return (
    <div className={`uk-flex uk-flex-column uk-flex-middle ${scss.box}`}>
      <div className={`uk-flex uk-flex-middle ${scss.ornamentBox}`}>
        <img
          loading="lazy"
          src="/assets/svgs/ornament.svg"
          alt="złoty kwadrat dekoracyjny"
        />
        <p className={scss.ornamentText}>POZNAJ</p>
        <img
          loading="lazy"
          src="/assets/svgs/ornament.svg"
          alt="złoty kwadrat dekoracyjny"
        />
      </div>
      <section
        className={`uk-flex uk-flex-column uk-flex-middle ${scss.section}`}
      >
        <h2 className={scss.title}>Modele współpracy</h2>
        <p className={scss.text}>
          Aby jak najlepiej odpowiadać na zróżnicowane potrzeby, przygotowaliśmy
          trzy modele współpracy, które odpowiadają najczęściej spotykanym
          wymaganiom stawianym przez klientów. Dzięki naszemu elastycznemu
          podejściu, możemy indywidualnie dostosować zakres naszych działań,
          oferując wsparcie w całym procesie lub na wybranych przez klienta
          etapach
        </p>
      </section>
    </div>
  );
}
