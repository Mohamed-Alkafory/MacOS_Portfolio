import { Navbar, Welcom, Dock } from "#components";
import { Terminal } from "#windows";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
gsap.registerPlugin(Draggable);
function App() {
  return (
    <main>
      <Navbar />
      <Welcom />
      <Dock />
      <Terminal />
    </main>
  );
}

export default App;
