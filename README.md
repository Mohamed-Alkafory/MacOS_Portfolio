<div align="center">

<h1>🍏 macOS-Portfolio</h1>

<p>An immersive, interactive portfolio that replicates the macOS desktop experience — <br/>with draggable windows, a live dock, and real app interfaces built entirely in React.</p>

<br/>

<br/>
<!-- ─── TECH STACK ────────────────────────────────────────────── -->
<p align="center">
  <a href="https://react.dev">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="50" title="React" />
  </a>
  <a href="https://vitejs.dev">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" height="50" title="Vite" />
  </a>
  <a href="https://tailwindcss.com">
    <img src="https://cdn.simpleicons.org/tailwindcss" height="50" title="Tailwind CSS" />
  </a>
  <a href="https://greensock.com/gsap">
    <img src="https://cdn.simpleicons.org/greensock" height="50" title="GSAP" />
  </a>

<a href="https://zustand-demo.pmnd.rs">
  <img height="50" title="Zustand" alt="image" src="https://github.com/user-attachments/assets/832c240a-7c63-4783-ade9-862cc0bc48c1"/>
</a>

  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="50" title="JavaScript" />
  </a>
  <a href="https://git-scm.com">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="50" title="Git" />
  </a>
</p>

<br/><br/>

[![GitHub](https://img.shields.io/badge/GitHub-Mohamed--Alkafory-181717?style=flat-square&logo=github)](https://github.com/Mohamed-Alkafory)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/Mohamed-Hamed-Alkafory/)
[![Portfolio](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=flat-square&logo=vercel)](https://github.com/Mohamed-Alkafory/MacOS_Portfolio)

</div>

---

## About the Project

This portfolio was engineered to stand apart. Rather than a standard scrollable page, it reconstructs the macOS desktop operating system in the browser — complete with a physics-based dock, multiple draggable windows with Z-index stacking, and distinct application modules. Every interaction is intentionally designed to feel native and responsive.

---

<br/>
## Application Suite

| Icon | App          | Role                                                                                                 |
| :--: | :----------- | :--------------------------------------------------------------------------------------------------- |
|  📂  | **Finder**   | File-explorer interface for browsing projects, reading descriptions, and opening GitHub repositories |
|  📸  | **Photos**   | Apple Photos-style gallery grid for visual work and design showcases                                 |
|  🧭  | **Safari**   | In-window browser UI for displaying technical articles and blog posts                                |
|  ⌨️  | **Terminal** | CLI-style panel rendering the complete tech stack in console format                                  |
|  📬  | **Contact**  | Structured social directory linking to GitHub, LinkedIn, Twitter/X, and Email                        |
|  📄  | **Resume**   | Native PDF viewer opening the CV directly inside the window system                                   |

---

## Engineering Decisions

**Window Management** — Every window is registered in a centralized Zustand store. `open`, `close`, and `focusWindow` actions manage Z-index stacking in real time, so clicking any window always brings it to the front — just like a real OS.

**Dock Magnification** — A custom GSAP mouse-proximity algorithm calculates the distance between the cursor and each dock icon on every frame. An exponential decay function is applied to produce a natural, smooth magnification effect without layout thrashing.

**Variable Font Hero** — The landing text uses a CSS variable font with `fontVariationSettings` driven by GSAP. As you hover across the letters, each character interpolates its font weight individually, simulating a fluid wave effect.

**Higher-Order Window Component** — `WindowWrapper.jsx` is a HOC that injects `Draggable`, `GSAP` mount animations, and focus handlers into any component automatically, keeping all window modules clean and focused on their content.

---

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/Mohamed-Alkafory/MacOS_Portfolio.git

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open **http://localhost:5173** — best experienced on a desktop or tablet display.

---

## Project Structure

```
src/
├── components/       # Dock, Navbar, Welcome, WindowControls
├── hoc/              # WindowWrapper — Draggable + animation injector
├── store/            # window.js · location.js (Zustand slices)
├── windows/          # Finder · Photos · Safari · Terminal · Contact · Resume
├── constants/        # All static data — projects, socials, gallery, locations
└── App.jsx           # Root compositor
```

---

<div align="center">

Designed & built by **Mohamed Alkafory**

[GitHub](https://github.com/Mohamed-Alkafory) · [LinkedIn](https://www.linkedin.com/in/Mohamed-Hamed-Alkafory/) · [alkmohamed40@gmail.com](mailto:alkmohamed40@gmail.com)

</div>
