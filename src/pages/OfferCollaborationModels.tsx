import ContentHero from "../containers/ContentHero";
import CollaborationModels from "../containers/CollaborationModels";
import WorkflowSteps from "../containers/WorkflowSteps";
import LeftBorder from "../components/LeftBorder";
import RightBorder from "../components/RightBorder";
import Footer from "../containers/Footer";
import ContentHeroInfoBox from "../components/ContentHeroInfoBox";

export default function OfferCollaborationModels() {
  return (
    <>
      <ContentHero
        bgImg="/assets/images/summer.jpg"
        title="Modele współpracy"
        subtitle="Zakup nieruchomości za granicą to proces wymagający gruntownego przygotowania."
      />
      <main>
        <ContentHeroInfoBox />
        <CollaborationModels elementBelow="text" />
        <WorkflowSteps />
        <LeftBorder height="100%" />
        <RightBorder height="98%" />
      </main>
      <Footer sideLabel={false} />
    </>
  );
}
