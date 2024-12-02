import ContentHero from "../containers/ContentHero";
import LeftBorder from "../components/LeftBorder";
import RightBorder from "../components/RightBorder";
import Footer from "../containers/Footer";
import OrganizedTripsInfo from "../components/OrganizedTripsInfo";
import DecorationBorder from "../components/DecorationBorder";
import ContentHeroInfoBox from "../components/ContentHeroInfoBox";

export default function OfferOrganizedTrips() {
  return (
    <>
      <ContentHero
        bgImg="/assets/images/organized-trips.jpg"
        title="Organizacja wyjazdów"
        subtitle="Lorem ipsum dolorertes etamet"
      />
      <main>
        <ContentHeroInfoBox includesText={false} boxMarginBottom={0} />
        <OrganizedTripsInfo />
        <DecorationBorder bottom={0} left={161} width={1} height="98%" />
        <LeftBorder height="100%" />
        <RightBorder height="100%" />
      </main>
      <Footer sideLabel={false} />
    </>
  );
}
