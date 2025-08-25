import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar.tsx";
import Hero from "./sections/hero.tsx";
import Cocktails from "./sections/cocktails.tsx";
import About from "./sections/about.tsx";
import TheArt from "./sections/the-art.tsx";
import Menu from "./sections/menu.tsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <TheArt />
      <Menu />
    </main>
  );
}
