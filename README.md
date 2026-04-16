<div align="center">
<<<<<<< HEAD
  <h1 align="center">macOS-Style Developer Portfolio</h1>

  <p align="center">
    A high-performance, interactive portfolio application architected to replicate the macOS desktop environment, built with React and GSAP.
    <br />
    <br />
    <a href="https://github.com/Mohamed-Alkafory/MacOS_Portfolio">Explore Repository</a>
    ·
    <a href="https://github.com/Mohamed-Alkafory/MacOS_Portfolio/issues">Report Bug</a>
    ·
    <a href="https://github.com/Mohamed-Alkafory/MacOS_Portfolio/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

[![MacOS Portfolio Screen Shot][product-screenshot]](https://github.com/Mohamed-Alkafory)

This project represents a comprehensive technical demonstration of advanced React patterns, complex state management, and physics-based animations. By reconstructing the macOS operating system interface entirely within the browser, it serves as an interactive showcase of frontend engineering capabilities, providing a distinctive and engaging user experience for reviewing professional qualifications.

### System Architecture Highlights

- **Window Management Engine:** A custom-built rendering engine using Zustand that handles Z-index layering, focus management, and Draggable constraints.
- **Hardware-Accelerated Animation:** Utilizing GSAP for high-performance, 60fps animations, mitigating layout thrashing during drag operations.
- **Component-Driven UI:** Highly decoupled React components ensuring maintainability, distinct lifecycle management, and separated concerns.
- **Tailwind Utility Architecture:** A strict adherence to utility-first CSS styling for rapid iteration and minimal CSS payload.

---

## Technical Stack

The application is built leveraging industry-standard modern frontend tooling:

- [![React][React.js]][React-url]
- [![Vite][Vite.js]][Vite-url]
- [![Tailwind][Tailwind.js]][Tailwind-url]
- [![GSAP][GSAP.js]][GSAP-url]
- [![Zustand][Zustand.js]][Zustand-url]

---

## Core Features Directory

The desktop environment features multiple deeply-integrated applications, each serving a distinct purpose in the portfolio presentation:

- **📂 Finder (Portfolio Root)**
  - Acts as the central file explorer. Implements hierarchical navigation for reviewing projects, technical background, and resume documents.
- **📸 Photos (Media Gallery)**
  - A grid-based layout simulating the native Apple Photos application, currently utilized for displaying interface designs and personal media.
- **🧭 Safari (Content Browser)**
  - A dedicated window for reading technical articles, engineering blogs, and deep-dive documentation.
- **⌨️ Terminal (Technical Proficiencies)**
  - A Command Line Interface (CLI) simulation that actively renders the complete technology stack in an authentic console format.
- **📱 Contact Panel**
  - A central directory providing structured, direct navigation to professional networks (GitHub, LinkedIn, Email).

---

## Installation & Deployment

To run this application within a local development environment, follow the steps below.

### Prerequisites

Ensure you have a modern Node.js environment established.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Local Setup

1. Clone the repository
   ```sh
   git clone https://github.com/Mohamed-Alkafory/MacOS_Portfolio.git
   ```
2. Navigate to the project directory
   ```sh
   cd MacOS_Portfolio
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Initialize the Vite development server
   ```sh
   npm run dev
   ```

> **Note:** The interface relies heavily on desktop-centric paradigms (hover states, dragging, complex windowing). It is highly optimized for Desktop and Tablet resolutions.

---

## Directory Structure

A high-level overview of the application's source code organization:

```text
src/
├── components/       # Global abstract UI components (Dock, Navigation)
├── constants/        # Centralized static configuration and content models
├── hoc/              # Higher-Order Components (e.g., Window Draggable Contexts)
├── store/            # Zustand global state slices
├── windows/          # Distinct application modules (Finder, Terminal, Photos)
├── App.jsx           # Master layout controller and window registry
└── index.css         # Reset styles and Tailwind directives
=======

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

| Icon | App | Role |
|:----:|:----|:-----|
| 📂 | **Finder** | File-explorer interface for browsing projects, reading descriptions, and opening GitHub repositories |
| 📸 | **Photos** | Apple Photos-style gallery grid for visual work and design showcases |
| 🧭 | **Safari** | In-window browser UI for displaying technical articles and blog posts |
| ⌨️ | **Terminal** | CLI-style panel rendering the complete tech stack in console format |
| 📬 | **Contact** | Structured social directory linking to GitHub, LinkedIn, Twitter/X, and Email |
| 📄 | **Resume** | Native PDF viewer opening the CV directly inside the window system |

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
>>>>>>> d61115506f6bd5dbbb082e919b3307df7115866f
```

---

<<<<<<< HEAD
## Contact & Professional Network

Mohamed Alkafory - [alkmohamed40@gmail.com](mailto:alkmohamed40@gmail.com)

Project Link: [https://github.com/Mohamed-Alkafory/MacOS_Portfolio](https://github.com/Mohamed-Alkafory/MacOS_Portfolio)

<!-- MARKDOWN LINKS & IMAGES -->

[product-screenshot]: ./public/images/macbook.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev/
[Vite.js]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
[Tailwind.js]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[GSAP.js]: https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white
[GSAP-url]: https://greensock.com/
[Zustand.js]: https://img.shields.io/badge/Zustand-433E38?style=for-the-badge&logo=react&logoColor=white
[Zustand-url]: https://github.com/pmndrs/zustand
=======
<div align="center">

Designed & built by **Mohamed Alkafory**

[GitHub](https://github.com/Mohamed-Alkafory) · [LinkedIn](https://www.linkedin.com/in/Mohamed-Hamed-Alkafory/) · [alkmohamed40@gmail.com](mailto:alkmohamed40@gmail.com)

</div>
>>>>>>> d61115506f6bd5dbbb082e919b3307df7115866f
