import ContentHero from "../containers/ContentHero";
import CooperationModels from "../containers/CooperationModels";

export default function Offer() {
  return (
    <>
      <ContentHero />
      <main>
        <CooperationModels elementBelow="text" />
      </main>
    </>
  );
}
