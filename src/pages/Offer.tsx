import ContentHero from "../containers/ContentHero";
import CollaborationModels from "../containers/CollaborationModels";
import WorkflowSteps from "../containers/WorkflowSteps";

export default function Offer() {
  return (
    <>
      <ContentHero />
      <main>
        <CollaborationModels elementBelow="text" />
        <WorkflowSteps />
      </main>
    </>
  );
}
