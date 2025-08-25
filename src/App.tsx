import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar.tsx";
import Hero from "./sections/hero.tsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}
