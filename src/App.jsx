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
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
gsap.registerPlugin(Draggable);
function App() {
  return (
    <main>
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
