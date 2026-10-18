# 🧮 NEXUS 01

<div align="center">

**THE FUTURE IS CALCULATED.**

*Enter the next era of precision.*

*An instrument from tomorrow. In your browser today.*

[🌐 Open NEXUS 01](https://romellbermundo.github.io/react-calculator/) · [📦 Source Code](https://github.com/romellbermundo/react-calculator)

</div>

> **Deployment note:** The live link becomes available after GitHub Pages is enabled under **Settings → Pages → Build and deployment → Source: GitHub Actions** and the deployment workflow succeeds.

---

## 📑 Table of Contents

- [About NEXUS 01](#-about-the-quiet-calculator)
- [How It Works](#-how-it-works)
- [Key Features](#-key-features)
- [Getting Started](#-getting-started)
- [Publishing on GitHub Pages](#-publishing-on-github-pages)
- [Project Structure](#-project-structure)
- [Technology](#-technology)
- [Design Philosophy](#-design-philosophy)
- [Privacy and Limitations](#-privacy-and-limitations)
- [Credits](#-credits)
- [Version History](#-version-history)

---

## 📖 About NEXUS 01

**Imagine a calculator designed fifty years into the future.** Not a collection of ordinary buttons, but a precision instrument: a dark, sculpted surface; light that responds to your touch; and a display that seems quietly alive.

**NEXUS 01** brings that vision to everyday arithmetic. Its graphite interface, luminous cyan numbers, and subtle system animations evoke a next-generation control console—while keeping every calculation familiar and effortless.

**The future is calculated.** Technology can feel extraordinary without making the task complicated.

Originally developed as a React learning exercise, it has been thoughtfully rebuilt as a small portfolio application. The reducer and interface are now separated, the keypad is data-driven, and automated regression tests protect everyday arithmetic.

Visitors can use the published website in a browser without installing React, downloading the repository, creating an account, or signing in.

---

## 🔄 How It Works

```text
ACTIVATE NEXUS 01
            │
            ▼
      ENTER A NUMBER
            │
            ▼
    CHOOSE AN OPERATION
      +   −   ×   ÷
            │
            ▼
      ENTER A NUMBER
            │
            ▼
       PRESS EQUALS
            │
            ▼
       VIEW THE RESULT
            │
      ┌─────┴──────┐
      ▼            ▼
    CONTINUE     CLEAR / DELETE
```

React's `useReducer` manages input and calculations. The pure logic lives in `src/calculator.js`, while `App.js` renders a data-driven keypad, handles keyboard shortcuts, and displays the result.

---

## ✨ Key Features

### ➕ Everyday Arithmetic

Add, subtract, multiply, and divide numbers using a straightforward four-column keypad.

### 🔢 Decimal Input

Enter decimal values, with duplicate decimal points prevented within a single number.

### 🧹 Clear and Delete

Use **AC** to reset the calculation or **DEL** to remove the most recent digit.

### 🔁 Chained Calculations

Continue with another operation without restarting from scratch.

### ⌨️ Keyboard Support

Use number keys, decimal point, `+`, `-`, `*`, `/`, Enter or `=`, Backspace, and Escape. The buttons also provide accessible labels and visible keyboard focus.

### 📱 Responsive Layout

A compact keypad adjusts to smaller screens, making the calculator practical on phones and desktop browsers.

### ⚡ A Living Precision Display

Deep graphite surfaces, precise neon-cyan highlights, luminous numbers, and layered shadows create a futuristic technology aesthetic. Subtle screen animations make the display feel alive without sacrificing readability.

### 💬 Quiet, Expandable Footer

The **About** and **Disclaimer** controls reveal information in one shared, invisible, page-centered area. Supporting information stays hidden until requested.

---

## 🚀 Getting Started

### Option A — Use the live website

Visit **[NEXUS 01](https://romellbermundo.github.io/react-calculator/)** once GitHub Pages deployment has completed. No installation is needed.

### Option B — Run locally

Clone the repository:

```bash
git clone https://github.com/romellbermundo/react-calculator.git
cd react-calculator
npm ci
npm start
```

Open [http://localhost:3000](http://localhost:3000).

To create the production website files:

```bash
npm run build
```

The optimized static website is generated in `build/`.

---

## 🌐 Publishing on GitHub Pages

The repository includes an automatic GitHub Actions deployment workflow at `.github/workflows/deploy.yml`.

### One-time GitHub Pages setup

1. Open the repository's **Settings** tab.
2. Select **Pages** in the sidebar.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the **Actions** tab to check the **Deploy React Calculator to GitHub Pages** workflow. If needed, select **Run workflow**.
5. Once deployment succeeds, open **https://romellbermundo.github.io/react-calculator/**.

After this setup, pushes to `main` automatically build and deploy the site. You can also trigger the workflow manually.

### Why the build works

Create React App reads the `homepage` setting in `package.json` to generate asset URLs under `/react-calculator/`. GitHub Actions installs dependencies with `npm ci`, builds the application, uploads `build/`, and publishes it through GitHub Pages.

**Important:** GitHub Pages hosts the compiled static website, not a development server. Visitors don't need Node.js or React installed.

---

## 🏗️ Project Structure

```text
react-calculator/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   ├── calculator.js
│   ├── calculator.test.js
│   └── index.css
├── package.json
├── package-lock.json
└── README.md
```

The pure calculator module handles state transitions and arithmetic, `App.js` renders the interface, and the stylesheet defines the visual experience. The old tutorial components, starter test, React logo, and unused web-vitals boilerplate have been removed.

---

## 🛠️ Technology

| Layer | Technology |
|---|---|
| Interface | React 18, JavaScript, HTML, CSS |
| State management | React `useReducer` and a pure reducer module |
| Supporting UI state | React `useState` |
| Regression tests | Jest via react-scripts |
| Build tooling | Create React App / react-scripts |
| Hosting | GitHub Pages |
| Automated deployment | GitHub Actions |
| Version control | Git and GitHub |

---

## 🎨 Design Philosophy

**Meaningful, but not mechanical.**

NEXUS 01 imagines the kind of instrument that could sit on a laboratory desk, a spacecraft console, or a futuristic engineer's workstation. Its visual language is deliberate: light signals readiness, shadows create depth, and the numbers command attention.

- **Precision over spectacle:** The answer remains the focal point, not the effects around it.
- **Technology that feels alive:** Soft pulses and moving light suggest an active system without distracting from the calculation.
- **Futurism with purpose:** Every glow, surface, and interaction serves clarity and feedback.
- **Power without complexity:** Familiar controls make the interface immediately usable.
- **Progressive disclosure:** Supporting information stays out of sight until requested.
- **A distinct identity:** Unlike the warmth of Cooking Journal, NEXUS 01 expresses Veritas through precision, technology, and a vision of tomorrow.

*Simple on the surface. Thoughtful underneath. Beautiful by intention.*

---

## 🔒 Privacy and Limitations

- **No account required.** Calculations take place in the visitor's browser.
- **No personal calculation history or cloud synchronization.** Refreshing the page does not preserve a history of past calculations.
- **Floating-point limitations.** JavaScript arithmetic may show precision artifacts for some decimal calculations.
- **Not for critical calculations.** Independently verify figures used for financial, engineering, medical, or other high-stakes decisions.
- **Basic arithmetic only.** The application is not a scientific or graphing calculator.

---

## 🙏 Credits

**Original learning foundation:** [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified), whose React Calculator tutorial informed the original calculation logic and component structure.

**Portfolio adaptation and project development:** Romell Bermundo.

The subsequent visual refinement, responsive presentation, and documentation preserve the original tutorial credit while giving the project its own identity.

---

## 🏷️ Version History

### v1.4.0 — Ancient technology ambience

- Changed AC and DEL from crimson to subtle lavender-purple.
- Added descending cyan-violet light traces outside the calculator, inspired by ancient alien technology.
- Added a restrained breathing halo around the chassis.
- Preserved responsive layout and reduced-motion accessibility.

### v1.3.0 — Tactile interface

- Added responsive press-and-release key animations with physical depth, light bloom, and smooth rebound.
- Distinguished AC and DEL with restrained crimson lighting to signal destructive actions.
- Added a subtle display awakening animation while retaining reduced-motion accessibility.
- Fixed malformed display JSX and restored the display status footer.

### v1.2.1 — The future is calculated

- Reframed the README as an invitation into a futuristic precision interface.
- Expanded the introduction and design philosophy to explain the living display, purposeful lighting, and next-generation instrument aesthetic.
- Refined the project tagline and corrected historical version descriptions.

### v1.2.0 — NEXUS 01 futuristic interface

- Reimagined the warm Quiet Calculator aesthetic as NEXUS 01, a cinematic future-facing precision instrument.
- Added a near-black graphite palette, cyan light accents, glass-like shadows, and glowing numeric display.
- Introduced restrained display scanlines, a scanning light, a pulsing system indicator, and responsive button lighting.
- Preserved keyboard support, core arithmetic, and reduced-motion accessibility.
- Updated browser metadata, title, and theme color to match the new identity.

### v1.1.0 — Architecture and reliability refactor

- Extracted calculation logic into a dedicated, testable reducer module.
- Rebuilt the keypad from a single declarative key configuration and added keyboard support.
- Fixed decimal handling, operand replacement, division-by-zero display, and common floating-point artifacts.
- Removed unused Create React App tutorial files and outdated starter tests.
- Added calculator regression tests and required them to pass before automatic deployment.
- Formatted the styles and simplified the React entry point while keeping the Quiet Calculator identity of that release.

### v1.0.1 — GitHub Pages and portfolio documentation

- Configured the React production build for the GitHub Pages project URL.
- Added automatic deployment using GitHub Actions.
- Updated the browser title and metadata.
- Rebuilt the README using the Cooking Journal documentation pattern, including a table of contents, process diagram, setup and deployment instructions, technology, privacy, credits, and version history.

### v1.0.0 — The Quiet Calculator

- Introduced a warm, responsive visual identity and welcoming microcopy.
- Added an understated footer with a shared, invisible centered detail area.
- Preserved the original React reducer-based calculator functionality.
