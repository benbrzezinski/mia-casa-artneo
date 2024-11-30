import ContentHero from "../containers/ContentHero";
import CollaborationModels from "../containers/CollaborationModels";
import WorkflowSteps from "../containers/WorkflowSteps";
import LeftBorder from "../components/LeftBorder";
import RightBorder from "../components/RightBorder";
import Footer from "../containers/Footer";

export default function Offer() {
  return (
    <>
      <ContentHero />
      <main>
        <CollaborationModels elementBelow="text" />
        <WorkflowSteps />
        <LeftBorder height="100%" />
        <RightBorder height="98%" />
      </main>
      <Footer sideLabel={false} />
    </>
  );
}
