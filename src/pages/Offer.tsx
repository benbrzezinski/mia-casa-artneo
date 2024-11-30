import ContentHero from "../containers/ContentHero";
import CollaborationModels from "../containers/CollaborationModels";

export default function Offer() {
  return (
    <>
      <ContentHero />
      <main>
        <CollaborationModels elementBelow="text" />
      </main>
    </>
  );
}
