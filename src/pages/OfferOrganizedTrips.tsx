import ContentHero from "../containers/ContentHero";
import LeftBorder from "../components/LeftBorder";
import RightBorder from "../components/RightBorder";
import Footer from "../containers/Footer";
import OrganizedTripsInfo from "../components/OrganizedTripsInfo";
import DecorationBorder from "../components/DecorationBorder";

export default function OfferOrganizedTrips() {
  return (
    <>
      <ContentHero
        bgImg="/assets/images/organized-trips.jpg"
        title="Organizacja wyjazdów"
        subtitle="Lorem ipsum dolorertes etamet"
      />
      <main>
        <OrganizedTripsInfo />
        <DecorationBorder bottom={0} left={161} width={1} height="99%" />
        <LeftBorder height="100%" />
        <RightBorder height="100%" />
      </main>
      <Footer sideLabel={false} />
    </>
  );
}
