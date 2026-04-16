<div align="center">
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
```

---

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
