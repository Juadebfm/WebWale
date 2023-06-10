import Amazon from "./components/Amazon";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div
      className="bg-bg_color text-main_white"
      style={{ fontFamily: "Grotesk" }}
    >
      <div className="">
        <Navbar />
        <Hero />
      </div>
      <Amazon />
    </div>
  );
}
