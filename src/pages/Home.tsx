import Hero from "../components/Hero";
import Introduction from "../components/Introduction";

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
      </main>
    </>
  );
}
