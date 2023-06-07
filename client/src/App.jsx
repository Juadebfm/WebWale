import Amazon from "./components/Amazon";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <div className="">
        <Navbar />
        <Hero />
      </div>
      <Amazon />
    </div>
  );
}
