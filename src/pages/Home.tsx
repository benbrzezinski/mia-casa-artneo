import DecorationBorder from "../components/DecorationBorder";
import LeftBorder from "../components/LeftBorder";
import RightBorder from "../components/RightBorder";
import CollaborationModels from "../containers/CollaborationModels";
import Footer from "../containers/Footer";
import Hero from "../containers/Hero";
import Introduction from "../containers/Introduction";
import LatestBlogPosts from "../containers/LatestBlogPosts";

export default function Home() {
  return (
    <>
      <Hero />
      <main style={{ paddingInline: 100 }}>
        <Introduction />
        <CollaborationModels elementBelow="button" />
        <LatestBlogPosts />
        <DecorationBorder top={0} left={161} width={1} height={734} />
        <LeftBorder height="98%" />
        <RightBorder height="98%" />
      </main>
      <Footer />
    </>
  );
}
