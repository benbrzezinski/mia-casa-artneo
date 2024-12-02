import ContentHeroInfoBox from "../components/ContentHeroInfoBox";
import DecorationBorder from "../components/DecorationBorder";
import LeftBorder from "../components/LeftBorder";
import ProseccoHillsInfo from "../components/ProseccoHillsInfo";
import RightBorder from "../components/RightBorder";
import ContentHero from "../containers/ContentHero";
import Footer from "../containers/Footer";

export default function OfferProseccoHills() {
  return (
    <>
      <ContentHero
        bgImg="/assets/images/prosecco-hills.jpg"
        title="Poznaj Prosecco Hills"
        subtitle="Lorem ipsum dolorertes etamet"
      />
      <main>
        <ContentHeroInfoBox includesText={false} boxMarginBottom={0} />
        <ProseccoHillsInfo />
        <DecorationBorder bottom={0} left={161} width={1} height="98%" />
        <LeftBorder height="100%" />
        <RightBorder height="100%" />
      </main>
      <Footer sideLabel={false} />
    </>
  );
}
