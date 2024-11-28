import CooperationModels from "../containers/CooperationModels";
import Hero from "../containers/Hero";
import Introduction from "../containers/Introduction";
import LatestBlogPosts from "../containers/LatestBlogPosts";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <div
          className="uk-position-absolute"
          style={{
            top: 0,
            left: 160,
            width: 1,
            height: 734,
            backgroundColor: "#cdcdcd",
          }}
        ></div>
        <Introduction />
        <CooperationModels />
        <LatestBlogPosts />
      </main>
    </>
  );
}
