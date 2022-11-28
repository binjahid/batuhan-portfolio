import Hero from "../sections/Hero";

export default function Home() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Hero />
    </section>
  );
}
