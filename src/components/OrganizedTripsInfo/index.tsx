import scss from "./OrganizedTripsInfo.module.scss";

export default function OrganizedTripsInfo() {
  return (
    <div
      className={`uk-container uk-container-large uk-flex uk-flex-between ${scss.wrapper}`}
    >
      <section className={scss.section}>
        <h3 className={scss.title}>
          Poza standardową ofertą w zakresie obsługi samego zakupu
          nieruchomości, naszym klientom oferujemy również możliwość
          zorganizowania wyjazdów, które umożliwią nie tylko obejrzenie
          wybranych nieruchomości, ale także poznanie pobliskiej okolicy.
        </h3>
        <p className={scss.text}>
          Dzięki temu klienci mogą sprawdzić, czy dany region odpowiada ich
          stylowi życia i czy rzeczywiście chcieliby tam zamieszkać. Na
          życzenie, możemy towarzyszyć w takiej podróży na terenie całych Włoch,
          zapewniając wsparcie na każdym etapie.
        </p>
      </section>
      <div className={`uk-position-relative ${scss.trulliBox}`}>
        <img
          loading="lazy"
          src="/assets/images/trulli-540.jpg"
          alt="kamienne budynki Trulli, charakterystyczne dla południowych Włoch"
          sizes="540px"
          srcSet="/assets/images/trulli-540.jpg 540w,
                /assets/images/trulli-1080.jpg 1080w,
                /assets/images/trulli-1620.jpg 1620w"
        />
      </div>
    </div>
  );
}
