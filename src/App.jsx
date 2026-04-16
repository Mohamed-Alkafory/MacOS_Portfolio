import { Navbar, Welcom, Dock, Home } from "#components";
import {
  Terminal,
  Safari,
  Resume,
  Finder,
  TextFile,
  ImageFile,
  Contact,
  Photos,
} from "#windows";
import useDarkMode from "#store/useDarkMode";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
gsap.registerPlugin(Draggable);
function App() {
  const { isDark } = useDarkMode();
  return (
    <main className={isDark ? "dark" : ""}>
      <Navbar />
      <Welcom />
      <Home />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <TextFile />
      <ImageFile />
      <Contact />
      <Photos />
    </main>
  );
}

export default App;
